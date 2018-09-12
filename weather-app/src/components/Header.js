import React from 'react';


class Header extends React.Component{

    render(){

        return ( <div className='titles'>
                <h1 className='title-container__title'>Weather Forecast</h1>
                <span className='title-container__subtitle'>Check what the weather is like in a selected corner of the world!</span>
            </div>
        );
    }
}

export default Header;