import { List, ListItem, CircularProgress } from "@material-ui/core";
import { NextPage } from "next";
import PostCard from "../components/PostCard";
import { gql, useQuery } from "@apollo/client";

const GET_POSTS_QUERY = gql`
  query GetPosts {
    posts {
      id
      title
      text
      createdAt
      author {
        id
        name
      }
    }
  }
`;

const Home: NextPage = () => {
  const { loading, data } = useQuery(GET_POSTS_QUERY);

  if (loading && !data) {
    return <CircularProgress />;
  }

  return (
    <List>
      {data.posts.map(post => (
        <ListItem key={post.id}>
          <PostCard post={post} />
        </ListItem>
      ))}
    </List>
  );
};

export default Home;
