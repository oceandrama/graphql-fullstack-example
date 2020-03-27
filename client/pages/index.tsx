import { gql, useQuery } from "@apollo/client";
import { CircularProgress, List, ListItem } from "@material-ui/core";
import { NextPage } from "next";
import PostCard, { POST_ON_CARD_FRAGMENT } from "../components/PostCard";
import PostCreateForm from "../components/PostCreateForm";

const GET_POSTS_QUERY = gql`
  query GetPosts {
    posts {
      ...PostOnCard
    }
  }
  ${POST_ON_CARD_FRAGMENT}
`;

const Home: NextPage = () => {
  const { loading, data } = useQuery(GET_POSTS_QUERY);

  if (loading && !data) {
    return <CircularProgress />;
  }

  return (
    <List>
      <ListItem>
        <PostCreateForm />
      </ListItem>
      {data.posts.map(post => (
        <ListItem key={post.id}>
          <PostCard post={post} />
        </ListItem>
      ))}
    </List>
  );
};

export default Home;
