import React from 'react';


class Weather extends React.Component{

    render(){

        return ( <div>
                {this.props.city && this.props.country && <p> Location: {this.props.city}, {this.props.country} </p>}

            </div>
        );
    }
}

export default Weather;