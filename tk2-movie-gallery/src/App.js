 import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "lity/dist/lity.css";
import "jquery/dist/jquery.js";
import "lity/dist/lity.js";
import CardMovie from './component/CardMovie';
import { useEffect, useState } from "react";
import { getMovieList, getGenreMovies , searchMovie, searchMovieText} from './api';
import { format } from 'date-fns';

const App = () => {

    
  const REAC_APP_IMG_BASEURL = process.env.REACT_APP_IMG_BASEURL
  const [popularMovies, setPopularMovies] = useState([])
  const [genreMovies, setgenreMovies] = useState([])
  const [selectedGenre, setSelectedGenre] = useState();
  const [selectedSorting, setSelectedSorting] = useState();
  const [getText, setText] = useState();
  const [header, setHeader] = useState("Popular");

  useEffect(() => {
    getMovieList().then((result) => {
       setPopularMovies(result) })

    getGenreMovies().then((result) => {
      setgenreMovies(result) })
    
  },[])

  const PopularMovieList = () => {
    return popularMovies.map((movie,i) => {
      return (
          <CardMovie title={movie.original_title} vote={movie.vote_average} img={`${REAC_APP_IMG_BASEURL}${movie.poster_path}`} year={movie.release_date} overview={movie.overview} id={movie.id} id_hit={`#${movie.id}`}  />
      )
    })
  }

  const GenreMovieList = () => {
    return genreMovies.map((genres,i) => {
      return (
          <option value={genres.id}>{genres.name}</option>
      )
    })
  }

  const onChangeGenre = (value) => {
    if (value != "All")
    {
      setSelectedGenre(value)
      console.log(selectedGenre)
      console.log(selectedSorting)
      searchMovie(value, selectedSorting).then((result) => {setPopularMovies(result) })

    } else
    {
      console.log(value)
      getMovieList().then((result) => {
        setPopularMovies(result) })
    }
  }

  const onChangeSort = (value) => {
    
    setSelectedSorting(value)
    console.log(selectedGenre)
    console.log(selectedSorting)
    searchMovie(selectedGenre,value).then((result) => {setPopularMovies(result) })
  }

  const searchText = (value) => {
    console.log(value)
    if (value != "")
    {
      searchMovieText(value).then((result) => {setPopularMovies(result) })
    }
    // console.log(result)
  }

  return (
    <div className="bg-dark pt-5">
      <div className="container">
        <div className="row justify-content-end mb-0">
          <div className="col-6">
            <h1 className="title">{header} Movies</h1>
          </div>
          <div className="col-6 movie-page-meta">
          <form action="#" className="movie-filter-form">
            <input type="text" placeholder="Find Favorite Movie" onChange={(val) => searchText(val.target.value)}/>
            {/* <button> <i class="fas fa-search"></i></button> */}
            </form>
          <form className="movie-filter-form">
            <select className="custom-select" onChange={(val) => onChangeGenre(val.target.value)} value={selectedGenre} > 
            <option value="All">All</option>
            <GenreMovieList/> 
            </select>
          </form>
          <form className="movie-filter-form">
          <select className="custom-select" onChange={(val) => onChangeSort(val.target.value)} value={selectedSorting} >
            <option value="original_title.asc">A-Z</option>
            <option value="original_title.desc">Z-A</option>
          </select>
          </form>
          </div>
        </div>
        <div className="row mt-0 pt-0">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <PopularMovieList/>
          </div>
        </div>
        <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="popup-video btn">Watch Now</a>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/I9B6rwW35GQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      </div>
    </div>
    
  );
}

export default App;
