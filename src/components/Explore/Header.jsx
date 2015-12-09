import React, { Component, PropTypes } from 'react';

import Hamburger from './Hamburger';
import CategoriesList from './CategoriesList';
import Search from './Search';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSearchHovered: false,
            isHamburgerHovered: false,
            isSearchShown: false,
        };
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.innerContainer}>
                    <div style={styles.logoContainer}>
                        <img src='img/jm-logo.svg' style={styles.logo} />
                    </div>
                    <div
                        style={{ ...styles.searchContainer, backgroundColor: this.state.isSearchHovered && '#888888' }}
                        onMouseOver={ () => this.setState({ isSearchHovered: true }) }
                        onMouseOut={ () => this.setState({ isSearchHovered: false }) }
                        onClick={ () => this.setState({ isSearchShown: true }) }>
                    {this.state.isSearchShown ?
                        <Search {...this.props } onBlur={ () => this.setState({ isSearchShown: false })} /> :
                        <div style={styles.searchPlaceholder}>Search<div style={styles.searchIcon} /></div>
                    }
                    </div>
                    <div
                        style={{ ...styles.hamburgerContainer, backgroundColor: this.state.isHamburgerHovered && '#888888' }}
                        onMouseOver={ () => this.setState({ isHamburgerHovered: true }) }
                        onMouseOut={ () => this.setState({ isHamburgerHovered: false }) }>
                        <Hamburger>
                            <CategoriesList 
                                categories={this.props.categories}
                                selectedCategoryId={this.props.selectedCategoryId}
                                selectCategory={this.props.selectCategory} />
                        </Hamburger>
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
        height: 50,
    },
    innerContainer: {
        maxWidth: 1000,
        margin: 'auto',
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },
    logoContainer: {

    },
    logo: {
        width:50,
        height:50,
    },
    hamburgerContainer: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',        
    },
    searchContainer: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        float: 'right',
        padding: '0 20px',
    },
    searchPlaceholder: {
        width: 100,
        position: 'relative',
    },
    searchIcon: {
        opacity: .9,
        padding: '16px 17px',
        position: 'absolute',
        top: -7,
        right: 12,
        background: 'url(//s.imgur.com/images/site-sprite.png?1430420391) no-repeat scroll -495px -249px',
    },
};