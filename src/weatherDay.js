import { Component } from "react"
import { Card } from "react-bootstrap";

export default class WeatherDay extends Component {

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body id={this.props.weatherReport.date}>
                    <Card.Title>{this.props.weatherReport.date}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
                    <Card.Text>
                        High of {this.props.weatherReport.maxtemp} degrees, Low of {this.props.weatherReport.mintemp} degrees with {this.props.weatherReport.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

};