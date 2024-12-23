import Image from 'next/image';
import s from './hero.module.scss';

export default function Hero() {
  return (
    <section className={s.heroSection}>
      <figure className={s.heroFigure}>
        <Image
          src="/hero-background/home-inside.jpg"
          className={s.heroImage}
          alt="hero image"
          width={1000}
          height={1000}
        />
      </figure>
      <div className={s.backgroundGradient}></div>
      <div className={s.heroText}>
        <div className={s.heroTextContent}>
          <h1 className={s.heroTextHeading}>
            <span className={s.heroTextTitle}>Serentiy Residence Curacao</span>
            <span className={s.heroTextSubtitle}>Your peacefull getaway in Curacao awaits!</span>
          </h1>
          <button className={s.ctaButton}>Start your Dream</button>
        </div>
      </div>
    </section>
  );
}
