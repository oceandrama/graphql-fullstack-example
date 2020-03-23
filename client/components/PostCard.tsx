import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography
} from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import { Theme, makeStyles } from "@material-ui/core/styles";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Link from "next/link";
import { FC } from "react";

type Post = Record<string, any>;

const useStyles = makeStyles<Theme, Post>(theme => ({
  card: {
    width: "100%"
  },
  avatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500]
  },
  rating: ({ rating }) => ({
    marginLeft: "auto",
    color: rating > 0 ? "green" : "red"
  })
}));

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const classes = useStyles(post);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>{post.author.name[0]}</Avatar>
        }
        title={post.title}
        subheader={new Intl.DateTimeFormat("ru-RU", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        }).format(new Date(post.createdAt))}
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
