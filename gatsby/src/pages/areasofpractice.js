import React from 'react';
import { graphql } from 'gatsby';
import PracticeList from '../components/PracticeList';

export default function AreasOfPracticePage({ data }) {
  const practices = data.practices.nodes;
  return (
    <>
      <PracticeList practices={practices} />
    </>
  );
}

export const query = graphql`
  query PracticeQuery {
    practices: allSanityPractice {
      nodes {
        id
        practice
        overview
        categories
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
