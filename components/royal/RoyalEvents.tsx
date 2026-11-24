import Link from 'next/link';
import { BriefcaseBusiness, CalendarDays, ChefHat, HeartHandshake } from 'lucide-react';
import type { Photo } from '../../data/catalog';
import OfficialPhoto from '../editorial/OfficialPhoto';

const events = [
  { name: 'Pernikahan', photo: 'wedding8', icon: HeartHandshake, href: '/galeri' },
  { name: 'Acara Keluarga', photo: 'dinner', icon: CalendarDays, href: '/pemesanan' },
  { name: 'Acara Instansi', photo: 'wedding19', icon: BriefcaseBusiness, href: '/pemesanan' },
  { name: 'Cooking Class', photo: 'chef', icon: ChefHat, href: '/menu' },
] satisfies { name: string; photo: Photo; icon: typeof ChefHat; href: string }[];

export default function RoyalEvents() {
  return (
    <section className="royal-events">
      <div className="royal-wrap royal-events-grid">
        <div className="royal-events-copy">
          <span className="royal-kicker">LAYANAN KAMI</span>
          <h2>
            Catering untuk
            <br />
            <em>Berbagai Acara</em>
          </h2>
          <p>
            Dari acara pernikahan hingga kegiatan instansi, kami siap menyediakan catering sesuai
            kebutuhan Anda.
          </p>
        </div>
        <div className="royal-event-cards">
          {events.map(({ name, photo, icon: Icon, href }) => (
            <Link key={name} href={href} className="royal-event-card">
              <div className="royal-card-photo">
                <OfficialPhoto photo={photo} alt={name} />
              </div>
              <span className="royal-event-label">
                <Icon size={26} />
                <strong>{name}</strong>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
