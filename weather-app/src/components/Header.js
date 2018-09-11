import React from 'react';


class Header extends React.Component{

    render(){

        return ( <div>
                <h1>Weather Forecast</h1>
                <span>Check what the weather is like in a selected corner of the world!</span>
            </div>
        );
    }
}

export default Header;