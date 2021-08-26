import { Component } from "react";
import { Card } from "react-bootstrap";

export default class Movies extends Component {
    render() {
        return(
            <div>
                {this.props.movieList.map((movie, idx) => {
                    return (
                        <Card key={idx} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Img variant="top" src={movie.image} />
                                <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
                                <Card.Text>
                                {movie.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )    
                })}
            </div>
        )
    }
}