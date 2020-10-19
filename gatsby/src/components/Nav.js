import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  .logo {
    transform: translateY(-25%);
  }
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -4rem;
  }
  a {
    font-size: 2.4rem;
    text-decoration: none;
    &:hover {
      color: var(--orange);
    }
    &[aria-current='page'] {
      color: var(--orange);
    }
  }
`;

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/areasofpractice">Areas of Practice</Link>
        </li>
        <li>
          <Link to="/recentcases">Recent Cases</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
