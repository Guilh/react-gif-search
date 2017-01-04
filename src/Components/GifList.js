import React, {Component} from 'react';
import Gif from './Gif';

class GifList extends Component {
  render() {
    const results = this.props.data;
    let gifs = results.map(function(gif) { 
       return <Gif img={gif.images.fixed_height.url}
                   key={gif.id}/>       
    });
     
    return(
      <div>
        <ul className="gif-list">
          {gifs}
        </ul> 
      </div>
    );
  }
}

export default GifList;
