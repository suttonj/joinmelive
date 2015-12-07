import React, { Component } from 'react';

import Menu from './Explore/Menu';
import Main from './Explore/Main';

export default class ExplorePage extends Component {
    render() {
        return (
            <div style={{display: 'flex',height:'100%'}}>
                <Menu style={{flexGrow:1,backgroundColor:'red'}} />
                <div style={{flexGrow:4,display:'flex',flexDirection:'column'}}>
                    <div style={{backgroundColor:'yellow'}}><input type="text" placeholder="Search" /></div>
                    <Main style={{flexGrow:1,backgroundColor:'blue'}} />
                </div>
            </div>
        );
    }
}