import React, {useState} from 'react';
import './MapSelector.css';
import mapData from '../map.json';

const MapSelector = () => {
  const [background, setBackground] = useState(0);
  const mapDataSize = mapData.maps.length;
  let mapName = 'Not Selected', mapImage = 'https://images6.alphacoders.com/120/1203270.jpg';

  // select random index from the mapData
  const randomize = () => {
    let selectedID = Math.random() * (mapDataSize);
    selectedID = Math.floor(selectedID);
    console.log(selectedID);

    // traverse through the mapData and find the approiate map and image
  }

  console.log(mapData);
  return (
    <div className="Map-Selector">
      <img className="Map-Image" src={mapImage} alt='no image'/>
      <div className="Map-Items">
        <div className="Map-Title">MAP</div>
        <div className="Map-Name">{mapName}</div>
        <button className="Map-Generator" onClick={randomize}>Randomize Map</button><br />
      </div>
    </div>
  );
}

export default MapSelector;