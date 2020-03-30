import React from 'react';
import SearchBar from './SearchBar';
import youtube, { baseParams } from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component{
  state = { videos: [], selectedVideo: null };

  componentDidMount(){
    this.onTermSubmit('');
  }
  
  onTermSubmit = async (term) => {
    let response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: term
      }
    });

    this.setState({
      videos : response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video}); 
  }

  render(){
    return(
      <div className="ui container">
        <div className="ui segment">
          <SearchBar onTermSubmit={this.onTermSubmit} />
        </div>
        <div className="ui grid">
          <div className="row">
            <div className="ten wide column">
              <VideoDetails video={this.state.selectedVideo}/>
            </div>
            <div className="six wide column">
              <VideoList 
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
