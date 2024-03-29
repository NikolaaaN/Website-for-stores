import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import loginRouter from './routers/login.routes';
import companyRouter from './routers/company.routes';
import categoryRouter from './routers/category.routes';
import customerRouter from './routers/customer.routes';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/projectDB');
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('db connected');
});

const router = express.Router();

router.use('/users', loginRouter);
router.use('/companies', companyRouter);
router.use('/categories', categoryRouter);
router.use('/customer', customerRouter);

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
