import React from 'react';

class VideoDetails extends React.Component{

    render(){
        if(this.props.video == null){
            return<div>Loading...</div>
        }
        else{
            const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
            return(
            <div>
                <div className="ui embed">
                    <iframe title="video player" src={videoSrc}></iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{this.props.video.snippet.title}</h4>
                    <p>{this.props.video.snippet.description}</p>
                </div>
            </div>
            );
        }
    }
}

export default VideoDetails;