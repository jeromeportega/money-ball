import React, { Component } from 'react';
import googleSignIn from '../images/google-sign-in.png';
import Typography from 'material-ui/Typography';
import Dialog, {
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

class CreateLoan extends Component {

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
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default CreateLoan;
