import { useState, useEffect } from "react";
const key = "18a6035d";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setErr("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("wrong url request");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found !!");

          setMovies(data.Search);
          setIsLoading(false);
          setErr("");
        } catch (err) {
          if (err.name !== "AbortError") setErr(err.message);
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setErr("");
        setMovies([]);
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, err };
}
