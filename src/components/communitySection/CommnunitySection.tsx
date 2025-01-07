import React from 'react';
import { CommunityCard } from './CommunityCard';

export const CommnunitySection = () => {
  const testimonials = [
    {
      name: 'Ryan Carniato',
      handle: '@RyanCarniato',
      avatar: 'https://pbs.twimg.com/profile_images/1810837163447308292/8Piov0f6_400x400.jpg',
      comment: [
        `I'm loving what Vite enables. We've found building SolidStart that it is less a metaframework but a system of symbiotic Vite plugins. While built with
  SolidJS in mind, they should scale from our simplest template to opinionated starter. We're building an ecosystem on Vite.`,
      ],
    },
    {
      name: 'Rich Harris',
      handle: '@Rich_Harris',
      avatar: 'https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg',
      comment: [
        `Vite is basically the united nations of JavaScript at this point. I'll be there as a representative of Sveltelandia`,
      ],
    },
    {
      name: 'David East',
      handle: '@_davideast',
      avatar: 'https://pbs.twimg.com/profile_images/1691627325794725888/voQFcYjY_400x400.jpg',
      comment: ['Each and every time I use Vite, I feel a true sense of pure and unbridled joy.'],
    },
    {
      name: 'Mark Dalgleish',
      handle: '@markdalgleish',
      avatar: 'https://pbs.twimg.com/profile_images/754886061872979968/BzaOWhs1_400x400.jpg',
      comment: [
        `It’s also a great platform to build a framework on since it provides a pluggable dev environment.`,
        `Community is amazing too.`,
      ],
    },
    {
      name: 'Jason Miller',
      handle: '@_developit',
      avatar: 'https://pbs.twimg.com/profile_images/1374778373239681025/Sc9ehtAr_400x400.jpg',
      comment: [
        `Every time I suspect I've hit the bounds of what Vite can do, I end up being wrong.`,
      ],
    },
    {
      name: 'David Cramer',
      handle: '@zeeg',
      avatar: 'https://pbs.twimg.com/profile_images/1706891973553168384/zdAPOznc_400x400.jpg',
      comment: ['Vite has been a game changer for the industry.'],
    },
    {
      name: 'Dion Almaer',
      handle: '@dalmaer',
      avatar:
        'https://pbs.twimg.com/profile_images/3380865881/f73b3687ff39b795db05fcaf35972270_400x400.jpeg',
      comment: [
        'I am so excited to see so many great frameworks teaming up on top of vite. So many will benefit. ❤️ to the vite team.',
      ],
    },
    {
      name: 'Christoph Nakazawa',
      handle: '@cpojer',
      avatar: 'https://pbs.twimg.com/profile_images/1854151427595407360/4GyUCgEH_400x400.jpg',
      comment: ['Vite is gonna eat the (JavaScript) world.'],
    },
    {
      name: 'Nikolaj',
      handle: '@lopugit',
      avatar: 'https://avatars.githubusercontent.com/u/13629190?v=4',
      comment: ['Wow, wow, wow, wow, wow, wow, Vite is..... Vite is.... Wow 🤤🤯🙏'],
    },
  ];
  return (
    <section className="community-section">
      <h2>Loved by the community</h2>
      <h3>
        {`Don't take our word for it - listen to what Vite community members have to
        say.`}
      </h3>
      <div className="community-grid-container">
        <div className="community-grid">
          {testimonials.map((testimonial, index) => (
            <CommunityCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
