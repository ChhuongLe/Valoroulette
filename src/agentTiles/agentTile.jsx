import React, {useState} from 'react';
import "./agentTile.css";

const AgentTile = () => {
  const [agentName, setAgentName] = useState('None');
  const [agentIcon, setAgentIcon] = useState('None');
  return (
    <div className="Agent-Tile">
      <div className="Heading">Agent Name</div>
      <img className="Agent-Image" src="https://static.wikia.nocookie.net/valorant/images/3/35/Jett_icon.png/"/>
      <div className="Agent-Name">Jett</div>
      <button className="Random">Random Agent</button>
      <button className="Clear">Clear</button>
    </div>
  );
}

export default AgentTile;