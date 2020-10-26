import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Badge from '../Badge';
import {
  FaStar,
} from 'react-icons/fa';
interface CardDevProps {
    name: string;
    uuid?: string;
    title?: string;
}
const CardDev: React.FC<CardDevProps> = (props)  => {
  return (
    <>
        <Link to={"https://dev4u.app"} className="card">
            <div className="thumb" id="img1"></div>
            <article>
                <h1>{props.title}</h1>
                <span>{props.name}</span>
                <div className="badge">
                    <Badge title="PHP" />
                    <Badge title="Vue" />
                </div>
            </article>
        </Link>
    
    </>
  );
}

export default CardDev;
