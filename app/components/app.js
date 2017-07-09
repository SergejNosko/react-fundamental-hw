import React from 'react';
import ReactRouter, {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Forecast from './Forecast';

class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/forecast' component={Forecast} />
                    <Route render={function () {
                        return <p>Not Found!</p>
                    }}/>
                </Switch>
            </Router>
        )
    }
}

export default App;