// Write your Character component here
import React from "react";
import styled from "styled-components";
const Characterinfo = styled.div`
  letter-spacing: 1.2px;
  font-family: 'Playfair Display', serif;
  display: flex;
  flex-direction: column;
  align-content: center;
  color: #6a040f;
  text-shadow: 1px 1px 5px #fff;
  font-size: 1.4rem;
  margin : 0.8% auto;
  width: 45%;
  border-bottom: 1.5px solid white;
  line-height: 1rem;
  @keyframes blink {
      25% { color: #BC3908 }
      50% { color: #941B0C}
      100%{ color: #621708}
  }
  h2 {
      animation-name: blink; 
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
  }
  :hover{
    background-color: rgba(255, 0, 0, 0.4);
  } 
`

export default function Character(props) {
    const { character } = props; 

return (
    <Characterinfo>
        <h2>Name:       {character.name}</h2>
        <h3>Height:     {character.height}</h3>
        <h3>Mass :      {character.mass} </h3>
        <h3>Eye Color:  {character.eye_color}</h3>
        <h3>Hair Color :{character.hair_color}</h3>
        <h3>Skin Color: {character.skin_color}</h3>
  </Characterinfo>
    )
}