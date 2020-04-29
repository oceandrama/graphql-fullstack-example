import { gql } from "@apollo/client";
import {
  CircularProgress,
  Divider,
  List,
  ListItem,
  makeStyles
} from "@material-ui/core";
import { NextPage } from "next";
import CommentCard, {
  COMMENT_ON_CARD_FRAGMENT
} from "../components/CommentCard";
import PostCard, { POST_ON_CARD_FRAGMENT } from "../components/PostCard";
import { useGetPostQuery } from "../lib/types";

const GET_POST_QUERY = gql`
  query GetPost($id: Int!) {
    post(where: { id: $id }) {
      ...PostOnCard
      comments {
        ...CommentOnCard
      }
    }
  }
  ${POST_ON_CARD_FRAGMENT}
  ${COMMENT_ON_CARD_FRAGMENT}
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

  const { loading, data } = useGetPostQuery({
    variables: {
      id
    }
  });

  if (loading && !data) {
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
