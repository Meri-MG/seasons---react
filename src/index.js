import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props) {
        super(props);

        //We initialize state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // we use setState to update state
                this.setState({ lat: position.coords.latitude })
            },
            (error) => {
                this.setState({ errorMessage: error.message });
            }
        );
    }
    render(){
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: { this.state.lat }</div>
        }

        return <div>loading...</div>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
