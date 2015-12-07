import React, { Component, PropTypes } from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';

export default class Menu extends Component {
    render() {
        return (
            <div style={this.props.style}>
                <Accordion>
                    {this.props.categories.map(category => 
                    <AccordionItem
                        key={category.name} 
                        title={category.name}
                        onClick={this.props.selectCategory(category.id)}>
                        {category.subCategories.map(subCategory => <div>{subCategory.name}</div>)}
                    </AccordionItem>
                    )}
                </Accordion>
            </div>
        );
    }
}

Menu.propTypes = {
    style: PropTypes.object.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        subCategories: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })).isRequired,
    })).isRequired,
    selectCategory: PropTypes.func.isRequired,
};