import Link from 'next/link';
import { ArrowRight, CheckCircle2, ConciergeBell, HeartPulse, MapPin, ShieldCheck } from 'lucide-react';
import OfficialPhoto from '../editorial/OfficialPhoto';
import RoyalRibbon from './RoyalRibbon';

const qualities = [
  { name: 'Makanan Halal', icon: CheckCircle2 },
  { name: 'Enak', icon: ConciergeBell },
  { name: 'Sehat', icon: HeartPulse },
  { name: 'Higienis', icon: ShieldCheck },
];

export default function RoyalHero() {
  return (
    <section className="royal-hero">
      <div className="royal-hero-photo">
        <OfficialPhoto photo="heroBuffet" alt="Dokumentasi prasmanan Elbirru Catering" priority />
      </div>
      <div className="royal-hero-fade" />
      <div className="royal-wrap royal-hero-content">
        <span className="royal-kicker">ELBIRRU CATERING</span>
        <h1>
          Catering Terpercaya
          <span><em>di Garut</em><small><MapPin size={16} /> Garut, Jawa Barat</small></span>
        </h1>
        <p>Solusi lengkap kebutuhan catering untuk berbagai acara Anda di Garut dan sekitarnya.</p>
        <div className="royal-qualities">
          {qualities.map(({ name, icon: Icon }) => (
            <div key={name}><span><Icon size={22} /></span><strong>{name}</strong></div>
          ))}
        </div>
        <Link href="#menu" className="royal-button">Lihat Layanan Kami <ArrowRight size={17} /></Link>
      </div>
      <RoyalRibbon />
      <img className="royal-hero-floral" src="/images/preview-3/ornaments/botanical-mixed.svg" alt="" aria-hidden="true" />
    </section>
  );
}
