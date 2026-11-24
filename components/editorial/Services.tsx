import { catalog, type Item } from '../../data/catalog';
import Heading from './Heading';
import OfficialPhoto from './OfficialPhoto';

export default function Services({ onSelect }: { onSelect: (item: Item) => void }) {
  return (
    <section id="menu" className="ed-services">
      <div className="ed-container">
        <Heading title="Layanan Utama" accent="ELBIRRU Catering" description="Berbagai pilihan paket catering untuk kebutuhan acara Anda di Garut." />
        <div className="ed-service-grid">
          {catalog.map((item) => (
            <button className="ed-service" key={item.name} onClick={() => onSelect(item)}>
              <div className="ed-service-photo"><OfficialPhoto photo={item.photo} alt={item.name} /></div>
              <span>{item.name === 'Catering Prasmanan' ? 'Catering Prasmanan / Buffet' : item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
