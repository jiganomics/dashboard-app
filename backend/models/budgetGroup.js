// model/budgetGroup.js
// import dependency
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const CategoriesSchema = new Schema({
    id: String,
    name: String,
});
const BudgetGroupSchema = new Schema({
  name: String,
  type: String,
  order: Number,
  categories: [CategoriesSchema],
}, { timestamps: true });

// export our module to use in server.js
export default mongoose.model('BudgetGroup', BudgetGroupSchema, 'budgetGroups');
