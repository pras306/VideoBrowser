import React from 'react';

class VideoItem extends React.Component{

    render(){
        return(
            <div className="item" style={{cursor:"pointer"}}>
                <img className="ui middle aligned tiny image" 
                src={this.props.video.snippet.thumbnails.medium.url}
                alt={this.props.video.snippet.title}
                onClick={() => {this.props.onVideoSelect(this.props.video)}}
                ></img>
                <div className="content">
                    <span className="header">{this.props.video.snippet.title}</span>
                </div>
            </div>
        )
    }
}

export default VideoItem;