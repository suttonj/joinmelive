import React, { Component, PropTypes } from 'react';

export default class MenuItem extends Component {
    render() {
        return (
            <div>
                <div onClick={ () =>  this.props.onClick(this.props.id) }>{this.props.name}</div>
                <div>
                {this.props.isOpen && this.props.subCategories.map(sub => 
                    <div key={sub.id} onClick={ () => this.props.onClick(sub.id) }>--{sub.name}</div>
                )}
                </div>
            </div>
        );
    }
}

MenuItem.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    subCategories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};
