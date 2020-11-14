import { gql } from "@apollo/client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Link from "next/link";
import { FC } from "react";
import { PostOnCardFragment } from "../lib/types";
import AuthorAvatar, { AUTHOR_AVATAR_FRAGMENT } from "./AuthorAvatar";

export const POST_ON_CARD_FRAGMENT = gql`
  fragment PostOnCard on Post {
    id
    title
    text
    createdAt
    rating
    author {
      ...AuthorAvatar
    }
  }
  ${AUTHOR_AVATAR_FRAGMENT}
`;

const useStyles = makeStyles<Theme, PostOnCardFragment>({
  card: {
    width: "100%",
  },
  rating: ({ rating }) => ({
    marginLeft: "auto",
    color: rating > 0 ? "green" : "red",
  }),
});

interface PostCardProps {
  post: PostOnCardFragment;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const classes = useStyles(post);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<AuthorAvatar author={post.author} />}
        title={post.title}
        subheader={new Intl.DateTimeFormat("ru-RU", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(post.createdAt))}
        action={
          <Link href="/[id]" as={`/${post.id}`} passHref>
            <Button>Подробнее</Button>
          </Link>
        }
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <ArrowUpwardIcon />
        </IconButton>
        <IconButton>
          <ArrowDownwardIcon />
        </IconButton>
        <IconButton className={classes.rating}>{post.rating}</IconButton>
      </CardActions>
    </Card>
  );
};

export default PostCard;
