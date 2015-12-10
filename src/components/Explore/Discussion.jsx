import React, { Component, PropTypes } from 'react';

export default class Discussion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isHovered: false,
        };
    }

    render() {
        return (
            <div
                id={this.props.id}
                style={{position:'relative',width:200,padding:'20px 20px'}}>
                <img
                    src={this.props.previewImageUrl}
                    style={{width:200,height:200,borderRadius:'50%',cursor:'pointer',boxShadow:this.state.isHovered && '0 0 11px 1px #111'}}
                    onClick={this.props.join}
                    onMouseOver={ () => this.setState({ isHovered: true }) }
                    onMouseOut={ () => this.setState({ isHovered: false }) } />
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <a
                        onClick={this.props.join}
                        style={{ color: 'white',cursor:'pointer',color:this.state.isHovered ? '#9bd000' : 'white',textDecoration:'none'}}
                        onMouseOver={ () => this.setState({ isHovered: true }) }
                        onMouseOut={ () => this.setState({ isHovered: false }) }>
                        {this.props.subject}
                        <div style={{ display: this.state.isHovered ? 'block' : 'none', width:20, textAlign:'center',backgroundColor:'#f88300', borderRadius:'50%',padding:3, position:'absolute', top:30,right:30, color:'white' }}> {this.props.participantCount}</div>
                    </a>

                </div>
                {this.props.showTrendingIcon &&
                    <div style={{position:'absolute',bottom:8,left:8}}>
                        <img src="img/flame-icon.png" style={{width:50,height:'auto'}} />
                    </div>
                }
            </div>
        );
    }
}

Discussion.propTypes = {
    id: PropTypes.number.isRequired,
    subject: PropTypes.string.isRequired,
    viewerCode: PropTypes.number.isRequired,
    previewImageUrl: PropTypes.string.isRequired,
    join: PropTypes.func.isRequired,
};