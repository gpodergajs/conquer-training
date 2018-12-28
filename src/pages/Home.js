import React, { Component } from 'react';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import Body from '../components/home/Body';

class Home extends Component {
    render() {
        return (
            <div className="container-responsive">
               <Body/>
            </div>
        );
    }
}

export default Home;