import React, {Component} from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

export default class GifContainer extends Component {
  render() {
    const results = this.props.data;
    let gifs;    
    if(results.length > 0) {
      gifs = results.map(gif => <Gif img={gif.images.fixed_height.url} 
key={gif.id}/>);
    } else {
      return <NoGifs />
    }
    
    return(
      <ul className="gif-list">
        {gifs}
      </ul> 
    );
  }
}
