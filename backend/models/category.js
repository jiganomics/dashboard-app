import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const CategorySchema = new Schema({
    id: String,
    name: String,
}, { timestamps: true });

// export our module to use in server.js
export default mongoose.model('Category', CategorySchema, 'categories');
