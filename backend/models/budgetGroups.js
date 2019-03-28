// model/budgetGroups.js
// import dependency
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const CategoriesSchema = new Schema({
    id: String,
    name: String,
});
const BudgetGroupsSchema = new Schema({
  name: String,
  type: String,
  order: Number,
  categories: [CategoriesSchema],
}, { timestamps: true });
const BudgetSchema = new Schema({
    author: String,
    text: String,
    description: String,
    place: String,
}, { timestamps: true });

// export our module to use in server.js
export default mongoose.model('BudgetGroups', BudgetGroupsSchema, 'budgetGroups');
// export default mongoose.model('BudgetGroups', BudgetSchema, 'budgetGroups');
