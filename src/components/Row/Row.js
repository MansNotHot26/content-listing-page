import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import LazyLoad from "react-lazyload";
import "./Row.css";

function Row({ search }) {
  const movies = useSelector(
    (state) => state.page1.data1.page.content_items.content
  );
  const movies2 = useSelector(
    (state) => state.page2.data2.page.content_items.content
  );
  const movies3 = useSelector(
    (state) => state.page3.data3.page.content_items.content
  );

  const [pagemovies2, setMovies2] = useState([]);
  const [pagemovies3, setMovies3] = useState([]);

  useEffect(() => {
    const infiniteScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setMovies2(movies2);
      }
    };
    const debouncedScroll = debounce(infiniteScroll, 250);
    window.addEventListener("scroll", debouncedScroll);

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, []);

  useEffect(() => {
    const infiniteScroll2 = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        pagemovies2.length > 0
      ) {
        setMovies3(movies3);
      }
    };
    const debouncedScroll = debounce(infiniteScroll2, 250);

    window.addEventListener("scroll", debouncedScroll);

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [pagemovies2, movies3]);

  const searchFilter1 = movies
    .map((movie) => {
      if (movie.name.toUpperCase().includes(search.toUpperCase())) {
        return movie;
      }
      return undefined;
    })
    .filter((movie) => movie !== undefined);

  const searchFilter2 = movies2
    .map((movie) => {
      if (movie.name.toUpperCase().includes(search.toUpperCase())) {
        return movie;
      }
      return undefined;
    })
    .filter((movie) => movie !== undefined);

  const searchFilter3 = movies3
    .map((movie) => {
      if (movie.name.toUpperCase().includes(search.toUpperCase())) {
        return movie;
      }
      return undefined;
    })
    .filter((movie) => movie !== undefined);

  return search.length > 0 ? (
    searchFilter1.length > 0 ||
    searchFilter2.length > 0 ||
    searchFilter3.length > 0 ? (
      <>
        <div className="row">
          {searchFilter1.length > 0 &&
            searchFilter1.map((movie) => (
              <div key={Math.random()} className="row-movie">
                <LazyLoad>
                  <img
                    className="movie-poster"
                    alt="movie-poster"
                    src={require(`../../images/${movie.poster_image}`)}
                  />
                </LazyLoad>

                <h2 className="movie-title">{movie.name}</h2>
              </div>
            ))}
        </div>
        <div className="row2">
          {searchFilter2.length > 0 &&
            searchFilter2.map((movie) => (
              <div key={Math.random()} className="row-movie">
                <LazyLoad>
                  <img
                    className="movie-poster"
                    alt="movie-poster"
                    src={require(`../../images/${movie.poster_image}`)}
                  />
                </LazyLoad>
                <h2 className="movie-title">{movie.name}</h2>
              </div>
            ))}
        </div>
        <div className="row3">
          {searchFilter3.length > 0 &&
            searchFilter3.map((movie) => (
              <div key={Math.random()} className="row-movie">
                <LazyLoad>
                  <img
                    className="movie-poster"
                    alt="movie-poster"
                    src={require(`../../images/${movie.poster_image}`)}
                  />
                </LazyLoad>
                <h2 className="movie-title">{movie.name}</h2>
              </div>
            ))}
        </div>
      </>
    ) : (
      <div className="no-result">OOPS! No Results Found.</div>
    )
  ) : (
    <>
      <div className="row">
        {movies.map((movie) => (
          <div key={Math.random()} className="row-movie">
            <img
              className="movie-poster"
              alt="movie-poster"
              src={require(`../../images/${movie.poster_image}`)}
            />

            <h2 className="movie-title">{movie.name}</h2>
          </div>
        ))}
      </div>

      <div className="row2">
        {pagemovies2 &&
          pagemovies2.map((movie) => (
            <div key={Math.random()} className="row-movie">
              <LazyLoad>
                <img
                  className="movie-poster"
                  alt="movie-poster"
                  src={require(`../../images/${movie.poster_image}`)}
                />
              </LazyLoad>

              <h2 className="movie-title">{movie.name}</h2>
            </div>
          ))}
      </div>

      <div className="row3">
        {pagemovies3 &&
          pagemovies3.map((movie) => (
            <div key={Math.random()} className="row-movie">
              <LazyLoad>
                <img
                  className="movie-poster"
                  alt="movie-poster"
                  src={require(`../../images/${movie.poster_image}`)}
                />
              </LazyLoad>
              <h2 className="movie-title">{movie.name}</h2>
            </div>
          ))}
      </div>
    </>
  );
}

export default Row;
