import React from 'react';

const Gif = (props) => {
  return (
    <li className="gif-wrap">
      <img src={props.img} alt="" />
    </li>
  );
}

export default Gif;