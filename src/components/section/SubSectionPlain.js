import React, { Component } from 'react';
import Card from '../card/Card'

class SubSectionPlain extends Component {
    render() {
        return (            
            <React.Fragment>
                <Card></Card>  
                <Card></Card>                  
            </React.Fragment>  
        );
    }
}

export default SubSectionPlain;