import React from 'react';
import { graphql } from 'gatsby';
import PracticeList from '../components/PracticeList';
import SEO from '../components/SEO';

export default function AreasOfPracticePage({ data }) {
  const practices = data.practices.nodes;
  return (
    <>
      <SEO title="Areas of Practice" />
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
            fluid(maxWidth: 2000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
