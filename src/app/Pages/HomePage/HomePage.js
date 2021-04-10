import Header from "../../Containers/Header/Header";
import Footer from "../../Containers/Footer/Footer";
import Body from "../../Containers/Body/Body";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  searchMovies,
  fetchMovies
} from "../../../features/movies/moviesSlice";

export default () => {
  let dispatch = useDispatch();
  let { keyword } = useParams();

  if (!!keyword) {
    dispatch(searchMovies(keyword));
    dispatch(fetchMovies());
  }

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
