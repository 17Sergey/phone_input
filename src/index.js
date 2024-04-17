import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let state = {
    "flags": [
        {
            countryName: "Belarus",
            flag: "url('http://www.flags.net/images/smallflags/BLRU0001.GIF')",
            mask: "+375 (XX) XXX-XX-XX",
        },
        {
            countryName: "Russia",
            flag: "url('http://www.flags.net/images/smallflags/RUSS0001.GIF')",
            mask: "+7 (XXX) XXX-XX-XX",
        },
        {
            countryName: "Ukraine",
            flag: "url('http://www.flags.net/images/smallflags/UKRN0001.GIF')",
            mask: "+380 (XX) XXX-XX-XX",
        },
        {
            countryName: "Poland",
            flag: "url('http://www.flags.net/images/smallflags/POLA0001.GIF')",
            mask: "+48 XXX-XXX-XXX",
        },
        {
            countryName: "Latvia",
            flag: "url('http://www.flags.net/images/smallflags/LATV0001.GIF')",
            mask: "+371 XXXX-XXXX",
        },
        {
            countryName: "USA",
            flag: "url('http://www.flags.net/images/smallflags/UNST0001.GIF')",
            mask: "+1 (XXX) XXX-XX-XX",
        },
    ],
    "products": [
        {
            id: 1,
            name: "Fancy French Cheese",
            price: 0.9,
            inStock: 99,
        },
        {
            id: 2,
            name: "Cheese",
            price: 4.9,
            inStock: 3,
        },
        {
            id: 3,
            name: "Butter",
            price: 99,
            inStock: 2,
        },
        {
            id: 4,
            name: "Heavy Cream",
            price: 3.9,
            inStock: 0,
        },
        {
            id: 5,
            name: "Sour Cream",
            price: 1.9,
            inStock: 32,
        },
        {
            id: 6,
            name: "Milk",
            price: 2.9,
            inStock: 86,
        },
        {
            id: 7,
            name: "Youghurt",
            price: 2.4,
            inStock: 1,
        },
    ],
    "headings": [
        "№",
        "Name",
        "Price",
        "InStock",
    ],
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App flags={state.flags} products={state.products} headings={state.headings} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
