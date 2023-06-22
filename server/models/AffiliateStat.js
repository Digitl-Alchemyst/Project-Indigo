import mongoose from 'mongoose';

const AffiliateStatSchema = new mongoose.Schema(
// create a products schema here based on the following list: Product	_id	String	name	String	price	String	description	String	category	String	rating	Number	supply	Number
    {
        userId: {
            type: mongoose.Types.ObjectId, ref: 'User'},
            affiliateSales: {
                type: [mongoose.Types.ObjectId],
                ref: 'Transaction'
            },
    },
    { timestamps: true }
);

const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema);
export default AffiliateStat;
