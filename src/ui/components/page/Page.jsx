import React from 'react';
import PropTypes from 'prop-types';
import './Page.css';

const Page = ({notTaskComponent, children}) => {

    return (
        <div className="page">
            <div className="innerPage">
                {children && children.length ? children:notTaskComponent}
            </div>
        </div>
    )
};

Page.propTypes = {
    notTaskComponent: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
}

export default Page;
