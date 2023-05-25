import mongoose from 'mongoose';

const OverallStatSchema = new mongoose.Schema(
    {
        totalCustomers: {
            type: Number,
        },
        yearlySalesTotal: {
            type: Number,
        },
        yearlyTotalSoldUnits: {
            type: Number,
        },
        year: {
            type: Number,
        },
        monthlyData: [
            {
                month: String,
                totalSales: Number,
                totalUnits: Number,
            }
        ],
        dailyData: [
            {
                month: String,
                totalSales: Number,
                totalUnits: Number,
            }
        ],
        salesByCategory: {
            type: Map,
            of: Number,
        },
        // salesByProduct: {
        //     type: Map,
        //     of: Number,
        // },
        // salesByCountry: {
        //     type: Map,
        //     of: Number,
        // },
    },
    { timestamps: true }
);

const OverallStat = mongoose.model("OverallStat", OverallStatSchema);
export default OverallStat;
