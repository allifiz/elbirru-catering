import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { catalog, type Item } from '../../data/catalog';
import OfficialPhoto from '../editorial/OfficialPhoto';

const featured = ['Catering Prasmanan', 'Nasi Kotak', 'Nasi Tumpeng', 'Nasi Kebuli', 'Snack Box'];

export default function RoyalMenu({ onSelect }: { onSelect: (item: Item) => void }) {
  const items = featured.map((name) => catalog.find((item) => item.name === name)!).filter(Boolean);
  return (
    <section className="royal-menu" id="menu">
      <div className="royal-wrap">
        <div className="royal-heading">
          <span className="royal-kicker">PILIHAN MENU FAVORIT</span>
          <h2>
            Menu Andalan <em>Elbirru Catering</em>
          </h2>
          <p>Berbagai pilihan menu yang lezat, bergizi, dan cocok untuk setiap acara Anda.</p>
        </div>
        <div className="royal-menu-grid">
          {items.map((item) => (
            <button key={item.name} className="royal-menu-card" onClick={() => onSelect(item)}>
              <div className="royal-card-photo">
                <OfficialPhoto photo={item.photo} alt={item.name} />
              </div>
              <span className="royal-card-label">
                <strong>
                  {item.name === 'Catering Prasmanan' ? 'Catering Prasmanan / Buffet' : item.name}
                </strong>
                <span className="royal-card-arrow">
                  <ArrowRight size={15} />
                </span>
              </span>
            </button>
          ))}
        </div>
        <div className="royal-center">
          <Link href="/menu" className="royal-outline">
            Lihat Semua Menu <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
