import Product from '../models/product.js';
import ProductStat from '../models/ProductStat.js';

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