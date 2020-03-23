import { List, ListItem, makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import PostCard from "../components/PostCard";

const posts = [
  {
    id: 1,
    title: "Что же там было?",
    text: "Всё утро пытаюсь вспомнить сон. Как будто там что-то важное",
    createdAt: "1869-03-01",
    rating: 10,
    author: {
      id: 1,
      name: "Дмитрий Менделеев"
    }
  },
  {
    id: 2,
    title: "Хочу Нобелевскую премию!",
    text: "Поигралась с реагентами, пока муж спит, люблю его",
    createdAt: "1902-09-12",
    rating: -1,
    author: {
      id: 2,
      name: "Мария Кюри"
    }
  }
];

const useStyles = makeStyles({
  list: {
    width: 500,
    margin: "0 auto"
  }
});

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {posts.map(post => (
        <ListItem key={post.id}>
          <PostCard post={post} />
        </ListItem>
      ))}
    </List>
  );
};

export default Home;
