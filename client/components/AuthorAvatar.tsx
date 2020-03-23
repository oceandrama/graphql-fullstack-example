import { Avatar, makeStyles } from "@material-ui/core";
import { FC } from "react";
import { deepOrange } from "@material-ui/core/colors";

interface AuthorAvatarProps {
  author: Record<string, any>;
}

const useStyles = makeStyles(theme => ({
  avatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500]
  }
}));

const AuthorAvatar: FC<AuthorAvatarProps> = ({ author }) => {
  const classes = useStyles();
  return <Avatar className={classes.avatar}>{author.name[0]}</Avatar>;
};

export default AuthorAvatar;
