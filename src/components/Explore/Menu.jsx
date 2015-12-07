import React, { Component, PropTypes } from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';

import MenuCategory from './MenuCategory';

export default class Menu extends Component {
    render() {
        return (
            <div style={this.props.style}>
                <Accordion>
                    {this.props.categories.map(category => 
                    <AccordionItem title={category.name} key={category.name}>
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
        name: PropTypes.string.isRequired,
        subCategories: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
        })).isRequired,
    })).isRequired,
};