import { Award, Utensils, Leaf, ShieldCheck } from 'lucide-react';
import Heading from './Heading';
import OfficialPhoto from './OfficialPhoto';

const reasons = [
  {
    title: 'Berpengalaman dan Terpercaya',
    description: 'Melayani berbagai acara, dari keluarga hingga instansi.',
    icon: Award,
  },
  {
    title: 'Menu Variatif dan Lezat',
    description: 'Pilihan hidangan untuk pernikahan, acara dan kebutuhan harian.',
    icon: Utensils,
  },
  {
    title: 'Bahan Pilihan dan Sehat',
    description: 'Mengutamakan bahan alami dan kualitas hidangan.',
    icon: Leaf,
  },
  {
    title: 'Proses Masak Higienis',
    description: 'Pengolahan makanan dilakukan dengan memperhatikan kebersihan.',
    icon: ShieldCheck,
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
