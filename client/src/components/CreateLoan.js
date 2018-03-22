import React, { Component } from 'react';
import * as actions from '../actions';
import { numberOfPayments } from '../helpers/financialEquations';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { InputAdornment } from 'material-ui/Input';
import Dialog, {
    DialogContent,
    DialogContentText,
    DialogTitle,
    DialogActions
} from 'material-ui/Dialog';

class CreateLoan extends Component {
    state = {
        name: '',
        balance: '',
        payment: '',
        interestRate: '',
        paymentDate: '',
        errors: {
            name: false,
            balance: false,
            payment: false,
            interestRate: false,
            paymentDate: false,
        }
    }

    renderFields() {
        const fields = [
            <TextField key="1" fullWidth value={this.state.name} error={this.state.errors.name} name="name" required label="Name of Loan" margin="dense" onChange={this.handleInput} />,
            <TextField key="2" fullWidth value={this.state.balance} error={this.state.errors.balance} type="number" InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}} name="balance" required label="Current Balance" margin="dense" onChange={this.handleInput} />,
            <TextField key="3" fullWidth value={this.state.payment} error={this.state.errors.payment} type="number" InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}name="payment" required label="Monthly Payment Amount" margin="dense" onChange={this.handleInput} />,
            <TextField key="4" fullWidth value={this.state.interestRate} error={this.state.errors.interestRate} type="number" InputProps={{startAdornment: <InputAdornment position="start">%</InputAdornment>}} name="interestRate" required label="Interest Rate" margin="dense" onChange={this.handleInput} />,
            <TextField key="6" name="paymentDate" error={this.state.errors.paymentDate} fullWidth required label="Next Payment Date" type="date" InputLabelProps={{shrink: true}} onChange={this.handleInput} />,
        ];

        return fields;
    }

    handleInput = (e) => {
        if (e.currentTarget.name === "name") this.setState({ name: e.currentTarget.value });
        else if (e.currentTarget.name === "balance") {
            if (e.currentTarget.value === '') this.setState({ balance: '' });
            else this.setState({ balance: parseFloat(e.currentTarget.value) });
        }
        else if (e.currentTarget.name === "payment") {
            if (e.currentTarget.value === '') this.setState({ payment: '' });
            else this.setState({ payment: parseFloat(e.currentTarget.value) });
        }
        else if (e.currentTarget.name === "interestRate") {
            if (e.currentTarget.value === '') this.setState({ interestRate: '' });
            else this.setState({ interestRate: parseFloat(e.currentTarget.value) });
        }
        else if (e.currentTarget.name === "paymentDate") this.setState({ paymentDate: new Date(e.currentTarget.value) });
    }

    handleSubmit = () => {
        let errors = {};
        const values = JSON.parse(JSON.stringify(this.state));
        if (!values.name) errors.name = true;
        else errors.name = false;
        if (!values.balance) errors.balance = true;
        else errors.balance = false;
        if (!values.payment) errors.payment = true;
        else errors.payment = false;
        if (!values.interestRate) errors.interestRate = true;
        else errors.interestRate = false;

        this.setState({ errors: errors });

        for (const error in errors) {
            if (errors[error] === true) return;
        }

        delete values.errors;

        values.interestRate = values.interestRate / 100.0 / 12.0;
        values.paymentsLeft = numberOfPayments(values.balance, values.interestRate, values.payment);

        this.props.submitLoan(values);
        this.props.handleClose();
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleClose}
                >
                    <DialogTitle>Create Loan</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill in the info to create a new loan.
                        </DialogContentText>
                        {this.renderFields()}
                    </DialogContent>
                    <DialogActions>
                        <Button variant="raised" color="primary" onClick={this.handleSubmit}>Create</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default connect(null, actions)(CreateLoan);
