import mongoose from "mongoose";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

export const getAdmins = async (req, res) => {
    try {
      const admins = await User.find({ role: "admin" }).select("-password");
      res.status(200).json(admins);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


// Aggregate the affiliate stats and transactions of a user
export const getUserPerformance = async (req, res) => {
  try {
    const { id } = req.params;

    const userWithStats = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "affiliatestats",
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats",
        },
      },
      {
        $unwind: {
          path: "$affiliateStats",
          preserveNullAndEmptyArrays: true,
        },
      },
    ]);

    const saleTransactions = await Transaction.find({
      _id: { $in: userWithStats[0].affiliateStats?.affiliateSales || [] },
    });

    res.status(200).json({ user: userWithStats[0], sales: saleTransactions });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
