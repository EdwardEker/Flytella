import React from 'react';
import Advantages from '../../components/advantages/Advantages';
import Brands from '../../components/brands/Brands';
import FAQs from '../../components/faqs/FAQs';
import MainHeader from '../../components/mainHeader/MainHeader';
import ServicesMain from '../../components/servicesMain/ServicesMain';
import Testimonials from '../../components/testimonials/Testimonials';
import './Home.css';

const Home = () => {
  return (
    <>
      <MainHeader />
      <Advantages />
      <ServicesMain />
      <FAQs />
      <Brands />
      {/* <Testimonials /> */}
    </>
  )
}

export default Home