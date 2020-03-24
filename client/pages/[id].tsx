import { gql, useQuery } from "@apollo/client";
import {
  CircularProgress,
  Divider,
  List,
  ListItem,
  makeStyles
} from "@material-ui/core";
import { NextPage } from "next";
import CommentCard from "../components/CommentCard";
import PostCard from "../components/PostCard";

const GET_POST_QUERY = gql`
  query GetPost($id: Int!) {
    post(where: { id: $id }) {
      id
      title
      text
      createdAt
      author {
        id
        name
      }
      comments {
        id
        text
        author {
          id
          name
        }
      }
    }
  }
`;

const useStyles = makeStyles(theme => ({
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    '& [role="separator"]:last-child': {
      display: "none"
    }
  }
}));

interface PostDetailProps {
  id: number;
}

const PostDetail: NextPage<PostDetailProps> = ({ id }) => {
  const classes = useStyles();

  const { loading, data } = useQuery(GET_POST_QUERY, {
    variables: {
      id
    }
  });

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <List>
      <ListItem>
        <PostCard post={data.post} />
      </ListItem>
      <ListItem>
        <List className={classes.list}>
          {data.post.comments.map(comment => (
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

PostDetail.getInitialProps = ({ query }) => ({ id: Number(query.id) });

export default PostDetail;
