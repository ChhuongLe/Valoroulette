import React, {useState} from 'react';
import './MapSelector.css';
import defaultImage from '../images/default.jpeg';
import agentData from '../agents.json';
import mapData from '../map.json';
import AgentTile from '../agentTiles/agentTile'

const MapSelector = () => {
  const [background, setBackground] = useState(defaultImage);
  const [mapName, setMapName] = useState('None');
  const mapDataSize = mapData.maps.length;
  const mapArr = mapData.maps;
  // set up a hash to store all the agents that have been selected
  let pickedAgents = new Map();

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

  const clearMap = () => {
    setMapName('None');
    setBackground(defaultImage);
  }

  return (
    <div className="Map-Selector">
      <div className="Attacking-Agents">
        <AgentTile className="A-Agent" idx={1} pickedAgents={pickedAgents}/>
        <AgentTile className="A-Agent" idx={2} pickedAgents={pickedAgents}/>
        <AgentTile className="A-Agent" idx={3} pickedAgents={pickedAgents}/>
        <AgentTile className="A-Agent" idx={4} pickedAgents={pickedAgents}/>
        <AgentTile className="A-Agent" idx={5} pickedAgents={pickedAgents}/>
      </div>

      <img className="Map-Image" src={background} alt='N/A'/>

      <div className="Map-Items">
        <div className="Map-Title">MAP</div>
        <div className="Map-Name">{mapName}</div>
        <button className="Map-Button" onClick={randomize}>Randomize Map</button>
        <button className="Map-Button" onClick ={clearMap}>Clear Map</button>
      </div>
    </div>
  );
}

export default MapSelector;