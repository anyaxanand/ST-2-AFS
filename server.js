import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/books', bookRoutes); 

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Database connected');
    app.listen(process.env.PORT, () => {
        console.log(`Books are running on the port ${process.env.PORT}`);
    });

})
.catch(err => console.error(err));

