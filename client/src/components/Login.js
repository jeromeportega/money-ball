import React, { Component } from 'react';
import googleSignIn from '../images/google-sign-in.png';
import Typography from 'material-ui/Typography';
import Dialog, {
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

class Login extends Component {

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleClose}
                >
                    <DialogTitle>Login</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please choose a service below to log in, or create your account!
                        </DialogContentText>
                    </DialogContent>
                    <DialogContent>
                        <Typography align="center">
                            <img
                                onClick={() => {window.location = "/auth/google"}}
                                src={googleSignIn}
                                style={{cursor: 'pointer'}}
                                alt=""
                            />
                        </Typography>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default Login;
