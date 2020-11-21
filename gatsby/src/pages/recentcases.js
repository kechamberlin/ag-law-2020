import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const RecentCasesGrid = styled.div`
  display: center;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

const RecentCasesStyles = styled.div`
  .gatsby-image-wrapper {
    height: 400px;
  }
`;

export default function RecentCasesPage({ data, pageContext }) {
  const clients = data.allSanityRecent.nodes;
  return (
    <>
      <SEO title={`Recent Cases - Page ${pageContext.currentPage || 1}`} />
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.allSanityRecent.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/recentcases"
      />
      <RecentCasesGrid>
        {clients.map((client) => (
          <RecentCasesStyles>
            <Img fluid={client.image.asset.fluid} alt={client.recent} />
            <p className="description">{client.description}</p>
          </RecentCasesStyles>
        ))}
      </RecentCasesGrid>
    </>
  );
}

export const query = graphql`
  query CaseQuery {
    allSanityRecent {
      nodes {
        id
        recent
        description
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
