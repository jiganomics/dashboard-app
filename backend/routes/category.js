import Category from "../models/category";

export const getCategories = (req, res) => {
    Category.find((err, doc) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({
            success: true,
            data: doc.sort((a, b) => {
                if(a.type !== b.type) return b.type === 'income' ? 1 : -1;
                return a.order - b.order
            })
        });
    });
};
