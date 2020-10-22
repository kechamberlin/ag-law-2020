import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PracticeGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto auto;
`;

const PracticeStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto 10em 1fr 4fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 4;
  grid-gap: 1rem;
  h3,
  p,
  ul,
  li {
    margin: 0;
  }
`;

function SinglePractice({ practice }) {
  const array = practice.categories;
  return (
    <PracticeStyles>
      <h3 className="center">
        <span>
          <strong>{practice.practice}</strong>
        </span>
      </h3>
      <Img fluid={practice.image.asset.fluid} alt={practice.practice} />
      <p className="center">{practice.overview}</p>
      <ul>
        {array.map((category) => (
          <li key={category.toString()}>{category}</li>
        ))}
      </ul>
    </PracticeStyles>
  );
}

export default function PracticeList({ practices }) {
  return (
    <PracticeGridStyles>
      {practices.map((practice) => (
        <SinglePractice key={practice.id} practice={practice} />
      ))}
    </PracticeGridStyles>
  );
}
