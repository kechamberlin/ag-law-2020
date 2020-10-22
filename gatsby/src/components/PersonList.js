import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PersonGridStyle = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  h2,
  p {
    margin: 0;
  }
`;

function SinglePerson({ person }) {
  return (
    <div>
      <h2 className="center">{person.name}</h2>
      <PersonGridStyle>
        <Img fluid={person.image.asset.fluid} alt={person.name} />
        <div>
          <p>{person.description}</p>
        </div>
      </PersonGridStyle>
    </div>
  );
}

export default function PersonList({ persons }) {
  console.log(persons);
  return (
    <div>
      {persons.map((person) => (
        <SinglePerson key={person.id} person={person} />
      ))}
    </div>
  );
}
