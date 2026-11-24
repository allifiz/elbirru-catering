import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import OfficialPhoto from '../editorial/OfficialPhoto';
import RoyalRibbon from './RoyalRibbon';

export default function RoyalCTA() {
  return (
    <section className="royal-cta">
      <div className="royal-cta-photo"><OfficialPhoto photo="kebuli" alt="Nasi kebuli Elbirru Catering" /></div>
      <div className="royal-cta-pattern" aria-hidden="true" />
      <RoyalRibbon variant="top" />
      <div className="royal-wrap royal-cta-inner">
        <div><h2>Pesan Catering Sekarang<br /><em>di Elbirru Catering!</em></h2><p>Konsultasikan kebutuhan acara Anda dan dapatkan penawaran paket catering di Garut.</p></div>
        <div className="royal-cta-actions">
          <a href="https://wa.me/6281312544313" target="_blank" rel="noreferrer" className="royal-gold-button"><MessageCircle size={23} /> <span>Pesan via WhatsApp<br />Sekarang</span><ArrowRight size={17} /></a>
          <Link href="/pemesanan">Coba simulasi pemesanan <ArrowRight size={14} /></Link>
        </div>
      </div>
      <img className="royal-cta-floral" src="/images/preview-3/ornaments/botanical-gold.svg" alt="" aria-hidden="true" />
      <RoyalRibbon variant="bottom" />
    </section>
  );
}
