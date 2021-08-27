import { Component } from "react";
import { CardGroup } from "react-bootstrap";
import WeatherDay from "./weatherDay";

export default class WeatherReport extends Component {
    render() {
        return (
            <CardGroup id="weatherReport">
                <h2>Your Five Day Weather Report</h2>
                {this.props.weatherReport.map((day, idx) => <WeatherDay key={idx} weatherReport={day} />)}
            </CardGroup>
        )
    }

}