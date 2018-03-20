const mongoose = require('mongoose');
const { Schema } = mongoose;

const LoanSchema = new Schema({
    name: { type: String, required: [true, 'Please provide a name for this loan.'] },
    balance: { type: Number, required: [true, 'Please provide the current remaining balance on the loan.'] },
    payment: { type: Number, required: [true, 'Please provide your monthly payment.'] },
    interestRate: { type: Number, required: [true, 'Please provide the interest rate on the loan as a percentage.'] },
    paymentsLeft: { type: Number, required: [true, 'Tell us how many monthly payments are left on this loan.'] },
    date_created: { type: Date, default: Date.now },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('loans', LoanSchema);
