import { useEffect, useState } from "react";
import HeroSwiper from "../components/heroSwiper";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import MediaCard from "../components/mediaCard";
import HorizontalSwiper from "../components/horizontalSwiper";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "",
      },
    };

    axios
      .request(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <HeroSwiper />
      <section className="movies">
        <div className="header">
          <div className="line"></div>
          <h2>Top Rated Movies</h2>
          <div className="line"></div>
        </div>
        <div className="content">
          {loading ? (
            <CircularProgress />
          ) : (
            <HorizontalSwiper medias={movies} />
          )}
        </div>
      </section>
    </>
  );
}
