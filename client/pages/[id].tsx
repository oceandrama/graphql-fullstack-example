import { Divider, List, ListItem, makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import CommentCard from "../components/CommentCard";
import PostCard from "../components/PostCard";

const post = {
  id: 2,
  title: "Хочу Нобелевскую премию!",
  text: "Поигралась с реагентами, пока муж спит, люблю его",
  createdAt: "1902-09-12",
  rating: -1,
  author: {
    id: 2,
    name: "Мария Кюри"
  },
  comments: [
    {
      id: 1,
      text: "Мария, ты в курсе, что они радиоактивные?!",
      author: {
        id: 3,
        name: "Пьер Кюри"
      }
    },
    {
      id: 2,
      text: "Мама, когда я вырасту, я тоже буду ученым!",
      author: {
        id: 4,
        name: "Ирен Кюри"
      }
    }
  ]
};

const useStyles = makeStyles(theme => ({
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    '& [role="separator"]:last-child': {
      display: "none"
    }
  }
}));

const PostDetail: NextPage = () => {
  const classes = useStyles();

  return (
    <List>
      <ListItem>
        <PostCard post={post} />
      </ListItem>
      <ListItem>
        <List className={classes.list}>
          {post.comments.map(comment => (
            <>
              <CommentCard comment={comment} />
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </ListItem>
    </List>
  );
};

export default PostDetail;
