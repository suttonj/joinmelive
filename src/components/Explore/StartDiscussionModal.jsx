import React, { Component, PropTypes } from 'react';
import Select from 'react-select';

import CategoriesList from './CategoriesList';

export default class StartDiscussionModal extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            ...this.props,
            subject: '',
        };
    }

    render() {
        return (
            <div>
                <h1>Start you own discussion:</h1>
                <input
                    type="text"
                    placeholder="Subject"
                    onKeyUp={ e => this.setState({ subject: e.target.value }) } />
                <label>
                    Categories:
                    <CategoriesList
                        categories={this.props.categories}
                        selectedCategoryId={this.state.categoryId}
                        selectCategory={ categoryId => this.setState({ categoryId }) } />
                </label>
                <label>
                    Tags:            
                    <Select
                        multi={true}
                        value={this.props.tagNames.join(',')}
                        delimiter=","
                        options={this.props.tags.map(tag => ({ value: tag.name, label: tag.name }))} // use name as key
                        onChange={ tagNames => this.setState({ tagNames }) }
                        allowCreate={true} />
                </label>
                <button onClick={ () => this.props.start(this.state) }>Start</button>
                <button onClick={this.props.close}>Cancel</button>
            </div>
        );
    }
}

StartDiscussionModal.propTypes = {
    categoryId: PropTypes.number,
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    tagNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })),
    start: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
};
