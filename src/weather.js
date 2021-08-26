import { Component } from "react";
import { Card } from "react-bootstrap";

export default class WeatherReport extends Component {

    render() {
        console.log(this.props.weatherReport);
        return (
            <div>
                {this.props.weatherReport.map((day, idx) => {
                    return (
                        <Card key={idx} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{day.date}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
                                <Card.Text>
                                High of {day.maxtemp} degrees, Low of {day.mintemp} degrees with {day.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )    
                })}
            </div>
        )
    }
}