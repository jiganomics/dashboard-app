import BudgetGroup from "../models/budgetGroup";

export const getBudgetGroups = (req, res) => {
    BudgetGroup.find((err, doc) => {
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
