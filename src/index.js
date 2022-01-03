import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader.js';
import Error from './Error.js';

class App extends React.Component{
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (error) => this.setState({ errorMessage: error.message })
        );
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <Error message={ this.state.errorMessage } /> 
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat }/>
        }

        return <Loader message='Please, accept the location request'/>
    }

    render(){
       return (
           <div className="border red">
               {this.renderContent()};
           </div>
       )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
