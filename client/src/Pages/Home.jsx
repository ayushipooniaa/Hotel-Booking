import React from 'react';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import ExclusiveOffer from '../components/ExclusiveOffer';
import Reviews from '../components/reviews';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
    <ExclusiveOffer/>
    <Reviews/>
    <NewsLetter/>
    
    </div>
  );
};

export default Home;

