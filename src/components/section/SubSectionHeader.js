import React from 'react';
import Image from '../image/Image'

const SubSectionHeader = (props) => {
    return (
        <React.Fragment>
            <Image Image={props.Image} />
        </React.Fragment>  
    );
};

export default SubSectionHeader;

