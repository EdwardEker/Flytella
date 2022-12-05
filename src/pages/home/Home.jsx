import React from 'react';
import Advantages from '../../components/advantages/Advantages';
import FAQs from '../../components/faqs/FAQs';
import MainHeader from '../../components/header/MainHeader';
import Services from '../../components/services/Services';
import Testimonials from '../../components/testimonials/Testimonials';
import Footer from '../../components/footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <>
      <MainHeader />
      <Advantages />
      <Services />
      <FAQs />
      {/* <Testimonials /> */}
      <Footer />
    </>
  )
}

export default Home