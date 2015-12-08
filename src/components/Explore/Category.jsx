import React, { Component, PropTypes } from 'react';

export default class Category extends Component {
    render() {
        return (
            <div>
                <div
                    style={{backgroundColor:this.props.id === this.props.selectedCategoryId && 'red'}}
                    onClick={ () =>  this.props.onClick(this.props.id) }>
                    {this.props.name}
                </div>
                <div>
                {this.props.isOpen && this.props.subCategories.map(sub => 
                    <div
                        key={sub.id}
                        style={{backgroundColor:sub.id === this.props.selectedCategoryId && 'red'}}
                        onClick={ () => this.props.onClick(sub.id) }>--{sub.name}</div>
                )}
                </div>
            </div>
        );
    }
}

Category.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    selectedCategoryId: PropTypes.number,
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    subCategories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};
