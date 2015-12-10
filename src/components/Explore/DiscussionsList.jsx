import React, { Component, PropTypes } from 'react';

import Discussion from './Discussion';

export default class DiscussionsList extends Component {

    constructor(props) {
        super(props);

        this.shouldShowTrendingIcon = this.shouldShowTrendingIcon.bind(this);
        this.join = this.join.bind(this);
    }

    shouldShowTrendingIcon(i) {
        const numOfDiscussions = this.props.discussions.length;
        return  numOfDiscussions > 10 ?
             (i + 1) < numOfDiscussions * 0.10 : // show for 10%
             i === 0;
    }

    join(viewerCode) {
        this.props.joinDiscussion(viewerCode)
    }

    render() {
        return (
            <div style={{padding:this.props.activeViewerCode ? 0 : 10}}>
                {this.props.activeViewerCode ?
                    <iframe src={`https://jmmaster.dev.3amlabs.net/${this.props.activeViewerCode}?suppressSticky=true`} width="100%" height="700px" frameBorder="0" /> :
                    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'flex-start',alignContent:'space-between'}}>
                        {this.props.discussions.map((disc, i) => 
                            <Discussion
                                key={disc.id}
                                {...disc}
                                showTrendingIcon={this.shouldShowTrendingIcon(i)}
                                join={ () => this.join(disc.viewerCode) } />
                        )}
                    </div>
                }
            </div>
        );
    }
}

DiscussionsList.propTypes = {
    categoryName: PropTypes.string,
    discussions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        subject: PropTypes.string.isRequired,
        viewerCode: PropTypes.number.isRequired,
        previewImageUrl: PropTypes.string.isRequired,
    })).isRequired,
    joinDiscussion: PropTypes.func.isRequired,
};
