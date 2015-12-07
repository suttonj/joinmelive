import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from './Explore/Menu';
import Main from './Explore/Main';

export class ExplorePage extends Component {
    render() {
        return (
            <div style={{display: 'flex',height:'100%'}}>
                <Menu style={{flexGrow:1,border:'1px solid red'}} categories={this.props.categories} />
                <div style={{flexGrow:4,flexBasis:0,display:'flex',flexDirection:'column'}}>
                    <div style={{border:'1px solid green'}}><input type="text" placeholder="Search" /></div>
                    <Main style={{flexGrow:1,border:'1px solid blue'}} discussions={this.props.discussions} />
                </div>
            </div>
        );
    }
}

export default connect(state => state)(ExplorePage)