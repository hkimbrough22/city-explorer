import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
      error: '',
    }
  }

  handleChange = e => {
    this.setState({
      citySearch: e.target.value,
    })
  }

  getLocationAndImage = async () => {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.citySearch}&format=json`
    try {
      const response = await axios.get(API);
      this.setState({
        city: response.data[0],
        error: '',
      });
    } catch (error) {
      console.log(error);
      this.setState({ 
        error: `${error}`,
        city: {},
     })
    }
  }

  render() {
    return (
      <div id="formDiv">
        <Form>
          <Form.Label>Enter a City</Form.Label>
          <Form.Control onChange={this.handleChange} value={this.state.citySearch} placeholder="Moscow" style={{ width: '50%' }} />
          <Button variant="primary" onClick={this.getLocationAndImage} onSubmit={this.getLocationAndImage}>
            Explore!
          </Button>
        </Form>
        {this.state.error ?
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{this.state.error}</Card.Title>
            </Card.Body>
          </Card>
          : ''}
        {this.state.city.display_name &&
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.city.lat},${this.state.city.lon}&zoom=12`} />
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
        }
      </div>
    );
  }
}