import React, { Component } from 'react';
import DisplayMovies from "./DisplayMovies";
import './App.css';

class App extends Component {
    render(){
        var Netflix =
            [
                {movieName:300, yearReleased:2005, genre:"Action"},
                {movieName:"The Avengers", yearReleased:2013, genre:"Action"},
                {movieName:"Justice League", yearReleased:2016, genre:"Action"}
            ];
        return (
            <div className="Netflix">
                <App/>
                <h1>Netflix Movies</h1>
                <DisplayMovies displayArray =
                    );
    }
}





export default Netflix;