import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="header">
                <h1>Clever Title</h1>
                <div className="form-container">
                    <input type="text" placeholder="St. George, Utah"/>
                    <Link
                        className="button"
                        to={{
                            pathname: '/forecast',
                            search: `?city=${this.props.city}`
                        }}
                    >
                        Get Weather
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header;