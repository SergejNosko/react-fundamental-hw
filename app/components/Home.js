import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getWeatherOneDay, getWeatherFiveDays} from '../utils/api';
import Header from './Header';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            city: ''
        };

        this.handleChange = this.handleChange.bind(this);
        //this.getWeather = this.getWeather.bind(this);
    }

    handleChange(e){
        let value = e.target.value;

        this.setState(() => {
            return {
                city: value
            }
        })
    }

    render(){
        let match = this.props.match;

        return(
            <div className="home">
                <Header city={this.state.city}/>
                <div className="home-content">
                    <h1>Enter a City and State</h1>
                    <input
                        type="text"
                        placeholder="St. George, Utah"
                        onChange={this.handleChange}
                    />
                    <Link
                        className="button"
                        to={{
                            pathname: '/forecast',
                            search: `?city=${this.state.city}`
                        }}
                    >
                        Get Weather
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home;