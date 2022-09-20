import React, {useState} from 'react';
import agentData from '../agents.json';
import "./agentTile.css";

const AgentTile = () => {
  const [agentName, setAgentName] = useState(agentData.agents[0].agentName);
  const [agentIcon, setAgentIcon] = useState(agentData.agents[0].agentProfile);
  const agentListSize = agentData.agents.length;
  const agentArr = agentData.agents;

  const randomAgent = () => {
    let agentID = Math.random() * (agentListSize - 1) + 1;
    agentID = Math.floor(agentID);

    setAgentName(agentArr[agentID].agentName);
    setAgentIcon(agentArr[agentID].agentProfile);
  }

  const clearAgent = () => {
    setAgentName(agentArr[0].agentName);
    setAgentIcon(agentArr[0].agentProfile);
  }

  return (
    <div className="Agent-Tile">
      <div className="Heading">Agent Name</div>
      <img className="Agent-Image" src={agentIcon}/>
      <div className="Agent-Name">{agentName}</div>
      <button className="Random" onClick={randomAgent}>Random Agent</button>
      <button className="Clear" onClick={clearAgent}>Clear</button>
    </div>
  );
}

export default AgentTile;