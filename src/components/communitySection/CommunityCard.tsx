import Image from 'next/image';
import React from 'react';

export interface Testimonial {
  avatar: string;
  name: string;
  handle: string;
  comment: string[];
}
export const CommunityCard = ({ avatar, name, handle, comment }: Testimonial) => {
  return (
    <div className="community-card">
      <div className="card__header">
        <Image src={avatar} className="card__avatar" width={50} height={50} alt={name} />
        <div className="card__meta">
          <span className="card__name">{name}</span>
          <span className="card__handle">{handle}</span>
        </div>
      </div>
      <div className="card__content">
        {comment.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </div>
  );
};
