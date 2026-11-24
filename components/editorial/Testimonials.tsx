import Heading from './Heading';

const reviews = [
  {
    name: 'UPT Puskesmas Pembangunan',
    handle: 'uptpuskesmaspembangunan',
    initials: 'UP',
    text: 'Pelayanan yang baik sejak pemesanan hingga hidangan tiba di lokasi.',
  },
  {
    name: 'FISIP UNIGA',
    handle: 'fisipuniga',
    initials: 'FU',
    text: 'Pilihan makanan beragam, penyajian bersih dan rapi. Menjadi pelanggan langganan.',
  },
  {
    name: 'dr. Wilden',
    handle: 'firdauswilden',
    initials: 'DW',
    text: 'Harga terjangkau, rasa memuaskan, dan pengalaman acara yang menyenangkan.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="ed-reviews">
      <div className="ed-container">
        <Heading
          title="Testimoni Klien"
          accent="ELBIRRU Catering"
          description="Kepercayaan pelanggan menjadi semangat kami untuk memberikan layanan terbaik."
        />
        <div className="ed-review-grid">
          {reviews.map((review) => (
            <article className="ed-review" key={review.handle}>
              <div className="ed-review-person">
                <span className="ed-initials">{review.initials}</span>
                <strong>{review.name}</strong>
              </div>
              <div className="ed-review-copy">
                <span aria-hidden="true" className="ed-quote">
                  “
                </span>
                <p>{review.text}</p>
                <small>@{review.handle}</small>
              </div>
            </article>
          ))}
        </div>
        <p className="ed-source">
          Ringkasan testimoni dari{' '}
          <a href="https://elbirrucatering.com/" target="_blank" rel="noreferrer">
            website resmi Elbirru
          </a>
          .
        </p>
      </div>
    </section>
  );
}
