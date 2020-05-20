import React from 'react';
import Hero from './Hero';
import HelpButtons from './../help/HelpButtons';
import News from './../events/News';

const Home = () => {
  return ( 
    <>
      <Hero />
      <HelpButtons />
      <News />
    </>
  );
}
 
export default Home;