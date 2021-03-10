import React, {Fragment, Component} from 'react';
import Logo from '../../components/logo/Logo';
import {
	AppBar,
	Toolbar,
	Typography,
	Card,
	List,
	ListItem,
	Divider,
	TextField,
	Button,
} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from '../../reducers/actions';



const styles = {
    grow: {
        flexGrow: 1,
    },
    title: {
        width: '100%',
        textAlign: 'center',
    },
    logo: {
        // border: '1px solid red',
    },
    textRoot: {
        width: '100%',
    },
    textField: {
        width: '100%',
    },
    radioItem: {
        width: '100%',
        // border: '1px solid red',
        alignItems: 'initial',
    },
    spanItem: {
        marginLeft: 20,
        // border: '1px solid green',
    },
    submitButton: {
        width: '100%',
        marginTop: 5,
    },
    errorMsg: {
        color: 'red',
        marginLeft: '1em',
    }
};

class Login extends Component {

    state = {
        username: '',
        password: '',
    };

    handleChange = (name) => (event) => {
        this.setState({[name]: event.target.value});
    };

    handleSubmit = () => {
        this.props.login(this.state);
    };

    toLoginPage = () => {
        const {history} = this.props;
        history.replace('register');
    };

    render() {
        const {classes} = this.props;
        const {msg, redirectTo} = this.props.user;

        if(redirectTo) {
            return <Redirect to={redirectTo} />
        }

        return (
            <Fragment>
                <div className={classes.grow}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h5" className={classes.title}>
                                Direct employment
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div>
                    <Logo
                        className={classes.logo}
                    />
                </div>
                <Card>
                    <List className={classes.textRoot}>
                        {msg ? <div className={classes.errorMsg}>{msg}</div> : null}
                        <ListItem alignItems="flex-start">
                            <TextField
                                placeholder="Please enter user name"
                                id="username"
                                label="username:"
                                variant="outlined"
                                className={classes.textField}
                                value={this.state.username}
                                onChange={this.handleChange('username')}
                            />
                        </ListItem>
                        <Divider/>
                        <ListItem alignItems="flex-start">
                            <TextField
                                placeholder="Please enter 6 digits password"
                                id="password"
                                label="Password:"
                                variant="outlined"
                                className={classes.textField}
                                type='password'
                                onChange={this.handleChange('password')}
                            />
                        </ListItem>
                    </List>
                </Card>
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    className={classes.submitButton}
                    fullWidth
                    onClick={this.handleSubmit}
                >
                    Login
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    disableElevation
                    className={classes.submitButton}
                    fullWidth
                    onClick={this.toLoginPage}
                >
                    Create new account
                </Button>
            </Fragment>
        );
    }
}

export default connect(
    state => ({user: state.user}),
    {login},
)(withStyles(styles)(Login));
