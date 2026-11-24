'use client';

import { useState } from 'react';
import { Check, ChevronLeft, ChevronRight, GraduationCap, Hospital, UserRound } from 'lucide-react';

const reviews = [
  {
    name: 'UPT Puskesmas Pembangunan',
    icon: Hospital,
    color: '#287444',
    text: 'Pelayanan yang baik sejak pemesanan hingga hidangan tiba di lokasi.',
  },
  {
    name: 'FISIP UNIGA',
    icon: GraduationCap,
    color: '#164c83',
    text: 'Pilihan makanan beragam, penyajian bersih dan rapi. Menjadi pelanggan langganan.',
  },
  {
    name: 'dr. Wilden',
    icon: UserRound,
    color: '#15345d',
    text: 'Harga terjangkau, rasa memuaskan, dan pengalaman acara yang menyenangkan.',
  },
];

const reasons = [
  'Berpengalaman dan Terpercaya',
  'Menu Variatif dan Lezat',
  'Bahan Pilihan dan Sehat',
  'Proses Masak Higienis',
];

export default function RoyalTrust() {
  const [offset, setOffset] = useState(0);
  const ordered = reviews.map((_, index) => reviews[(index + offset) % reviews.length]);
  return (
    <section className="royal-trust" id="testimoni">
      <div className="royal-wrap royal-trust-grid">
        <div className="royal-reasons">
          <h2>
            Mengapa Memilih
            <br />
            <em>Elbirru Catering?</em>
          </h2>
          <ul>
            {reasons.map((reason) => (
              <li key={reason}>
                <span>
                  <Check size={15} />
                </span>
                {reason}
              </li>
            ))}
          </ul>
        </div>
        <div className="royal-reviews">
          <div className="royal-reviews-head">
            <div>
              <h2>Testimoni Klien</h2>
              <p>Kepercayaan pelanggan menjadi semangat kami untuk memberikan yang terbaik.</p>
            </div>
            <div className="royal-review-controls">
              <button
                aria-label="Testimoni sebelumnya"
                onClick={() => setOffset((n) => (n + reviews.length - 1) % reviews.length)}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Testimoni berikutnya"
                onClick={() => setOffset((n) => (n + 1) % reviews.length)}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="royal-review-grid" aria-live="polite">
            {ordered.map(({ name, icon: Icon, color, text }) => (
              <article key={name} className="royal-review">
                <div className="royal-review-person">
                  <span style={{ color }}>
                    <Icon size={25} />
                  </span>
                  <strong>{name}</strong>
                </div>
                <span className="royal-review-mark" aria-hidden="true">
                  “
                </span>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="royal-review-source">
            Ringkasan testimoni dari{' '}
            <a href="https://elbirrucatering.com/" target="_blank" rel="noreferrer">
              website resmi Elbirru
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
