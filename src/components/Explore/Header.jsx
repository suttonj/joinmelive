import React, { Component, PropTypes } from 'react';
import Select from 'react-select';

import CategoriesList from './CategoriesList';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSearchHovered: false,
            isHamburgerHovered: false,
            isSearchShown: false,
            isButtonHovered: false,
        };

        this.expandInput = this.expandInput.bind(this);
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {
        this.refs.searchInput.focus();
    }

    expandInput(text) {
        this.props.search(text);

        if (!text) {
            this.refs.searchInput.style.width = '42px';
            return;
        }

        const span = document.createElement('span');
        span.innerHTML = text;
        document.body.appendChild(span);
        const width = span.offsetWidth;

        if (!text || width < 42) {
            this.refs.searchInput.style.width = '42px';
            return;
        } else {
            this.refs.searchInput.style.width = width + 'px';
        }

        document.body.removeChild(span);
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.innerContainer}>

                    <div style={styles.logoContainer} onClick={ () => window.location = '/#'}>
                        <img src='img/jmlive-logo.svg' style={styles.logo} />
                    </div>

                    <div style={{margin:'auto'}}>
                        Let's talk about&nbsp;
                        <input
                            type="text"
                            ref="searchInput"
                            placeholder="Search"
                            style={{backgroundColor:'transparent', border:'none',borderBottom:'2px solid #9bd000',outlineWidth:0,color:'white',padding:'3px 20px',width:42}}
                            defaultValue={this.props.query}
                            onKeyUp={ e => this.expandInput(e.target.value) } />
                        &nbsp;.
                    </div>

                    <div>
                        <button 
                            onMouseOver={ () => this.setState({ isButtonHovered: true }) }
                            onMouseOut={ () => this.setState({ isButtonHovered: false }) }
                            style={{
                            color: '#424143',
                            fontWeight: 'bold',
                            padding: '10px 40px',
                            fontSize: '14px',
                            cursor: 'pointer',
                            border: 'none',
                            borderRadius: '4px',
                            backgroundColor: '#F88300',
                            outlineWidth: 0,
                            boxShadow: this.state.isButtonHovered && '0 0 11px 1px #111',
                        }} 
                        onClick={this.props.startDiscussion}>Start a discussion</button> 
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
        height: 70,
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
        cursor:'pointer',
    },
    logo: {
        marginTop: 8,
        width:75,
        height:75,
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