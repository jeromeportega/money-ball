const mongoose = require('mongoose');
const Loan = mongoose.model('loans');
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
    app.get('/api/loans', requireLogin, async (req, res) => {
        const loans = await Loan.find({ _user: req.user.id });

        res.send(loans);
    });

    // TODO: Include Validation middleware to validate the incoming create loan payload fields
    app.post('/api/loans', requireLogin, async (req, res) => {
        const { name, loanName, balance, payment, interestRate, paymentsLeft, paymentDate } = req.body;

        const loan = new Loan({
            name,
            loanName,
            balance,
            payment,
            interestRate,
            paymentsLeft,
            paymentDate,
            date_created: Date.now(),
            date_updated: Date.now(),
            _user: req.user.id
        });

        await loan.save();

        return res.send({ message: 'Your loan was successfully added!' });
    });

    app.post('/api/deleteLoan', requireLogin, async (req, res) => {
        await Loan.findByIdAndRemove(req.body.id);

        return res.send({ message: 'Your loan was successfully deleted!' });
    });
}
