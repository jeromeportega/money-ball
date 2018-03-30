import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';
import * as actions from '../actions';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Menu, { MenuItem } from 'material-ui/Menu';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import CountUp from 'react-countup';
import Icon from 'material-ui/Icon';
import List, { ListItem, ListItemText } from 'material-ui/List';

class Loan extends Component {
    state = {
        anchorEl: null,
    }

    handleMenuClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    }

    handleLoanDelete = () => {
        this.props.deleteLoan({id: this.props.loan._id});
        this.props.fetchLoans();
        this.handleMenuClose();
    }

    render() {
        const props = this.props;
        const { anchorEl } = this.state;

        return (
            <Card>
                <CardHeader
                    action={
                        <Icon
                            aria-owns={anchorEl ? 'simple-menu' : null}
                            onClick={this.handleMenuClick}
                            className="pointer"
                        >
                            more_vert_icon
                        </Icon>
                    }
                    title={props.loan.name}
                    subheader={props.loan.loanName}
                />
                <CardContent>
                    <Typography color="primary" component="h3" style={{marginBottom: '20px'}}>
                        <CountUp
                            className="account-balance"
                            start={0}
                            end={props.loan.balance}
                            useEasing={true}
                            separator=","
                            decimal="."
                            prefix="$"
                        />
                    </Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <List>
                                <ListItem>
                                    <ListItemText
                                        primary={'$' + (props.loan.payment).toFixed(2)}
                                        secondary='Monthly Payment'
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={(props.loan.interestRate * 12 * 100).toFixed(2) + ' %'}
                                        secondary='Interest Rate'
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={moment(props.loan.paymentDate).format('L')}
                                        secondary="Next Payment Date"
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={6}>
                            <List>
                                <ListItem>
                                    <ListItemText
                                        primary={props.loan.paymentsLeft}
                                        secondary='Payments Left'
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={moment(props.loan.paymentDate).add(props.loan.paymentsLeft, 'month').format('L')}
                                        secondary='Payoff Date'
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </CardContent>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleMenuClose}
                >
                    <MenuItem onClick={this.handleMenuClose}>Make a Mock Payment</MenuItem>
                    <MenuItem onClick={this.handleMenuClose}>Edit Loan</MenuItem>
                    <MenuItem onClick={this.handleLoanDelete}>Delete Loan</MenuItem>
                </Menu>
            </Card>
        )
    }
};

export default connect(null, actions)(Loan);
