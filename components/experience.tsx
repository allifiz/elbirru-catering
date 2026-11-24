'use client';
import { useState, useEffect, useMemo, type FormEvent } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Search,
  Check,
  CalendarDays,
  Users,
  MapPin,
  Instagram,
  Phone,
  Mail,
  Copy,
  ChevronDown,
  Utensils,
  Heart,
  Building2,
  PartyPopper,
} from 'lucide-react';
import Link from 'next/link';
import EditorialHome from './editorial/EditorialHome';
import {
  catalog,
  packages,
  money,
  photoUrl,
  stockUrl,
  type Photo,
  type Item,
} from '../data/catalog';

const nav = [
  ['Beranda', '/'],
  ['Layanan', '/menu'],
  ['Portofolio', '/galeri'],
  ['Testimoni', '/#testimoni'],
  ['Tentang Kami', '/tentang'],
  ['Kontak', '/kontak'],
];
const categories = ['Semua', 'Acara besar', 'Paket praktis', 'Tradisional', 'Pengalaman'];
const occasions = [
  { name: 'Pernikahan', desc: 'Merayakan awal cerita baru.', icon: Heart },
  { name: 'Korporat', desc: 'Profesional dalam setiap detail.', icon: Building2 },
  { name: 'Keluarga', desc: 'Hangatnya momen kebersamaan.', icon: PartyPopper },
];
function PhotoView({
  photo,
  alt,
  priority = false,
}: {
  photo: Photo;
  alt: string;
  priority?: boolean;
}) {
  const [stage, setStage] = useState(0);
  useEffect(() => setStage(0), [photo]);
  return (
    <img
      src={
        stage === 0 ? photoUrl(photo) : stage === 1 ? stockUrl(photo) : '/images/unavailable.svg'
      }
      onError={() => setStage((s) => Math.min(s + 1, 2))}
      alt={stage === 2 ? 'Foto resmi belum tersedia' : alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}
function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-45px' }}
      transition={{ duration: 0.65 }}
    >
      {children}
    </motion.div>
  );
}
function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Elbirru Catering beranda">
      <img
        src="/images/official/logo.png"
        onError={(e) => {
          if (!e.currentTarget.src.endsWith('/images/logo-upload.png'))
            e.currentTarget.src = '/images/logo-upload.png';
        }}
        alt="Elbirru Catering"
        width="150"
        height="103"
      />
    </Link>
  );
}
function SectionHead({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="section-head">
      <span className="eyebrow">{kicker}</span>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
}
function Catalog({ full = false, onSelect }: { full?: boolean; onSelect: (item: Item) => void }) {
  const [cat, setCat] = useState('Semua');
  const [query, setQuery] = useState('');
  const items = useMemo(
    () =>
      catalog.filter(
        (i) =>
          (cat === 'Semua' || i.category === cat) &&
          (i.name + ' ' + i.description).toLowerCase().includes(query.toLowerCase().trim()),
      ),
    [cat, query],
  );
  return (
    <section className="section catalog" id="menu">
      <div className="wrap">
        <Reveal>
          <div className="section-row">
            <SectionHead
              kicker="MENU & LAYANAN"
              title="Pilihan menu catering"
              desc="Pilih layanan sesuai jenis acara, jumlah tamu, dan kebutuhan Anda."
            />
            {!full && (
              <Link href="/menu" className="text-link">
                Lihat seluruh menu <ArrowUpRight size={18} />
              </Link>
            )}
          </div>
          <div className="filters">
            <div className="chips">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={cat === c ? 'active' : ''}
                  aria-pressed={cat === c}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="search">
              <Search size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari sajian..."
                aria-label="Cari sajian"
              />
            </label>
          </div>
        </Reveal>
        <div className="menu-grid">
          {(full || cat !== 'Semua' || query ? items : items.slice(0, 6)).map((i, n) => (
            <Reveal key={i.name}>
              <button className="food-card" onClick={() => onSelect(i)}>
                <div className="food-img">
                  <PhotoView photo={i.photo} alt={'Foto ' + i.name} />
                  <span className="food-index">0{n + 1}</span>
                  <span className="food-arrow">
                    <ArrowUpRight size={21} />
                  </span>
                </div>
                <div className="food-info">
                  <span className="eyebrow">{i.category}</span>
                  <h3>{i.name}</h3>
                  <p>{i.description}</p>
                  <div className="price">
                    Mulai {money(i.price)} <small>/ {i.unit}</small>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
        {items.length === 0 && (
          <p className="empty">Sajian tidak ditemukan. Coba kata kunci lainnya.</p>
        )}
        <p className="fineprint">
          Foto produk bersumber dari website Elbirru; harga dan rincian paket masih simulasi.
        </p>
      </div>
    </section>
  );
}
function Packages() {
  return (
    <section className="section packages" id="paket">
      <div className="wrap">
        <Reveal>
          <SectionHead
            kicker="PAKET PRASMANAN"
            title="Paket untuk setiap kebutuhan"
            desc="Empat konsep prasmanan untuk berbagai suasana dan kebutuhan."
          />
        </Reveal>
        <div className="package-grid">
          {packages.map((p, i) => (
            <Reveal key={p.name}>
              <article className={'package ' + (i === 3 ? 'featured' : '')}>
                <span className="eyebrow">{i === 3 ? 'SIGNATURE' : 'PAKET 0' + (i + 1)}</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="package-price">
                  {money(p.price)}
                  <small> / orang</small>
                </div>
                <ul>
                  {p.items.map((x) => (
                    <li key={x}>
                      <Check size={16} />
                      {x}
                    </li>
                  ))}
                </ul>
                <Link href={'/pemesanan?paket=' + p.name} className="button outline">
                  Pilih paket <ArrowRight size={17} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="fineprint">Contoh paket dan harga, bukan penawaran resmi.</p>
      </div>
    </section>
  );
}
function Planner() {
  const [event, setEvent] = useState('Pernikahan');
  const [date, setDate] = useState('');
  const [people, setPeople] = useState('100');
  const [pkg, setPkg] = useState('NYUNDA');
  const [place, setPlace] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState('');
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('paket');
    if (packages.some((x) => x.name === p)) setPkg(p!);
  }, []);
  const selected = packages.find((p) => p.name === pkg) || packages[1];
  const count = Math.min(100000, Math.max(0, Math.floor(Number(people) || 0)));
  const total = count * selected.price;
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResult(
      [
        'Halo Elbirru Catering, saya ingin konsultasi (simulasi preview).',
        'Jenis acara: ' + event,
        'Tanggal: ' + date,
        'Jumlah tamu: ' + count,
        'Paket: ' + pkg,
        'Lokasi: ' + place,
        'Catatan: ' + (notes || '-'),
        'Estimasi ilustrasi: ' + money(total),
      ].join('\n'),
    );
    setCopied(false);
  }
  return (
    <section className="section planner" id="pemesanan">
      <div className="wrap planner-grid">
        <Reveal>
          <span className="eyebrow">SIMULASI PEMESANAN</span>
          <h2>
            Hitung kebutuhan
            <br /> catering Anda.
          </h2>
          <p>
            Bayangkan acara Anda, pilih sajian yang sesuai, dan dapatkan gambaran biaya dalam
            beberapa langkah.
          </p>
          <div className="planner-benefits">
            <span>
              <CalendarDays /> Fleksibel untuk berbagai acara
            </span>
            <span>
              <Users /> Sesuaikan jumlah tamu
            </span>
            <span>
              <Utensils /> Pilihan paket sesuai kebutuhan
            </span>
          </div>
        </Reveal>
        <Reveal className="form-card">
          <form onSubmit={submit}>
            <div className="form-title">
              <h3>Catering Planner</h3>
              <span>SIMULASI</span>
            </div>
            <div className="form-grid">
              <label>
                Jenis acara
                <select value={event} onChange={(e) => setEvent(e.target.value)}>
                  {[
                    'Pernikahan',
                    'Rapat / Seminar',
                    'Syukuran',
                    'Ulang tahun',
                    'Gathering',
                    'Lainnya',
                  ].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </label>
              <label>
                Tanggal acara
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
              <label>
                Jumlah tamu
                <input
                  type="number"
                  required
                  min="1"
                  max="100000"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                />
              </label>
              <label>
                Paket pilihan
                <select value={pkg} onChange={(e) => setPkg(e.target.value)}>
                  {packages.map((x) => (
                    <option key={x.name}>{x.name}</option>
                  ))}
                </select>
              </label>
              <label className="full">
                Lokasi acara
                <input
                  required
                  placeholder="Contoh: Tarogong Kidul, Garut"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                />
              </label>
              <label className="full">
                Catatan tambahan
                <textarea
                  placeholder="Kebutuhan khusus, preferensi menu..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                />
              </label>
            </div>
            <div className="estimate">
              <div>
                <small>Estimasi ilustratif</small>
                <strong>{money(total)}</strong>
              </div>
              <span>
                {count} tamu × {money(selected.price)}
              </span>
            </div>
            <button className="button gold full-button" type="submit">
              Buat simulasi penawaran <ArrowRight size={19} />
            </button>
            <p className="fineprint">
              Tidak termasuk biaya tambahan. Tidak ada pesanan atau pesan yang dikirim otomatis.
            </p>
          </form>
          {result && (
            <div className="result" role="status">
              <h4>Rangkuman kebutuhan</h4>
              <pre>{result}</pre>
              <button
                className="button outline"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(result);
                    setCopied(true);
                  } catch {
                    setCopied(false);
                  }
                }}
              >
                <Copy size={16} />
                {copied ? 'Tersalin' : 'Salin pesan'}
              </button>
              <a
                className="text-link"
                href={'https://wa.me/6281312544313?text=' + encodeURIComponent(result)}
                target="_blank"
                rel="noreferrer"
              >
                Buka draft WhatsApp <ArrowUpRight size={16} />
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
function Gallery({ full = false }: { full?: boolean }) {
  const [active, setActive] = useState<Photo | null>(null);
  const pictures: Photo[] = [
    'hero',
    'event',
    'wedding8',
    'wedding5',
    'wedding4',
    'wedding1',
    'wedding2',
    'wedding7',
    'wedding3',
    'wedding25',
    'wedding19',
    'wedding27',
  ];
  return (
    <section className="section gallery" id="portofolio">
      <div className="wrap">
        <div className="section-row">
          <SectionHead
            kicker="DOKUMENTASI ELBIRRU"
            title="Portofolio ELBIRRU Catering"
            desc="Dokumentasi pernikahan dari portofolio resmi Elbirru Catering."
          />
          {!full && (
            <Link href="/galeri" className="text-link">
              Lihat semua portofolio <ArrowUpRight size={18} />
            </Link>
          )}
        </div>
        <div className="gallery-grid">
          {(full ? pictures : pictures.slice(0, 5)).map((photo, i) => (
            <button key={photo} onClick={() => setActive(photo)} className="gallery-item">
              <PhotoView photo={photo} alt={'Portofolio pernikahan Elbirru ' + (i + 1)} />
              <span>
                Dokumentasi {i + 1}
                <ArrowUpRight size={17} />
              </span>
            </button>
          ))}
        </div>
        <p className="fineprint">
          Sumber:{' '}
          <a
            href="https://elbirrucatering.com/portofolio-wedding/"
            target="_blank"
            rel="noreferrer"
          >
            Portofolio wedding Elbirru Catering
          </a>{' '}
          ·{' '}
          <a href="https://elbirrucatering.com/portofolio-event/" target="_blank" rel="noreferrer">
            Portofolio event resmi
          </a>
        </p>
      </div>
      {active && (
        <Dialog close={() => setActive(null)}>
          <div className="lightbox">
            <PhotoView photo={active} alt="Dokumentasi Elbirru Catering" />
          </div>
        </Dialog>
      )}
    </section>
  );
}
function Testimonials() {
  const reviews = [
    {
      name: 'UPT Puskesmas Pembangunan',
      handle: 'uptpuskesmaspembangunan',
      initial: 'UP',
      text: 'Pelayanan yang baik sejak pemesanan hingga makanan sampai di lokasi.',
    },
    {
      name: 'FISIP UNIGA',
      handle: 'fisipuniga',
      initial: 'FU',
      text: 'Menu beragam, penyajian rapi, bersih, dan menarik. Menjadi pelanggan langganan.',
    },
    {
      name: 'dr. Wilden',
      handle: 'firdauswilden',
      initial: 'DW',
      text: 'Harga terjangkau dengan rasa memuaskan; turut melengkapi acara pelanggan.',
    },
  ];
  return (
    <section className="section testimonials" id="testimoni">
      <div className="wrap">
        <SectionHead
          kicker="KEPERCAYAAN PELANGGAN"
          title="Testimoni Klien ELBIRRU Catering"
          desc="Pengalaman pelanggan yang dipublikasikan di website resmi Elbirru."
        />
        <div className="testimonial-grid">
          {reviews.map((r) => (
            <article className="testimonial" key={r.handle}>
              <span className="review-label">RINGKASAN ULASAN</span>
              <p>{r.text}</p>
              <div className="review-person">
                <span className="review-avatar">{r.initial}</span>
                <div>
                  <strong>{r.name}</strong>
                  <small>@{r.handle}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
        <a
          className="text-link"
          href="https://elbirrucatering.com/#"
          target="_blank"
          rel="noreferrer"
        >
          Baca testimoni asli <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
function About() {
  return (
    <section className="section about">
      <div className="wrap about-grid">
        <Reveal className="about-photo">
          <PhotoView photo="chef" alt="Dokumentasi Cooking Class Elbirru" />
          <span className="photo-note">ELBIRRU CATERING</span>
        </Reveal>
        <Reveal>
          <span className="eyebrow">TENTANG KAMI</span>
          <h2>Catering profesional dari Garut.</h2>
          <p>
            Elbirru Catering hadir dari Garut dengan beragam pilihan layanan kuliner, dari nasi
            kotak, prasmanan, sajian tradisional, hingga acara formal.
          </p>
          <p>
            Setiap perayaan memiliki cerita yang berbeda. Temukan konsep sajian yang sesuai untuk
            keluarga, komunitas, maupun kebutuhan perusahaan Anda.
          </p>
          <div className="occasion-list">
            {occasions.map((o) => (
              <div key={o.name}>
                <o.icon size={22} />
                <div>
                  <strong>{o.name}</strong>
                  <small>{o.desc}</small>
                </div>
              </div>
            ))}
          </div>
          <Link href="/pemesanan" className="text-link">
            Rencanakan momen Anda <ArrowRight size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
function Dialog({ children, close }: { children: React.ReactNode; close: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', fn);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', fn);
      document.body.style.overflow = prev;
    };
  }, [close]);
  return (
    <div className="modal-backdrop" onClick={close}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label="Detail sajian"
        onClick={(e) => e.stopPropagation()}
      >
        <button autoFocus className="modal-close" onClick={close} aria-label="Tutup">
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <Brand />
          <p>
            Catering & layanan acara.
            <br />
            Garut, Jawa Barat.
          </p>
        </div>
        <div>
          <h4>Jelajahi</h4>
          {nav.slice(1).map(([label, path]) => (
            <Link key={path} href={path}>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <h4>Hubungi</h4>
          <a href="https://wa.me/6281312544313" target="_blank" rel="noreferrer">
            <Phone size={15} /> 0813-1254-4313
          </a>
          <a href="mailto:elbirrucatering@gmail.com">
            <Mail size={15} /> elbirrucatering@gmail.com
          </a>
          <a href="https://www.instagram.com/elbirrucatering/" target="_blank" rel="noreferrer">
            <Instagram size={15} /> @elbirrucatering
          </a>
        </div>
        <div>
          <h4>Kunjungi</h4>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Elbirru+Catering+Garut"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={16} /> Jl. Guntur Indah No. 3, Tarogong Kidul, Garut
          </a>
          <a href="https://elbirrucatering.com/" target="_blank" rel="noreferrer">
            Website resmi <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>
          Konsep desain oleh <a href="https://sangkarakarya.my.id/">SangkaraKarya</a>
        </span>
        <span>Preview independen • Bukan website resmi Elbirru</span>
      </div>
    </footer>
  );
}
export default function Experience({ initialSection = '' }: { initialSection?: string }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Item | null>(null);
  const home = !initialSection;
  return (
    <div className="editorial-site">
      <div className="preview-bar">
        DESIGN PREVIEW 02 <span>•</span> Konsep website Elbirru Catering <span>•</span> Harga
        simulasi
      </div>
      <header>
        <div className="wrap nav">
          <Brand />
          <button
            className="mobile-toggle"
            aria-expanded={open}
            aria-label="Menu navigasi"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav className={open ? 'open' : ''}>
            {nav.map(([label, path]) => (
              <Link
                key={path}
                className={(home && path === '/') || path === '/' + initialSection ? 'current' : ''}
                href={path}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <a
            className="button nav-cta"
            href="https://wa.me/6281312544313"
            target="_blank"
            rel="noreferrer"
          >
            <Phone size={17} /> Pesan via WhatsApp
          </a>
        </div>
      </header>
      <main>
        {home ? (
          <>
            <EditorialHome onSelect={setSelected} />
          </>
        ) : (
          <>
            <div className="page-intro">
              <div className="wrap">
                <Link href="/" className="breadcrumb">
                  Beranda /
                </Link>
                <span> {initialSection.charAt(0).toUpperCase() + initialSection.slice(1)}</span>
              </div>
            </div>
            {initialSection === 'menu' && <Catalog full onSelect={setSelected} />}{' '}
            {initialSection === 'paket' && <Packages />}
            {initialSection === 'pemesanan' && <Planner />}
            {initialSection === 'galeri' && <Gallery full />}
            {initialSection === 'tentang' && (
              <>
                <About />
                <Testimonials />
              </>
            )}
            {initialSection === 'kontak' && <Planner />}
          </>
        )}
      </main>
      <Footer />
      <AnimatePresence>
        {selected && (
          <Dialog close={() => setSelected(null)}>
            <div className="detail-photo">
              <PhotoView photo={selected.photo} alt={'Foto ' + selected.name} />
            </div>
            <div className="detail-body">
              <span className="eyebrow">{selected.category}</span>
              <h2>{selected.name}</h2>
              <p>{selected.description}</p>
              <strong>
                {money(selected.price)} / {selected.unit}
              </strong>
              <p className="fineprint">Harga simulasi. Foto dari website Elbirru.</p>
              <Link href="/pemesanan" className="button gold">
                Rencanakan acara <ArrowRight size={17} />
              </Link>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
      <Link href="/pemesanan" className="floating" aria-label="Buka Catering Planner">
        <CalendarDays size={22} />
        <span>Rencanakan acara</span>
      </Link>
    </div>
  );
}
