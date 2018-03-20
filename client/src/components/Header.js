import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Menu, { MenuItem } from 'material-ui/Menu';
import Toolbar from 'material-ui/Toolbar';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import Loader from './Loader';
import Login from './Login';

const styles = {
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends Component {
    state = {
        anchorEl: null,
        showLoginModal: false,
    }

    closeMenu = () => {
        this.setState({ anchorEl: null });
    }

    openMenu = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    }

    logout = () => {
        this.closeMenu();
        window.location = "/api/logout";
    }

    handleClose = () => {
        this.setState({ showLoginModal: false });
    }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        if (this.props.auth === null) return <Loader />;

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <Icon>menu</Icon>
                        </IconButton>
                        <Typography className={classes.flex} variant="title" color="inherit">
                            MoneyBall
                        </Typography>
                        <div>
                            {
                                !this.props.auth ?
                                    <Button variant="raised" color="secondary" onClick={() => this.setState({showLoginModal: true})}>Login</Button>
                                :
                                    <div>
                                        <IconButton
                                            aria-haspopup="true"
                                            aria-owns={open ? 'menu-appbar' : null}
                                            onClick={this.openMenu}
                                            color="inherit"
                                        >
                                            <Icon>account_circle</Icon>
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            open={open}
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            onClose={this.closeMenu}
                                        >
                                            <MenuItem onClick={this.closeMenu}>My Account</MenuItem>
                                            <MenuItem onClick={this.logout}>Log Out</MenuItem>
                                        </Menu>
                                    </div>
                            }
                        </div>
                    </Toolbar>
                </AppBar>
                {
                    this.state.showLoginModal && <Login open={this.state.showLoginModal} handleClose={this.handleClose}/>
                }
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(withStyles(styles)(Header));
