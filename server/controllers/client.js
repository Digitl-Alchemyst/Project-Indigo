import { get } from 'mongoose';
import Product from '../models/Product.js';
import ProductStat from '../models/ProductStat.js';
import User from "../models/User.js";
import getCountryIso3 from "country-iso-2-to-3";
import Transaction from "../models/Transaction.js";


export const getProducts = async (req, res) => { // req = fetch paramaters and body res = send data to front end or api call
    try{
        const products = await Product.find(); // find all products

        const productsWithStats = await Promise.all( // get all products with stats
            products.map(async (product) => { // map through all products
            const stat = await ProductStat.find({  
                productId: product._id  // find all stats with the product id
            });
            return { // return and array of product info and stats
                ...product._doc,
                stat,
            }
            })
        );

        res.status(200).json(productsWithStats); // send the data to the front end

    }
    
    catch (error) 
    {
      res.status(404).json({ message: error.message });
    }
  };

  export const getCustomers = async (req, res) => {
    try {
      const customers = await User.find({ role: "user" }).select("-password");
      res.status(200).json(customers);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


  export const getGeography = async (req, res) => {
    try {
      const users = await User.find({ role: "user" }).select("-password");

      const mappedLocations = users.reduce(( acc, { country }) => {
       const countryISO3 = getCountryIso3(country); 
       if (!acc[countryISO3]) {
          acc[countryISO3] = 0;
          } 
          acc[countryISO3]++;
          return acc;

      }, {});

      const formattedLocations = Object.entries(mappedLocations).map(
        ([country, count]) => {
          return {
            id: country,
            value: count,
          };
      });      
      
      // console.log(formattedLocations)
      res.status(200).json(formattedLocations);

    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  export const getTransactions = async (req, res) => {
    try{
      const { page =1, pageSize = 20, sort = null, search = "" } = req.query; 

      const generateSort = () => {
        const sortParsed = JSON.parse(sort);
        const sortFormatted = {
          [sortParsed.field]: sortParsed.order = "asc" ? 1 : -1,
        };
        return sortFormatted;
      }

      const sortFormatted = Boolean(sort) ? generateSort() : {};

      const transactions = await Transaction.find({
        $or: [
          { cost: { $regex: new RegExp(search, "i") } },
          { userID: { $regex: new RegExp(search, "i") } },
        ],
      })
        .sort(sortFormatted)
        .skip(page * pageSize)
        .limit(pageSize);

      const total = await Transaction.countDocuments({
        name: { $regex: search, $options: "i" },
      });

      res.status(200).json({ transactions, total });
      
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

