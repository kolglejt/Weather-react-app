import React from 'react';
import Header from './components/Header';
import Select from './components/Select';
import Weather from './components/Weather';
const API_key = '164f7e0927ab26322a04a869e9af2a91';

class App extends React.Component{
    constructor(){
        super();
        this.state = {

            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined
        }

    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch (`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}id=&appid=${API_key}`);
        const data = await api_call.json();

        if(city && country){

        {/*console.log(data);
        console.log(data.city.name);
        console.log(data.city.country);
        console.log(data.list[0].main.temp);
        console.log(data.list[0].main.humidity);
        console.log(data.list[0].weather[0].description);*/}

            this.setState({
                temperature: data.list[0].main.temp,
                city: data.city.name,
                country: data.city.country,
                humidity: data.list[0].main.humidity,
                description: data.list[0].weather[0].description,
                error: ''
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: 'Please enter the values'
            });
        }
    };
render(){

    return (
        <div>
            <Header/>
            <Select getWeather={this.getWeather}/> {/*we can now use this function in Select Component*/}
            <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
            />
        </div>
    )
}

}
export default App;