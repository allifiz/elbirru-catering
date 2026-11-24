'use client';

import type { Item } from '../../data/catalog';
import Hero from './Hero';
import Services from './Services';
import WhyChoose from './WhyChoose';
import Testimonials from './Testimonials';
import Portfolio from './Portfolio';
import ContactCTA from './ContactCTA';

export default function EditorialHome({ onSelect }: { onSelect: (item: Item) => void }) {
  return (
    <div className="editorial-home">
      <Hero />
      <Services onSelect={onSelect} />
      <WhyChoose />
      <Testimonials />
      <Portfolio />
      <ContactCTA />
    </div>
  );
}
