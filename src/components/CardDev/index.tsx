import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import {
  FaStar,
} from 'react-icons/fa';
interface CardDdevProps {
}
const CardDev: React.FC<CardDdevProps> = (props)  => {
  return (
    <>
      <div className="band">
        <div className="item-1">
          <Link to={"https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852"} className="card">
            <div className="thumb " id="img1"></div>
            <article>
              <h1>International Artist Feature: Malaysia</h1>
              <span>Mary Winkler</span>
            </article>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardDev;
