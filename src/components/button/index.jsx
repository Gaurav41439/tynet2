import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Button.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
    onClick: PropTypes.func,
    addclass: PropTypes.string,
};

function Button(props) {
    const { title, path, onClick, addclass } = props;
    return (
        <a 
            className={`tf-button ${addclass}`} 
            href={path} 
            onClick={onClick} 
            target="_blank" 
            rel="noopener noreferrer"
        >
            {title}
        </a>
    );
}

export default Button;
