const mongoose = require('mongoose');
const { Schema } = mongoose;

const LoanSchema = new Schema({
    name: { type: String, required: [true, 'Please provide a name for the bank this loan belongs to.'] },
    loanName: { type: String, required: [true, 'Please provide the name for this loan.'] },
    balance: { type: Number, required: [true, 'Please provide the current remaining balance on the loan.'] },
    payment: { type: Number, required: [true, 'Please provide your monthly payment.'] },
    interestRate: { type: Number, required: [true, 'Please provide the interest rate on the loan as a percentage.'] },
    paymentsLeft: { type: Number, required: [true, 'Tell us how many monthly payments are left on this loan.'] },
    paymentDate: { type: Date, required: [true, 'The date of your next payment is required.'] },
    date_created: { type: Date, default: Date.now },
    date_updated: Date,
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('loans', LoanSchema);
