import React, { Component, PropTypes } from 'react';
import Select from 'react-select';

import CategoriesList from './CategoriesList';
import LoadingSpinner from './LoadingSpinner';

export default class StartDiscussionModal extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            ...this.props,
            subject: '',
        };
    }

    componentDidMount() {
        this.refs.searchInput.focus();
    }

    render() {
        return (
            <div style={{height:'100%'}}>
            {this.props.isSaving ?
                <LoadingSpinner /> :
                <div style={{position:'relative',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                        <div style={{display:'flex',flexGrow:1,alignItems:'flex-start'}}>
                            <div style={{margin:'auto',color:'white'}}>
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
                        </div>
                        <div style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center'}}>
                            <button onClick={ () => this.props.start(this.state) } style={{
                            color: '#424143',
                            fontWeight: 'bold',
                            padding: '10px 40px',
                            fontSize: '14px',
                            cursor: 'pointer',
                            border: 'none',
                            borderRadius: '4px',
                            backgroundColor: '#F88300',
                        }}>Start</button>
                            <a onClick={this.props.close} style={{textDecoration:'underline',color:'#9bd000',cursor:'pointer'}}>Cancel</a>
                        </div>
                </div> 
            }
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

const styles = {

    button: {
        backgroundColor:'#FC8E26',
        color:'white',
        border:'none',
        borderRadius:8,
        padding:'12px 30px',
        cursor:'pointer',
        outlineWidth: 0,
    },
}
