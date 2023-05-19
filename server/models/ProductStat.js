import mongoose from 'mongoose';

const ProductStatSchema = mongoose.Schema(
// create a products schema here based on the following list: ProductStat	_id	Number	productId	Number Ref	yearlySalesTotal	Currency	yearlyTotalSoldUnits	Number	year	Number	monthlyData	Array<Object>	dailyData	Array<Object>

    {
        productId: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        yearlySalesTotal: {
            type: Number,
            required: true,
            min: 2,
            max: 100,
        },
        yearlyTotalSoldUnits: {
            type: Number,
            required: true,
            min: 2,
            max: 100,
        },
        year: {
            type: Number,
            required: true,
            min: 2,
            max: 100,
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
    },
    { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;


