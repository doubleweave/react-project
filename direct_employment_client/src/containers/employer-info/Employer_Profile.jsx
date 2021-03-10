/*
* Router container component of Employer Info
* */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    AppBar,
    Toolbar,
    Typography,
    Card,
    List,
    ListItem,
    TextField,
    Button,
		Dialog,
		DialogTitle,
    DialogActions,
} from '@material-ui/core';
import {
    withStyles,
} from '@material-ui/core/styles';
import AvatarSelector from '../../components/avatarSelector/AvatarSelector'
import {updateUser} from "../../reducers/actions";
import {Redirect} from 'react-router-dom';

const styles = {
    headerBar: {
        width: '100%',
        textAlign: 'center',
    },
    submitButton: {
        fontSize: '1em',
        marginTop: '5px',
    },
};

class Employer_Profile extends Component {
    state = {
        avatar: '',
        recruitment: '',
        organization: '',
        salary: '',
        info: '',
				open: false,
    };

    setAvatar = (avatar) => {
        this.setState({
            avatar
        });
    };

		handleOpen = () => {
			this.setState({open: true});
		};
		handleClose = () => {
				this.setState({open: false});
		};

    handleChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value,
        })
    };

    handleSubmit = () => {
        this.props.updateUser(this.state);
    };

    render() {
        const {classes} = this.props;
        const {avatar, userType} = this.props.user;

        if(avatar) {
            const path = userType === 'employee' ? '/employee' : '/employer';
            return <Redirect to={'/login'}/>
        }

        return (
            <div>

                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.headerBar}>
                            Employer Info
                        </Typography>
                    </Toolbar>
                </AppBar>
                <AvatarSelector setAvatar={this.setAvatar}/>
                <Card>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem alignItems="flex-start">
                            <TextField
                                id="recruitment"
                                label="Recruitment:"
                                variant="outlined"
                                fullWidth
                                value={this.state.recruitment}
                                onChange={this.handleChange('recruitment')}
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">
                            <TextField
                                placeholder="Please enter your organization name"
                                id="organization"
                                label="Organization:"
                                variant="outlined"
                                fullWidth
                                value={this.state.organization}
                                onChange={this.handleChange('organization')}
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">
                            <TextField
                                id="salary"
                                label="Salary:"
                                variant="outlined"
                                fullWidth
                                value={this.state.salary}
                                onChange={this.handleChange('salary')}
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">
                            <TextField
                                multiline
                                rowsMax={4}
                                id="Requirement"
                                label="Requirement:"
                                variant="outlined"
                                fullWidth
                                value={this.state.info}
                                onChange={this.handleChange('info')}
                            />
                        </ListItem>
                    </List>
                </Card>

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.submitButton}
                    onClick={this.handleOpen}
                >
                    Submit
                </Button>

								<Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Registration Successful. Please Login"}</DialogTitle>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            No
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary" autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    };
}

export default connect(
    state => ({user: state.user}),
    {updateUser},
)(withStyles(styles)(Employer_Profile));
