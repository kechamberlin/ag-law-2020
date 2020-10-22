import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

export default function RecentCasesPage({ data }) {
  const clients = data.allSanityRecent.nodes;
  return (
    <>
      <p>Recent Cases Page</p>
    </>
  );
}
