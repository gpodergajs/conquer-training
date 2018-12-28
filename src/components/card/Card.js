import React, { Component } from 'react';
import CardImage from '../../assets/images/bg-2.jpg';

class Card extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-4 card">
                <img className="card-img-top" src={CardImage} alt="Card image" style={{objectFit:'cover', width: '100%'}}/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default Card;