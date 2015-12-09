import React, { Component, PropTypes } from 'react';
import Select from 'react-select';

export default class Search extends Component {

    componentDidMount() {
        this.refs.searchInput.focus();
    }

    render() {
        return (
            <div style={styles.container} onBlur={this.props.onBlur}>
                <input
                    type="text"
                    style={styles.search}
                    ref="searchInput"
                    placeholder="Search"
                    onKeyUp={ e => this.props.search(e.target.value) } />
                <div style={styles.tags}>
                    <Select
                        multi={true}
                        value={this.props.selectedTagIds.join(',')}
                        delimiter=","
                        options={this.props.tags.map(tag => ({ value: tag.id, label: tag.name }))}
                        onChange={this.props.updateSelectedTags} />
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        height: '100%',
        position: 'relative',
    },
    search: {
        backgroundColor: 'black',
        color: 'white',
        padding: '0 20px',
        border: 'none',
        height: '100%',
        outlineWidth: 0,
    },
    tags: {
        position: 'absolute',
        zIndex: 1000,
        minWidth: 100,
    },
};
