import { gql } from "@apollo/client";
import { Avatar, makeStyles } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import { FC } from "react";
import { AuthorAvatarFragment } from "../lib/types";

export const AUTHOR_AVATAR_FRAGMENT = gql`
  fragment AuthorAvatar on User {
    id
    name
  }
`;

interface AuthorAvatarProps {
  author: AuthorAvatarFragment;
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const AuthorAvatar: FC<AuthorAvatarProps> = ({ author }) => {
  const classes = useStyles();
  return <Avatar className={classes.avatar}>{author.name[0]}</Avatar>;
};

export default AuthorAvatar;
