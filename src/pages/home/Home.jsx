import React from 'react';
import Advantages from '../../components/advantages/Advantages';
import MainHeader from '../../components/header/MainHeader';
import Services from '../../components/services/Services';
import './Home.css';

const Home = () => {
  return (
    <>
      <MainHeader />
      <Advantages />
      <Services />
    </>
  )
}

export default Home