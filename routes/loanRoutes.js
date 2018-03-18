const mongoose = require('mongoose');
const Loan = mongoose.model('loans');

module.exports = (app) => {
    app.get('/loans', requireLogin, async (req, res) => {
        const loans = await Loan.find({ _user: req.user.id });

        res.send(loans);
    });

    app.post('/loans/create', requireLogin, async (req, res) => {
        const { balance, payment, interestRate, paymentsLeft } = req.body;

        const loan = new Loan({
            balance,
            payment,
            interestRate,
            paymentsLeft,
            date_created: Date.now()
            _user: req.user.id
        });

        await loan.save();

        return res.send({ message: 'Your loan was successfully added!' });
    });
}
