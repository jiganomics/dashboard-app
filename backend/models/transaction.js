import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const RawSchema = new Schema({
  debit: String,
  credit: String,
}, { timestamps: true });
const TransactionSchema = new Schema({
  date: String,
  payee: String,
  category: String,
  budgetCategory: String,
  amount: String,
  raw: RawSchema,
}, { timestamps: true });

// export our module to use in server.js
export default mongoose.model('Transaction', TransactionSchema, 'transaction');
