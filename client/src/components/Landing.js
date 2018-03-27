import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Landing extends Component {
    render() {
        if (this.props.auth === true) return <Redirect to="/dashboard" />;

        return (
            <div>Landing</div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Landing);
