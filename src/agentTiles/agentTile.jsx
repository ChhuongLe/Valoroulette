import React, {useState} from 'react';
import agentData from '../agents.json';
import empty from '../images/emptyProfile.png';
import "./agentTile.css";

const AgentTile = ({pickedAgents, idx}) => {
  const [agentName, setAgentName] = useState('None');
  const [agentIcon, setAgentIcon] = useState(empty);
  const agentListSize = agentData.agents.length;
  const agentArr = agentData.agents;


  const randomAgent = () => {
    let agentID = Math.random() * (agentListSize - 1) + 1;
    agentID = Math.floor(agentID);

    if(Array.from(pickedAgents.values()).includes(agentID)) {
      console.log("Triggered");
      randomAgent();
    } else {
      pickedAgents.set(idx, agentID);
      setAgentName(agentArr[agentID].agentName);
      setAgentIcon(agentArr[agentID].agentProfile);
    }
  }

  const clearAgent = () => {
    setAgentName('None');
    setAgentIcon(empty);
  }

  return (
    <div className="Agent-Tile">
      <div className="Heading">Agent Name</div>
      <img className="Agent-Image" src={agentIcon} alt="cannot display"/>
      <div className="Agent-Name">{agentName}</div>
      <button className="Random" onClick={randomAgent}>Random Agent</button>
      <button className="Clear" onClick={clearAgent}>Clear</button>
    </div>
  );
}

export default AgentTile;