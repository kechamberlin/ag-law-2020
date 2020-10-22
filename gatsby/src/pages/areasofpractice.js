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
