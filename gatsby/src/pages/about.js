import React from 'react';
import { graphql } from 'gatsby';
import PersonList from '../components/PersonList';

export default function AboutPage({ data }) {
  const persons = data.persons.nodes;
  return (
    <>
      <p>About Page</p>
    </>
  );
}
