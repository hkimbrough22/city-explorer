import { Component } from "react";
import { CardGroup } from "react-bootstrap";
import Movie from "./movie";

export default class Movies extends Component {
    render() {
        return(
            <CardGroup id="movieList">
                <h2>Top 20 Movies About {this.props.cityName}</h2>
                {this.props.movieList.map((movie, idx) => <Movie key={idx} movieList={movie} />)}
            </CardGroup>
        )
    }
}