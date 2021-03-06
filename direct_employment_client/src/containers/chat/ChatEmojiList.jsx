import React, {Component, Fragment} from 'react';
import {
    Paper,
    Grid,
} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            margin: '0 auto',
        },
        [theme.breakpoints.between('sm', 'lg')]: {
            width: '378px',
            margin: '0 auto',
        },
        position: 'fixed',
        bottom: '45px',
        variant: "outlined",
    },
    emojis: {
        height: '200px',
        overflow: 'auto',
    },
    emojiPaper: {
        display: "flex",
        justifyContent: "center",
    },
});

class ChatEmojiList extends Component {

    state = {
        bottom: false,
    };

    componentDidMount() {
        this.emojis = [
            '๐',
            '๐',
            '๐',
            '๐',
            '๐',
            '๐',
            '๐',
            '๐',
            '๐',
            '๐',
            '๐',
            '๐',
            '๐',
            '๐',
            'โบ',
            '๐',
            '๐',
            '๐',
            '๐',
            '๐',
            '๐ค',
            '๐คญ',
            '๐คซ',
            '๐ค',
            '๐ค',
            '๐คจ',
            '๐',
            '๐',
            '๐ถ',
            '๐',
            '๐',
            '๐',
            '๐ฌ',
            '๐คฅ',
            '๐',
            '๐',
            '๐ช',
            '๐คค',
            '๐ด',
            '๐ท',
            '๐ค',
            '๐คฎ',
            '๐คง',
            '๐ฅต',
            '๐ฅถ',
            '๐ฅด',
            '๐ต',
            '๐คฏ',
            '๐ค ',
            '๐ฅณ',
            '๐',
            '๐ง',
            '๐',
            '๐',
            'โน',
            '๐ฎ',
            '๐ฏ',
            '๐ฒ',
            '๐ณ',
            '๐ฅบ',
            '๐ฆ',
            '๐ง',
            '๐จ',
            '๐ฐ',
            '๐ฅ',
            '๐ข',
            '๐ญ',
            '๐ฑ',
            '๐',
            '๐ฃ',
            '๐',
            '๐',
            '๐ฉ',
            '๐ซ',
        ];
    }

    handleEmojiClick = (emoji) => (event) => {
        this.props.onEmojiClick(emoji);
    };

    render() {
        const {classes, isShow} = this.props;
        const {emojis} = this;
        /* const list = (anchor) => (
             <div
                 className={clsx(classes.list, {
                     [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                 })}
                 role="presentation"
                 onClick={this.toggleDrawer(anchor, false)}
                 onKeyDown={this.toggleDrawer(anchor, false)}
             >
                     <Grid
                         container
                         spacing={1}
                         className={classes.emojis}
                     >
                         {
                             emojis.map((emoji, index) => (
                                 <Grid
                                     key={index}
                                     item
                                     xs={2}
                                 >
                                     <Paper className={classes.paper}>{emoji}</Paper>
                                 </Grid>
                             ))
                         }
                     </Grid>
             </div>
         );*/

        return (
            <Fragment>
                {
                    isShow
                        ?
                        <Paper
                            variant="outlined"
                            className={classes.root}
                        >
                            <Grid
                                container
                                className={classes.emojis}
                            >
                                {
                                    emojis.map((emoji, index) => (
                                        <Grid
                                            key={index}
                                            item
                                            xs={2}
                                            onClick={this.handleEmojiClick(emoji)}
                                        >
                                            <Paper className={classes.emojiPaper}>{emoji}</Paper>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Paper>
                        :
                        null
                }
            </Fragment>

        );
    }
}

export default withStyles(styles)(ChatEmojiList);
