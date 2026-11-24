import Link from 'next/link';
import { ArrowRight, ChevronRight, MessageCircle } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Photo } from '../../data/catalog';
import OfficialPhoto from './OfficialPhoto';
import WaveDivider from './WaveDivider';

const pages: Record<
  string,
  { label: string; title: string; accent: string; description: string; photo: Photo }
> = {
  menu: {
    label: 'Layanan',
    title: 'Pilihan Sajian',
    accent: 'untuk Setiap Acara',
    description:
      'Kenali beragam layanan Elbirru Catering, dari nasi kotak hingga prasmanan untuk hari istimewa.',
    photo: 'buffetDetail',
  },
  paket: {
    label: 'Paket',
    title: 'Paket Prasmanan',
    accent: 'Sesuai Kebutuhan',
    description: 'Temukan pilihan paket hidangan dan sesuaikan dengan kebutuhan acara Anda.',
    photo: 'heroBuffet',
  },
  galeri: {
    label: 'Portofolio',
    title: 'Cerita dari',
    accent: 'Setiap Perayaan',
    description:
      'Jelajahi dokumentasi resmi layanan dan pernikahan yang ditangani Elbirru Catering.',
    photo: 'wedding8',
  },
  tentang: {
    label: 'Tentang Kami',
    title: 'Mengenal Lebih Dekat',
    accent: 'ELBIRRU Catering',
    description:
      'Catering profesional dari Garut untuk pernikahan, keluarga, instansi, dan berbagai acara.',
    photo: 'wedding7',
  },
  pemesanan: {
    label: 'Pemesanan',
    title: 'Rencanakan',
    accent: 'Hari Istimewa Anda',
    description: 'Pilih kebutuhan catering dan dapatkan estimasi biaya melalui simulasi pemesanan.',
    photo: 'heroBuffet',
  },
  kontak: {
    label: 'Kontak',
    title: 'Mari Diskusikan',
    accent: 'Acara Anda',
    description: 'Hubungi tim Elbirru Catering untuk informasi menu, paket, dan kebutuhan acara.',
    photo: 'event',
  },
};

export default function InnerPage({ section, children }: { section: string; children: ReactNode }) {
  const page = pages[section];
  if (!page) return null;

  return (
    <div className={'ed-inner ed-inner--' + section}>
      <section className="ed-inner-hero">
        <div className="ed-inner-hero-photo">
          <OfficialPhoto photo={page.photo} alt="Dokumentasi Elbirru Catering" priority />
        </div>
        <div className="ed-inner-hero-shade" aria-hidden="true" />
        <div className="ed-inner-hero-content">
          <div className="ed-inner-breadcrumb">
            <Link href="/">Beranda</Link>
            <ChevronRight size={14} />
            <span>{page.label}</span>
          </div>
          <span className="ed-inner-kicker">ELBIRRU CATERING</span>
          <h1>
            {page.title}
            <br />
            <em>{page.accent}</em>
          </h1>
          <p>{page.description}</p>
        </div>
        <WaveDivider />
      </section>
      <div className="ed-inner-content">{children}</div>
      {section !== 'kontak' && (
        <section className="ed-inner-cta">
          <div className="wrap">
            <div>
              <span className="ed-inner-kicker">DISKUSIKAN KEBUTUHAN ANDA</span>
              <h2>
                Siap merencanakan <em>acara Anda?</em>
              </h2>
            </div>
            <a
              className="ed-button"
              href="https://wa.me/6281312544313"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> Hubungi Elbirru <ArrowRight size={17} />
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
