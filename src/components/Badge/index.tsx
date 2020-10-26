import React, { MouseEventHandler } from 'react';
import './styles.css';

interface BadgeProps {
    title: string;
}

const Badge: React.FC<BadgeProps> = (props)  => {

  return (
    <div className="badge_btn">
      {props.title}
    </div>
  );
};

export default Badge;