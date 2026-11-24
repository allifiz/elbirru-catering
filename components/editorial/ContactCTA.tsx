import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';
import WaveDivider from './WaveDivider';

export default function ContactCTA() {
  return (
    <section className="ed-contact">
      <WaveDivider flip />
      <div className="ed-container ed-contact-inner">
        <span className="ed-whatsapp"><MessageCircle size={39} /></span>
        <h2>Pesan Catering Sekarang<br /><em>di ELBIRRU Catering!</em></h2>
        <p>Konsultasikan kebutuhan acara Anda dan dapatkan penawaran sesuai kebutuhan.</p>
        <div className="ed-contact-actions">
          <a href="https://wa.me/6281312544313" target="_blank" rel="noreferrer" className="ed-button"><MessageCircle size={19} /> Pesan via WhatsApp <ArrowRight size={17} /></a>
          <Link href="/pemesanan">Coba simulasi pemesanan <ArrowRight size={14} /></Link>
        </div>
      </div>
    </section>
  );
}
