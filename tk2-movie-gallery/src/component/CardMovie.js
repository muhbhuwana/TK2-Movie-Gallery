import './CardMovie.css';
import MovieDetail from './MovieDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";

import { getMovieVideos } from '../api';

const CardMovie = (props) => {
    const [selectedMovie, setselectedMovie] = useState();

    const onClick = (value) => {
        getMovieVideos(value).then((result) => {setselectedMovie("https://www.youtube.com/embed/" + result)})
      }
      
    console.log(props)
    return (
        <div>
            <div className="col bg-dark ">
                <div className="movie-item mb-4"><div className="movie-poster" data-projection-id="2">
                    <a className="btn" onClick={() => onClick(props.id)} href={selectedMovie} data-lity><img src={props.img} alt={props.title}/></a>
                </div>
                <div className="movie-content">
                    <div className="top">
                        <h5 className="title"> <a href="#">{props.title}</a> </h5>
                        <span className="date">{props.year.substring(0,4)}</span>
                    </div>
                            {/* <div className="bottom">
                                <ul>
                                    <li>
                                        <span className="duration"> <FontAwesomeIcon icon="clock"/> 128 min</span>
                                        <span className="rating"> <i className="fas fa-thumbs-up"></i> {props.vote}</span>
                                    </li>
                                </ul>
                            </div> */}
                    </div>
                </div>
            </div>
            <MovieDetail title={props.title} img={props.img} overview={props.overview} />
        </div>
    );
  }




export default CardMovie;