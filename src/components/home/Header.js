import React, { Component } from 'react';
import img from '../../assets/images/bg-2.jpg'


class Header extends Component {
    render() {
        return (
            <div className="container-responsive">
                <div className="row">
                    <div className="col-xs-12">
                        <img style={{backgroundImage: `url(${img})`, width:'100%'}} src={img}>
                        </img>
                    </div>  
                </div>
            </div>
        );
    }
}

export default Header;