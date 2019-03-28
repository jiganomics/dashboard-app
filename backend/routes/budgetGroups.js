import BudgetGroups from "../models/budgetGroups";

export const getBudgetGroups = (req, res) => {
    BudgetGroups.find((err, budgetGroups) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({
            success: true,
            data: budgetGroups.sort((a, b) => {
                if(a.type !== b.type) return b.type === 'income' ? 1 : -1;
                return a.order - b.order
            })
        });
    });
};
