import Transaction from "../models/transaction";

export const getTransactions = (req, res) => {
    Transaction.find({ date: /.*2010/i }, (err, doc) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: doc });
    });
};

export const createTransaction =  (req, res) => {
    const transaction = new Transaction();
    // body parser lets us use the req.body
    const { payee, category } = req.body;
    if (!payee || !category) {
        // we should throw an error. we can do this check on the front end
        return res.json({
            success: false,
            error: 'You must provide an payee and category'
        });
    }
    transaction.payee = payee;
    transaction.category = category;
    transaction.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
};
