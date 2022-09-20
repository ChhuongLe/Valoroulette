import React, {useState} from 'react';
import './MapSelector.css';
import mapData from '../map.json';
import AgentTile from '../agentTiles/agentTile'

const MapSelector = () => {
  const [background, setBackground] = useState('https://images6.alphacoders.com/120/1203270.jpg');
  const [mapName, setMapName] = useState('None');
  const mapDataSize = mapData.maps.length;
  const mapArr = mapData.maps;

  // select random index from the mapData
  const randomize = () => {
    let selectedID = Math.random() * (mapDataSize - 1) + 1;
    selectedID = Math.floor(selectedID);
    console.log(selectedID);

    // traverse through the mapData and find the approiate map and image
    setMapName(mapArr[selectedID].mapName);
    let mapImage = mapArr[selectedID].backgroundURL;
    setBackground(mapImage);
  }

  return (
    <div className="Map-Selector">
      <img className="Map-Image" src={background} alt='no image'/>
      <div className="Map-Items">
        <div className="Map-Title">MAP</div>
        <div className="Map-Name">{mapName}</div>
        <button className="Map-Generator" onClick={randomize}>Randomize Map</button><br />
      </div>
      <AgentTile />
    </div>
  );
}

export default MapSelector;