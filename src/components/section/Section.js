import React, { Component } from 'react';

import HeaderImage from '../../assets/images/4-5.jpg'

import SubSectionCards from './SubSectionCards';
import SubSectionPlain from './SubSectionPlain';
import SubSectionHeader from './SubSectionHeader';

class Section extends Component {

    constructor(props){
        super(props); // pass from upper layer the image file
    }

    render() {
        return (
                <React.Fragment>
                    <SubSectionHeader Image={this.props.Image}/>
                    <SubSectionCards/>
                    <SubSectionPlain/>         
                </React.Fragment>
        );
    }
}

export default Section;