// server.js

// first we import our dependencies…
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';
import { getBudgetGroups } from './routes/budgetGroup';
import { getCategories } from './routes/category';
import { getComments, createComment, updateComment, deleteComment } from './routes/comment';
import { getBudgetData, getBudgetData2 } from './routes/budget';
import { getTransactions } from './routes/transaction';

// and create our instances
const app = express();
const router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
//     export API_PORT=6001
const API_PORT = process.env.API_PORT || 3001;

// db config -- set your URI from mLab in secrets.js
mongoose.connect(getSecret('dbUri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

// now we can set the route path & initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

router.get('/budgetGroups', getBudgetGroups);

router.get('/categories', getCategories);

router.get('/comments', getComments);
router.post('/comments', createComment);
router.put('/comments/:commentId', updateComment);
router.delete('/comments/:commentId', deleteComment);

router.get('/transactions', getTransactions);
router.get('/budgetData', getBudgetData);
router.get('/budgetData2', getBudgetData2);

// Use our router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
