'use client';

import type { Item } from '../../data/catalog';
import RoyalHero from './RoyalHero';
import RoyalMenu from './RoyalMenu';
import RoyalEvents from './RoyalEvents';
import RoyalTrust from './RoyalTrust';
import RoyalCTA from './RoyalCTA';

export default function RoyalHome({ onSelect }: { onSelect: (item: Item) => void }) {
  return (
    <div className="royal-home">
      <RoyalHero />
      <RoyalMenu onSelect={onSelect} />
      <RoyalEvents />
      <RoyalTrust />
      <RoyalCTA />
    </div>
  );
}
