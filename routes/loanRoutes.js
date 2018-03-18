const mongoose = require('mongoose');
const Loan = mongoose.model('loans');

module.exports = (app) => {
    app.get('/loans', requireLogin, async (req, res) => {
        const loans = await Loan.find({ _user: req.user.id });

        res.send(loans);
    });

    app.post('/loans/create', requireLogin, (req, res) => {

    });
}
