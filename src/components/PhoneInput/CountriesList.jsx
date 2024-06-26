import React from 'react';

class CountriesList extends React.Component {
    constructor(props) {
        super(props);
        this.createOptions = this.createOptions.bind(this);
        this.chooseCountry = this.chooseCountry.bind(this);
    }

    createOptions() {
        let options = [];
        this.props.flags.forEach((country, index) => {
            if (index === 0) options.push(<option>{country.countryName}</option>);
        })
        return options;
    }

    chooseCountry(countryName) {
        let currentCountry;
        for (let country of this.props.flags) {
            if (countryName === country.countryName) currentCountry = country;
        }
        this.props.onCountryChange(currentCountry);
    }

    render() {
        return (
            <select
                id="countriesList"
                className="select_countries"
                onChange={(e) => this.chooseCountry(e.target.value)}
                style={{ backgroundImage: `url(${this.props.currentFlag}`, }}
            >
                {this.createOptions()}
            </select>
        );
    }
}

export default CountriesList;