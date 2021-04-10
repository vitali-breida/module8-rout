import { TextField, Box, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  searchMovies,
  fetchMovies
} from "../../../features/movies/moviesSlice";

export default function Search() {
  const search = useSelector((state) => state.movies.search);
  const [text, setText] = useState(search);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchMovies(text));
    dispatch(fetchMovies());
  };
  return (
    <Box display="flex" justifyContent="flex-end">
      <Box flexGrow={1}>
        <TextField
          fullWidth
          placeholder="What do you want to watch?"
          defaultValue={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </Box>
      <Button color="secondary" variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
}
