import { Award, Utensils, Leaf, ShieldCheck, Clock, Headphones } from 'lucide-react';
import Heading from './Heading';
import OfficialPhoto from './OfficialPhoto';

const reasons = [
  {
    title: 'Harga Bersaing',
    description: 'Kualitas hidangan dan layanan tetap diutamakan.',
    icon: Award,
  },
  {
    title: 'Masakan Enak & Sehat',
    description: 'Bahan alami pilihan dan pengolahan yang higienis.',
    icon: Leaf,
  },
  {
    title: 'Pelayanan Profesional',
    description: 'Tim siap membantu kebutuhan catering Anda.',
    icon: Headphones,
  },
  {
    title: 'Pilihan Lengkap',
    description: 'Menu untuk pernikahan, acara dan kebutuhan harian.',
    icon: Utensils,
  },
  {
    title: 'Tim Berpengalaman',
    description: 'Pengolahan makanan oleh tim kuliner berpengalaman.',
    icon: ShieldCheck,
  },
  {
    title: 'Pengiriman Tepat Waktu',
    description: 'Pengiriman disesuaikan dengan jadwal acara.',
    icon: Clock,
  },
];

export default function WhyChoose() {
  return (
    <section className="ed-reasons">
      <div className="ed-reasons-photo">
        <OfficialPhoto photo="buffet" alt="Dokumentasi prasmanan Elbirru" />
      </div>
      <div className="ed-reasons-inner">
        <Heading title="Alasan Memilih" accent="ELBIRRU Catering" />
        <div className="ed-reason-grid">
          {reasons.map(({ title, description, icon: Icon }) => (
            <article key={title}>
              <span className="ed-reason-icon">
                <Icon size={25} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
