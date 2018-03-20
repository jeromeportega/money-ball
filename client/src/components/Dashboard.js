import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

import Loan from './Loan';
import CreateLoan from './CreateLoan';

class Dashboard extends Component {
    state = {
        showCreateLoanDialog: false
    }

    openCreateLoanDialog = () => {
        this.setState({ showCreateLoanDialog: true });
    }

    closeCreateLoanDialog = () => {
        this.setState({ showCreateLoanDialog: false });
    }

    renderContent() {
        const gridItems = [];
        for (let i = 0; i < this.props.loans.length; i++) {
            if (i % 2 === 0) gridItems.push(<Hidden key={i-1000} smDown={true}><Grid item md={1} lg={2} xl={3}></Grid></Hidden>);
            else gridItems.push(<Grid key={i} item xs={12} sm={6} md={5} lg={4} xl={3}><Loan /></Grid>);
        }

        return gridItems;
    }

    render() {
        if (this.props.auth === false) return <Redirect to="/" />
        const { showCreateLoanDialog } = this.state;

        return (
            <div>
                <Grid container spacing={8}>
                    {this.renderContent()}
                </Grid>
                <Button
                    variant="fab"
                    color="primary"
                    aria-label="add"
                    style={{right: '6%', bottom: '5%', position: 'fixed'}}
                    onClick={this.openCreateLoanDialog}
                >
                    <Icon>add</Icon>
                </Button>
                {
                    showCreateLoanDialog &&
                        <CreateLoan open={showCreateLoanDialog} handleClose={this.closeCreateLoanDialog}/>
                }
            </div>
        );
    }
};

function mapStateToProps({ auth, loans }) {
    return { auth, loans };
}

export default connect(mapStateToProps)(Dashboard);
