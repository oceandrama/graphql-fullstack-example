import { FC } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import AuthorAvatar from "./AuthorAvatar";

interface CommentCardProps {
  comment: any;
}

const CommentCard: FC<CommentCardProps> = ({ comment }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <AuthorAvatar author={comment.author} />
      </ListItemAvatar>
      <ListItemText primary={comment.author.name} secondary={comment.text} />
    </ListItem>
  );
};

export default CommentCard;
