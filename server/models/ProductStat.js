import mongoose from 'mongoose';

const ProductStatSchema = mongoose.Schema(
// create a products schema here based on the following list: ProductStat	_id	Number	productId	Number Ref	yearlySalesTotal	Currency	yearlyTotalSoldUnits	Number	year	Number	monthlyData	Array<Object>	dailyData	Array<Object>

    {
        productId: {
            type: String,
            required: true
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
    },
    { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;


