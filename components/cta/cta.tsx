import Image from 'next/image';
import s from './cta.module.scss';

export default function Cta() {
  return (
    <section className={s.cta}>
      <figure className={s.figureCtaImage}>
        <Image
          className={s.ctaImage}
          src="https://www.balitecture.com/wp-content/uploads/2024/07/Dasa-Uluwatu-3-Bedroom-Banner-new-26-07-24.webp"
          alt="CTA Background"
          width={1920}
          height={1080}
        />
      </figure>
      <div className={s.ctaContent}>
        <h2 className={s.ctaHeading}>
          <span className={s.ctaHeadingSpan}>about</span>
          <span className={s.ctaSubHeadingSpan}>Serentiy Residence Curacao</span>
        </h2>
        <p className={s.ctaText}>
          Once upon a time, in a bustling city, there was a construction company known for building dreams. With every
          brick laid and every beam raised, they crafted homes that stood the test of time. Their legacy was not just in
          structures, but in the communities they nurtured and the futures they built.
        </p>
        <a href="/contact" className={s.ctaButton}>
          Contact Us
        </a>
      </div>
    </section>
  );
}
