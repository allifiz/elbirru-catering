import Link from 'next/link';
import { ArrowUpRight, CalendarDays, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const contacts = [
  { title: 'WhatsApp', value: '0813-1254-4313', href: 'https://wa.me/6281312544313', icon: MessageCircle },
  { title: 'Email', value: 'elbirrucatering@gmail.com', href: 'mailto:elbirrucatering@gmail.com', icon: Mail },
  { title: 'Instagram', value: '@elbirrucatering', href: 'https://www.instagram.com/elbirrucatering/', icon: Instagram },
  { title: 'Alamat', value: 'Jl. Guntur Indah No. 3, Tarogong Kidul, Garut', href: 'https://www.google.com/maps/search/?api=1&query=Elbirru+Catering+Garut', icon: MapPin },
];

export default function ContactDetails() {
  return (
    <section className="section ed-contact-details">
      <div className="wrap ed-contact-grid">
        <div className="ed-contact-info">
          <span className="eyebrow">HUBUNGI KAMI</span>
          <h2>Informasi kontak</h2>
          <p>Temukan cara yang paling nyaman untuk menghubungi tim Elbirru Catering.</p>
          <div className="ed-contact-links">
            {contacts.map(({ title, value, href, icon: Icon }) => (
              <a href={href} key={title} target={href.startsWith('https:') ? '_blank' : undefined} rel="noreferrer">
                <span className="ed-contact-icon"><Icon size={22} /></span>
                <span><small>{title}</small><strong>{value}</strong></span>
                <ArrowUpRight size={17} className="ed-contact-arrow" />
              </a>
            ))}
          </div>
        </div>
        <div className="ed-contact-panel">
          <Phone size={30} />
          <h2>Konsultasi kebutuhan acara</h2>
          <p>Ceritakan jenis acara, tanggal, jumlah tamu, dan kebutuhan menu agar tim Elbirru dapat membantu Anda.</p>
          <a className="ed-button" href="https://wa.me/6281312544313" target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Chat via WhatsApp
          </a>
          <Link href="/pemesanan" className="ed-contact-planner">
            <CalendarDays size={18} /> Coba Catering Planner <ArrowUpRight size={15} />
          </Link>
          <p className="ed-contact-note">Website ini merupakan preview desain. Tidak ada pesan yang dikirim otomatis.</p>
        </div>
      </div>
    </section>
  );
}
