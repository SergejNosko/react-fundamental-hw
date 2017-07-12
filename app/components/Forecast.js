import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import queryString from 'query-string';
import Loading from './Loading';
import {Link} from 'react-router-dom';
import {getWeatherOneDay, getWeatherFiveDays} from '../utils/api';

function WeatherGrid(props){
    let day = new Date(),
        options = {
            month: 'short',
            day: 'numeric',
            weekday: 'long',
        },
        city = props.city;
    day.setDate(day.getDate() - 1);
    return(
        <ul className="weather">
            {props.list.map((item) => {
                day.setDate(day.getDate() + 1);
                let dayString = day.toLocaleString("en-US", options);
                return(
                <Link to={{
                    pathname: '/detail/' + city,
                    state: {info: item}
                }}>
                    <li className="day">
                        <img src={'app/images/weather-icons/' + item.weather[0].icon + '.svg'} alt="Weather icon"/>
                        <p>{dayString}</p>
                    </li>
                </Link>
                )
            })}
        </ul>
    )
}
WeatherGrid.propTypes = {
    list: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired
};

class Forecast extends React.Component{
    constructor(){
        super();

        this.state = {
            city: null,
            weather: null,
            error: null,
            loading: true
        }
    }

    componentDidMount(){
        let city = queryString.parse(this.props.location.search);
        console.log(city);

        getWeatherFiveDays(city.city)
            .then((info) => {
                if(info === null){
                    return this.setState(() => {
                        return{
                            error: 'Looks like you wrote a wrong city.',
                            loading: false
                        }
                    });
                }
                console.log(info);
                return this.setState(() => {
                    return {
                        city: info.city.name,
                        weather: info.list
                    }
                })
            });
    }

    render(){
        let city = this.state.city,
            weather = this.state.weather;
        return(
            <section>
                <Header/>
                <article  className="weather-article">
                    <h2>{this.state.city}</h2>
                    {city === null && weather === null
                    ?<Loading />
                        :<WeatherGrid list={this.state.weather} city={city} />}
                </article>
            </section>
        )
    }
}

export default Forecast;