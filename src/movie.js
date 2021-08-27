import { Component } from "react"
import { Card } from "react-bootstrap"


export default class Movie extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.movieList.title}</Card.Title>
                    <Card.Img variant="top" src={this.props.movieList.image} />
                    <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
                    <Card.Text>
                        {this.props.movieList.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}