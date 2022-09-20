import React, {useState} from 'react';
import './MapSelector.css';
import mapData from '../map.json';

const MapSelector = () => {
  const [background, setBackground] = useState(0);
  const mapDataSize = mapData.maps.length;
  let mapName = 'Not Selected', mapImage = 'https://img.redbull.com/images/c_crop,x_0,y_0,h_1080,w_1920/c_fill,w_670,h_377/q_auto,f_auto/redbullcom/2020/11/4/qcwrwni0ww9pkzkmidri/the-range-valorant-guide';

  // select random index from the mapData
  const randomize = () => {
    let selectedID = Math.random() * (mapDataSize);
    selectedID = Math.floor(selectedID);

    // traverse through the mapData and find the approiate map and image
  }

  console.log(mapData);
  return (
    <div className="Map-Selector">
      <div>
        <div className="Map-Title">MAP</div>
        <div className="Map-Name">Map Name</div>
        <div>{mapName}</div>
        <button onClick={randomize}>Randomize Map</button><br />
      </div>
      <img className="Map-Image" src={mapImage} alt='no image'/>
    </div>
  );
}

export default MapSelector;