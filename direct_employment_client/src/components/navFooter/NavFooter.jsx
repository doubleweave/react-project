import React, {Component, Fragment} from 'react'

import {
    BottomNavigation,
    BottomNavigationAction,
    Badge,
} from '@material-ui/core';

import {withStyles} from '@material-ui/core/styles';

import FaceIcon from '@material-ui/icons/Face';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import {withRouter} from 'react-router-dom';

import PropTypes from 'prop-types';


const styles = {
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
    bottomBadge: {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
};


class Nav_Footer extends Component {
    static propTypes = {
        navList: PropTypes.array.isRequired,
        unReadCount: PropTypes.number.isRequired,
    };

    state = {
        value: '',
				unReadCount: -1,
    };

    componentDidMount() {
        const value = this.props.location.pathname;
        this.setState({value});
        console.log('value in NavFooter, CDM', value);
    }

    handleChange = (event, value) => {
        this.setState({value});
        this.props.history.replace(value);
    };

    renderSwitch = (param) => {
        switch (param) {
            case 'FaceIcon':
                return <FaceIcon/>;
            case 'AccountBalanceIcon':
                return <AccountBalanceIcon/>;
            case 'SmsOutlinedIcon':
                return <SmsOutlinedIcon/>;
            case 'PermIdentityIcon':
                return <PermIdentityIcon/>;
            default:
                return null;
        }
    };


    render() {
        const {value} = this.state;
        const {classes, unReadCount} = this.props;
        let {navList} = this.props;

				console.log('unReadCount number in NavFoot:', unReadCount);

        /*        // Check path to show the right main page
                const path = this.props.location.pathname;
                const hidePage = path === '/employer' ? '/employee' : '/employer';
                const newNavList = navList.filter(nav => hidePage !== nav.path);*/

        // Check hide props to hide page
        navList = navList.filter(nav => !nav.hide);

        console.log('newNavList', navList);

        return (
            <Fragment>
                <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                    className={classes.stickToBottom}
                >
                    {
                        navList.map((nav) => {
                            return (

                                <BottomNavigationAction
                                    key={nav.text}
                                    // label={nav.text}
                                    value={nav.path}
                                    // icon={this.renderSwitch(nav.icon)}
                                    label={
                                        <Badge
                                            badgeContent={nav.path === '/message' ? unReadCount : 0}
                                            color="secondary"
                                            className={classes.bottomBadge}
                                        >
                                            {this.renderSwitch(nav.icon)}
                                            {nav.text}
                                        </Badge>}
                                />
                            )
                        })
                    }

                </BottomNavigation>
            </Fragment>
        );
    };
}


export default withRouter(withStyles(styles)(Nav_Footer));
