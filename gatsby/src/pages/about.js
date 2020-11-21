import React from 'react';
import { graphql } from 'gatsby';
import PersonList from '../components/PersonList';
import SEO from '../components/SEO';

export default function AboutPage({ data }) {
  const persons = data.persons.nodes;
  return (
    <>
      <SEO title="About Anthony" />
      <PersonList persons={persons} />
    </>
  );
}

export const query = graphql`
  query PersonQuery {
    persons: allSanityPerson {
      nodes {
        id
        name
        description
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
