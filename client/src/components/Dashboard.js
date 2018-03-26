import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

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

    componentDidMount() {
        this.props.fetchLoans();
    }

    openCreateLoanDialog = () => {
        this.setState({ showCreateLoanDialog: true });
    }

    closeCreateLoanDialog = () => {
        this.setState({ showCreateLoanDialog: false });
    }

    renderGrid(block, i) {
        return (
            <Grid key={i} container justify="center" spacing={8}>
                {block}
            </Grid>
        )
    }

    renderContent() {
        let blocks = [], grids = [];
        const { loans } = this.props;
        loans.forEach((loan, i) => {
            blocks.push(<Grid key={loan.id} item xs={12} sm={6} md={5} lg={5} xl={4}><Loan loan={loan} /></Grid>);
            if (blocks.length >= 2 || ((i === loans.length - 1) && (i % 2 === 0))) {
                const newGrid = this.renderGrid(blocks, i);
                grids.push(newGrid);
                blocks = [];
            }
        })
        return grids;
    }

    render() {
        if (this.props.auth === false) return <Redirect to="/" />
        const { showCreateLoanDialog } = this.state;

        return (
            <div>
                {!!this.props.loans && this.props.loans.length > 0 && this.renderContent()}
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

export default connect(mapStateToProps, actions)(Dashboard);
