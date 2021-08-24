import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      citySearch: '',
      city: {},
    }
  }

  handleChange = e => {
    this.setState({
      citySearch: e.target.value,
    })
  }

  getLocation = async () => {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.citySearch}&format=json`
    const response = await axios.get(API);
    console.log(response.data[0]);
    this.setState({ city: response.data[0] });
    console.log(this.state);
  } 

  render() {
    return(
      <div>
        <Form>
          <Form.Label>Enter a City</Form.Label>
          <Form.Control onChange={this.handleChange} value={this.state.citySearch} placeholder="Moscow" style={{width: '25%'}}/>
          <Button variant="primary" onClick={this.getLocation} onSubmit={this.getLocation}>
            Explore!
          </Button>
        </Form>
        {this.state.city.place_id &&
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.state.city.display_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
          <Card.Text>
          Latitude: {this.state.city.lat}       
          </Card.Text>
          <Card.Text>
          Longitude: {this.state.city.lon}
          </Card.Text>
        </Card.Body>
      </Card>
        // <p>{this.state.city.display_name} is located at: {this.state.city.lat} Latitude and {this.state.city.lon} Longitude </p>
        }
      </div>
    );
  }
}