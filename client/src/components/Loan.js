import React from 'react';
import * as moment from 'moment';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import CountUp from 'react-countup';
import Icon from 'material-ui/Icon';
import List, { ListItem, ListItemText } from 'material-ui/List';

const Loan = (props) => {
    return (
        <Card>
            <CardHeader
                action={
                    <Icon>more_vert_icon</Icon>
                }
                title={props.loan.name}
                subheader={"Next Payment Date: " + moment(props.loan.paymentDate).format('L')}
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
                        </List>
                    </Grid>
                    <Grid item xs={6}>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary={props.loan.paymentsLeft}
                                    secondary='Payments Left on Loan'
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
        </Card>
    )
};

export default Loan;
