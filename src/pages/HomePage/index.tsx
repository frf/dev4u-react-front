import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjOne} from './data';
// import Pricing from '../Pricing';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Home;
