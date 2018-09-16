import React from 'react';


class Weather extends React.Component{

    render(){

        return ( <div className='weather__info'>
                {
                    this.props.city && this.props.country
                    && <p className='weather__title'> Location: <span className='weather__value'>
                        {this.props.city}, {this.props.country}</span> </p>}

                {
                    this.props.temperature
                    && <p className='weather__title'> Temperature: <span className='weather__value'>{parseInt(this.props.temperature - 273.15)}&deg;C</span></p>}

                {
                    this.props.humidity
                    && <p className='weather__title'> Humidity: <span className='weather__value'>{this.props.humidity}</span></p>}

                {
                    this.props.description
                    && <p className='weather__title'> Conditions: <span className='weather__value'>{this.props.description}</span></p>}

                {
                    this.props.error
                    && <span className='error'>{this.props.error}</span>}
            </div>
        );
    }
}

export default Weather;