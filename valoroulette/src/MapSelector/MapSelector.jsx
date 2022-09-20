import React, {useState} from 'react';
import './MapSelector.css';
import mapData from '../map.json';

const MapSelector = () => {
  const [background, setBackground] = useState(0);
  const mapDataSize = mapData.maps.length;
  let mapName = 'Not Selected', mapImage = 'https://static.wikia.nocookie.net/valorant/images/3/37/Loading_Screen_Range.png';

  // select random index from the mapData
  const randomize = () => {
    let selectedID = Math.random() * (mapDataSize);
    selectedID = Math.floor(selectedID);

    // traverse through the mapData and find the approiate map and image
  }

  console.log(mapData);
  return (
    <div className="Map-Selector">
      <div className="Map-Title">MAP</div>
      <div className="Map-Name">Map Name</div>
      <div>{mapName}</div>
      <button onClick={randomize}>Randomize Map</button><br />
      <img className="Map-Image" src={mapImage} alt='no image'/>

    </div>
  );
}

export default MapSelector;