'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import type { Photo } from '../../data/catalog';
import Heading from './Heading';
import OfficialPhoto from './OfficialPhoto';

const pictures: Photo[] = ['wedding8', 'wedding7', 'dinner', 'rice', 'box', 'wedding4'];

export default function Portfolio() {
  const [active, setActive] = useState<Photo | null>(null);

  useEffect(() => {
    if (!active) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [active]);

  return (
    <section className="ed-portfolio" id="portofolio">
      <div className="ed-container">
        <Heading
          title="Portofolio"
          accent="ELBIRRU Catering"
          description="Dokumentasi layanan catering Elbirru untuk berbagai momen istimewa."
        />
        <div className="ed-portfolio-action">
          <Link href="/galeri">
            Lihat Portofolio Lainnya <ArrowRight size={15} />
          </Link>
        </div>
        <div className="ed-portfolio-grid">
          {pictures.map((photo, index) => (
            <button
              key={photo}
              onClick={() => setActive(photo)}
              aria-label={'Buka dokumentasi ' + (index + 1)}
            >
              <OfficialPhoto photo={photo} alt={'Dokumentasi layanan Elbirru ' + (index + 1)} />
            </button>
          ))}
        </div>
        {active && (
          <div className="modal-backdrop" onClick={() => setActive(null)}>
            <div
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-label="Foto portofolio"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                autoFocus
                className="modal-close"
                onClick={() => setActive(null)}
                aria-label="Tutup"
              >
                <X />
              </button>
              <div className="lightbox">
                <OfficialPhoto photo={active} alt="Dokumentasi Elbirru" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
