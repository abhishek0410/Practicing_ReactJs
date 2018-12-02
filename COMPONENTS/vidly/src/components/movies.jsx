import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService" ;
import Like from "./common/like";

class Movies extends Component{
    
    state = {
        movies : getMovies(),
    };

    handledelete = (movie)=>{
        const movie_new = this.state.movies.filter(m=>m._id !==movie._id);
        this.setState(this.state.movies = movie_new);
    }
    render(){
        return(

            <table className = "table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                
                    {this.state.movies.map( movie =>{
                        return(<tr>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <button onClick={()=> {this.handledelete(movie)}} type="button" class="btn btn-danger">DELETE</button>
                        </td>
                        <td>
                            <Like ></Like>
                        </td>
                        </tr>);
                    })}   
            </tbody>
            </table>
        );
    }
}
export default Movies;