import { FC, useState, useCallback, ChangeEvent, FormEvent } from "react";
import { TextField, Button } from "@material-ui/core";
import { gql } from "@apollo/client";
import { POST_ON_CARD_FRAGMENT } from "./PostCard";
import { useCreatePostMutation } from "../lib/types";

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

  const [createPost, { loading }] = useCreatePostMutation();

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
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Создать
      </Button>
    </form>
  );
};

export default PostCreateForm;
