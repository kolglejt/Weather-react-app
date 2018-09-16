import React from 'react';


class Select extends React.Component{

    render(){

        return (
            <form onSubmit={this.props.getWeather}>

                <input type="text" name='city' placeholder='Type a city'/>
                <input type="text" name='country' placeholder='Type a country'/>
                <button>GET WEATHER</button>
            </form>
        );
    }
}

export default Select;