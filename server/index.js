// Framework Import
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
// import userRoutes from './routes/user.js';
// import adminRoutes from './routes/admin.js';
import managementRoutes from './routes/management.js';
// import apiRoutes from './routes/api.js';
import salesRoutes from './routes/sales.js';

// database injection data
import User from './models/user.js';
import { dataUser } from './data/index.js';

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.get('/client', clientRoutes);
app.get('/general', generalRoutes);
// app.get('/user', userRoutes);
// app.get('/admin', adminRoutes);
app.use("/management", managementRoutes);
// app.use('/api', apiRoutes);
app.use('/sales', salesRoutes);

// MONGOOSE CONFIG
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // Only run this once to inject data into the database
    User.insertMany(dataUser);
    console.log('Data Inserted');
    

    })    
    .catch((error) => console.log("${error} cannot make a connection to the database"));
    
    

