import React from 'react';
import { Link } from 'react-redux';
import { Header } from 'semantic-ui-react';

const Home = () => (
  <Header textAlign="center" as="h2" textColor="grey">Welcome to <Link to="blocks">Maispace</Link></Header>
)

export default Home;