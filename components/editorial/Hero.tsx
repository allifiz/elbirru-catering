import Link from 'next/link';
import { ArrowRight, MapPin, Utensils, HeartPulse, ShieldCheck, CheckCircle2 } from 'lucide-react';
import OfficialPhoto from './OfficialPhoto';
import WaveDivider from './WaveDivider';

export default function Hero() {
  const qualities = [
    { label: 'Makanan Halal', icon: CheckCircle2 },
    { label: 'Enak', icon: Utensils },
    { label: 'Sehat', icon: HeartPulse },
    { label: 'Higienis', icon: ShieldCheck },
  ];

  return (
    <section className="ed-hero">
      <div className="ed-hero-photo">
        <OfficialPhoto photo="hero" alt="Dokumentasi pernikahan Elbirru Catering" priority />
      </div>
      <div className="ed-hero-shade" />
      <div className="ed-container ed-hero-content">
        <div className="ed-hero-copy">
          <span className="ed-kicker">ELBIRRU CATERING</span>
          <h1>Catering Terpercaya<br /><em>di Garut</em></h1>
          <span className="ed-location"><MapPin size={16} /> Garut, Jawa Barat</span>
          <p>Solusi lengkap kebutuhan catering untuk berbagai acara Anda di Garut dan sekitarnya.</p>
          <div className="ed-qualities">
            {qualities.map(({ label, icon: Icon }) => (
              <div key={label}><span><Icon size={23} /></span>{label}</div>
            ))}
          </div>
          <Link href="#menu" className="ed-button">Lihat Layanan Kami <ArrowRight size={18} /></Link>
        </div>
      </div>
      <WaveDivider />
    </section>
  );
}
