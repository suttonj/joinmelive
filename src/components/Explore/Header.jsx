import React, { Component, PropTypes } from 'react';
import Select from 'react-select';

import Hamburger from './Hamburger';
import CategoriesList from './CategoriesList';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSearchHovered: false,
            isHamburgerHovered: false,
            isSearchShown: false,
        };

        this.onKeyUp = this.onKeyUp.bind(this);
    }

    componentDidMount() {
        this.refs.searchInput.focus();
    }

    onKeyUp(text) {
        this.props.search(text);
        let newSize = 5
        if (text && text.length > 5) {
            newSize = text.length;
        }
        this.refs.searchInput.size = newSize;
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.innerContainer}>

                    <div style={styles.logoContainer}>
                        <img src='img/jm-logo.svg' style={styles.logo} />
                    </div>

                    <div style={{margin:'auto'}}>
                        Let's talk about&nbsp;
                        <input
                            type="text"
                            ref="searchInput"
                            placeholder="Search"
                            style={{backgroundColor:'transparent', border:'none',borderBottom:'2px solid #9bd000',outlineWidth:0,color:'white',padding:'3px 20px'}}
                            onKeyUp={ e => this.onKeyUp(e.target.value) }
                            size="5" />
                        &nbsp;.
                    </div>
                
                    <div>
                        Start your own <button style={styles.button} onClick={this.props.startDiscussion}>Discussion</button>
                    </div>
                </div>
            </div>
        );
    }
}

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
    button: {
        backgroundColor:'#FC8E26',
        color:'white',
        border:'none',
        borderRadius:8,
        padding:'12px 30px',
        cursor:'pointer',
        outlineWidth: 0,
    },
};