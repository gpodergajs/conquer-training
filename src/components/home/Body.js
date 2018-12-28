import React, { Component } from 'react';
import Section from '../section/Section';

import HeaderImage  from '../../assets/images/bg-2.jpg'
import SectionHeaderImage from '../../assets/images/4-5.jpg'

const sections = [
    {
        image: HeaderImage
    },
    {
        image: SectionHeaderImage
    }
]


class Body extends Component {

    renderSections = () => {
        return (
            sections.map(section => {
                return <Section Image={section.image} />    
           })
        ) 
    }


    render() {
       return(      
             this.renderSections()
       )
    }
}

export default Body;