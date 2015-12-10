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
                <div style={{margin:'auto'}}>
                    Let's talk about&nbsp;
                    <input
                        type="text"
                        ref="searchInput"
                        placeholder="Subject"
                        style={{backgroundColor:'transparent', border:'none',borderBottom:'2px solid #9bd000',outlineWidth:0,color:'white',padding:'3px 20px'}}
                        onKeyUp={ e => this.setState({ subject: e.target.value }) }
                        size="6"
                        defaultValue={this.props.subject} />
                    &nbsp;.
                </div>
                <label>
                    Categories:
                    <CategoriesList
                        selectedCategoryId={this.props.selectedCategoryId}
                        categories={this.props.categories}
                        selectCategory={this.props.selectCategory} />
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
