import React from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import CountUp from 'react-countup';
import Icon from 'material-ui/Icon';

const Loan = (props) => {
    return (
        <Card>
            <CardHeader
                action={
                    <Icon>more_vert_icon</Icon>
                }
                title="Whatever"
                subheader="Some Date"
            />
            <CardContent>
                <Typography color="primary" component="h3">
                    <CountUp
                        className="account-balance"
                        start={0}
                        end={1605.26}
                        useEasing={true}
                        separator=","
                        decimal="."
                        prefix="$"
                    />
                </Typography>
            </CardContent>
        </Card>
    )
};

export default Loan;
