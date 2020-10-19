import React from 'react';
import styled from 'styled-components';
import bg from '../assets/images/ag-law-logo.jpg';

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  width: 30em;
  height: 30em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 0;
  background-size: 150em;
  border: 3px solid orange;
  border-radius: 50%;
  display: flex;
  .inner {
    flex: 1;
    display: grid;
    grid-template-rows: 20% 1fr 1fr;
    align-content: center;
  }
  .site-logo {
    border-radius: 50%;
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <img src={bg} alt="" className="site-logo" />
      </div>
    </LogoStyles>
  );
}
