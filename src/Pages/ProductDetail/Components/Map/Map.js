import React, { Component } from 'react';
import Mapimage from '../../Img/newmap.jpg';
import Mapping from '../../Img/newmaptitle.jpg';
import '../Map/Map.scss';
class Map extends Component {
  render() {
    return (
      <div className="map">
        <div class="innerWrap">
          <b>위치</b>
          <img className="address" src={Mapping} alt="map description" />
          <img className="mapImage" src={Mapimage} alt="map" />
        </div>
      </div>
    );
  }
}

export default Map;
