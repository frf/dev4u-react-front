import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjOne} from './data';
// import Pricing from '../Pricing';

function HowToWork() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default HowToWork;
