import React, { Component } from 'react';

export default class Hamburger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDropDownShown: false,
        };
    }

    render() {
        return (
            <div onClick={ () => this.setState({ isDropDownShown: !this.state.isDropDownShown }) }>
                <div style={styles.bar}></div>
                <div style={styles.bar}></div>
                <div style={styles.bar}></div>
                <div style={styles.dropDown(this.state.isDropDownShown)}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const styles = {
    bar: {
        width: 18,
        height: 2,
        display: 'block',
        opacity: .9,
        borderRadius: 40,
        position: 'relative',
        backgroundColor: '#fff',
        marginBottom: 2,
    },
    dropDown: isDropDownShown => ({
        display: isDropDownShown ? 'block' : 'none',
        position: 'absolute',
        zIndex: 1000,
    }),
};