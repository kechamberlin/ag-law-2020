import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const RecentCasesGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

const RecentCasesStyles = styled.div`
  .gatsby-image-wrapper {
    height: 400px;
  }
`;

export default function RecentCasesPage({ data }) {
  const clients = data.allSanityRecent.nodes;
  return (
    <>
      <p>Recent Cases Page</p>
    </>
  );
}
