import React, {Component, Fragment} from 'react'
import {
	Paper, 
	TextField,
	IconButton, 
	Badge, 
	Button, 
} from "@material-ui/core";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {withStyles} from '@material-ui/core/styles';

const styles = (theme) => ({
    bottom_message: {
        display: 'flex',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        alignItems: 'center',
    },
    bottom_message_input: {
        flexGrow: 1,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    /*appBar: {
        top: 'auto',
        bottom: 0,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },*/
});

class ChatBottomInput extends Component {

    handleChange = name => event => {
        this.props.onChange(name, event.target.value);
    };

    handleSubmit = () => {
        this.props.onSubmit();
    };

    handleShowEmoji = () => {
        this.props.onShowEmoji();
    };

    handleClick = () => {
        this.props.onHideEmoji();
    };

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                {/*                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <TextField
                            size='small'
                            id="input-send-message"
                            label="TextField"
                            variant="outlined"
                            className={classes.bottom_message_input}
                            value={this.state.content}
                            onChange={this.handleChange('content')}
                        />
                        <IconButton
                            aria-label="show 4 new mails"
                            color="inherit"
                            onClick={this.handleShowEmoji}
                        >
                            <Badge
                                badgeContent={4}
                                color="secondary"

                            >
                                <InsertEmoticonIcon/>
                            </Badge>
                        </IconButton>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.bottom_message_button}
                            onClick={this.handleSubmit}
                        >
                            Send
                        </Button>
                    </Toolbar>
                </AppBar>*/}
                <Paper
                    elevation={0}
                    className={classes.bottom_message}
                >
                    <TextField
                        size='small'
                        id="input-send-message"
                        label="TextField"
                        variant="outlined"
                        className={classes.bottom_message_input}
                        value={this.props.content}
                        onChange={this.handleChange('content')}
                        onClick={this.handleClick}
                    />
                    <IconButton
                        aria-label="show 4 new mails"
                        color="inherit"
                        onClick={this.handleShowEmoji}
                    >
                        <Badge>
                            <InsertEmoticonIcon/>
                        </Badge>
                    </IconButton>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.bottom_message_button}
                        onClick={this.handleSubmit}
                    >
                        Send
                    </Button>
                </Paper>
            </Fragment>
        );
    };
}

export default  withStyles(styles)(ChatBottomInput);
