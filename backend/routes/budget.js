import BudgetGroup from "../models/budgetGroup";
import Transaction from "../models/transaction";

export const getBudgetData2 = (req, res) => {
    //Transaction.find({ date: /.*2017/i }, (err, doc) => {
    Transaction.find({ date: "1/24/2017" }, (err, doc) => {
        if (err) return res.json({ success: false, error: err });
const data = {};
doc.map((x) => {
  const date = x.date.split("/")[0] - 1;
console.log(date);
console.log(data[x.category]);
console.log(data[x.budgetCategory]);
if(data[x.budgetCategory] === undefined)
  data[x.budgetCategory] = {
     budget: [0,0,0,0,0,0,0,0,0,0,0,0],
     actual: [0,0,0,0,0,0,0,0,0,0,0,0]
  };
console.log("budgetCategory: " + x.budgetCategory);
console.log("raw: " + x.raw);
console.log(x);
if(x.budgetCategory !== undefined && x.raw !== undefined)
  data[x.budgetCategory].actual[date] = (x.raw.debit === "") ? x.raw.credit : x.raw.debit;
});
console.log(data);
        return res.json({ success: true, data: data });
    });
};

export const getBudgetData = (req, res) => {
	BudgetGroup.find((err, bgdoc) => {
        if (err) return { success: false, error: err };
		const budgetGroups = bgdoc.sort((a, b) => {
			if(a.type !== b.type) return b.type === 'income' ? 1 : -1;
			return a.order - b.order
		});

		Transaction.find({ date: "1/24/2017" }, (err, doc) => {
			if (err) return res.json({ success: false, error: err });

			const defaultData = () => ([
				{ budget: 0, actual: 0, diff: 0, },
				{ budget: 0, actual: 0, diff: 0, },
				{ budget: 0, actual: 0, diff: 0, },
				{ budget: 0, actual: 0, diff: 0, },
				{ budget: 0, actual: 0, diff: 0, },
				{ budget: 0, actual: 0, diff: 0, },
				{ budget: 0, actual: 0, diff: 0, },
				{ budget: 0, actual: 0, diff: 0, },
				{ budget: 0, actual: 0, diff: 0, },
				{ budget: 0, actual: 0, diff: 0, },
				{ budget: 0, actual: 0, diff: 0, },
				{ budget: 0, actual: 0, diff: 0, },
			]);

			const transdata = {};
			doc.map((x) => {
				const month = x.date.split("/")[0];
				if(x.budgetCategory !== undefined) {
					if(transdata[x.budgetCategory] === undefined) {
						transdata[x.budgetCategory] = defaultData();
					}
					if(x.raw !== undefined) {
						transdata[x.budgetCategory][month-1].actual = (x.raw.debit === "") ? x.raw.credit : x.raw.debit;
					}
				}
			});

			const data = budgetGroups.map(group => ({
				name: group.name,
				type: group.type,
				categories: group.categories.map(category => ({
					id: category.id,
					name: category.name,
					data: (transdata[category.id] !== undefined) ? transdata[category.id] : defaultData(),
				})),
			}));
			return res.json({ success: true, data: data });
		});
    });
};
