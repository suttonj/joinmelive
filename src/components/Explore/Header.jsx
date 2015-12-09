import React, { Component, PropTypes } from 'react';
import Select from 'react-select';

import Hamburger from './Hamburger';
import CategoriesList from './CategoriesList';

export default class Header extends Component {

    componentDidMount() {
        this.refs.searchInput.focus();
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.innerContainer}>
                    <div style={styles.logoContainer}>
                        <img src='img/jm-logo.svg' style={styles.logo} />
                    </div>
                    <div style={styles.hamburgerContainer}>
                        <Hamburger>
                            <CategoriesList 
                                categories={this.props.categories}
                                selectedCategoryId={this.props.selectedCategoryId}
                                selectCategory={this.props.selectCategory} />
                        </Hamburger>
                    </div>
                    <div style={styles.searchContainer}>
                        <input
                            type="text"
                            ref="searchInput"
                            placeholder="Search"
                            onKeyUp={ e => this.props.search(e.target.value) } />
                    </div>
                    <div style={styles.tagsContainer}>
                        <Select
                            multi={true}
                            value={this.props.selectedTagIds.join(',')}
                            delimiter=","
                            options={this.props.tags.map(tag => ({ value: tag.id, label: tag.name }))}
                            onChange={this.props.updateSelectedTags} />
                    </div>                        
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    search: PropTypes.func.isRequired,
    selectedCategoryId: PropTypes.number,
    selectedTagIds: PropTypes.arrayOf(PropTypes.number.isRequired),
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })),
    updateSelectedTags: PropTypes.func.isRequired,
};

const styles = {
    container: {
        position:'relative',
        backgroundColor:'#2b2b2b',
        boxShadow:'0 0 11px 1px #111',
    },
    innerContainer: {
        maxWidth: 1000,
        margin: 'auto',
        display:'flex',
        justifyContent:'center',
    },
    logoContainer: {

    },
    logo: {
        width:100,
        height:100,
    },
    hamburgerContainer: {

    },
    searchContainer: {
        flexGrow:1,
    },
    tagsContainer: {
        flexGrow:1,
    },
};