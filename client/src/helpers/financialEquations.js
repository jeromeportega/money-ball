// This calculates the number of payments there are left on a loan.
// I use Math.ceil so that I make sure to account for the straggling amount to the number of payments remaining.
export const numberOfPayments = (amount, interestRate, payment) => {
    let paymentsLeft = Math.ceil((-1*Math.log(1-(amount*interestRate)/payment))/Math.log(1+interestRate));
    return paymentsLeft;
}
