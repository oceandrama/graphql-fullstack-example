import { gql } from "@apollo/client";
import { ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { FC } from "react";
import { CommentOnCardFragment } from "../lib/types";
import AuthorAvatar, { AUTHOR_AVATAR_FRAGMENT } from "./AuthorAvatar";

export const COMMENT_ON_CARD_FRAGMENT = gql`
  fragment CommentOnCard on Comment {
    id
    text
    author {
      id
      name
      ...AuthorAvatar
    }
  }
  ${AUTHOR_AVATAR_FRAGMENT}
`;

interface CommentCardProps {
  comment: CommentOnCardFragment;
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
