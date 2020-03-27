import { FC, useState, useCallback, ChangeEvent, FormEvent } from "react";
import { TextField, Button, Snackbar } from "@material-ui/core";
import { gql } from "@apollo/client";
import { POST_ON_CARD_FRAGMENT } from "./PostCard";
import {
  useCreatePostMutation,
  GetPostsQuery,
  GetPostsDocument
} from "../lib/types";
import Alert from "@material-ui/lab/Alert";

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($data: PostCreateInput!) {
    createOnePost(data: $data) {
      ...PostOnCard
    }
  }
  ${POST_ON_CARD_FRAGMENT}
`;

const PostCreateForm: FC = () => {
  const [values, setValues] = useState({
    text: "",
    title: ""
  });
  const [open, setOpen] = useState(false);

  const [createPost, { loading, error }] = useCreatePostMutation({
    update: (store, { data }) => {
      const cache = store.readQuery<GetPostsQuery>({
        query: GetPostsDocument
      });

      if (!cache || !data) return;

      store.writeQuery<GetPostsQuery>({
        query: GetPostsDocument,
        data: {
          ...cache,
          posts: [data.createOnePost, ...cache.posts]
        }
      });
    },
    onCompleted: () => setValues({ title: "", text: "" }),
    onError: () => setOpen(true)
  });

  const handleChange = useCallback(
    (field: keyof typeof values) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [field]: event.target.value });
    },
    [values]
  );

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      createPost({
        variables: {
          data: values
        }
      });
    },
    [values]
  );

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        label="Название"
        value={values.title}
        onChange={handleChange("title")}
        required
        fullWidth
      />
      <TextField
        variant="outlined"
        margin="normal"
        label="Текст"
        value={values.text}
        onChange={handleChange("text")}
        multiline
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        fullWidth
      >
        Создать
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="error" variant="filled" elevation={6}>
          {error?.graphQLErrors[0].message}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default PostCreateForm;
