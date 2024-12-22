import s from './page.module.scss';
import { cva } from 'class-variance-authority';
import Image from 'next/image';
const main = cva([, s.main, 'base-grid']);
const heroSection = cva([s.heroSection]);
const heroFigure = cva([s.heroFigure]);

export default function Home() {
  return (
    <main className={main()}>
      <section className={heroSection()}>
        <figure className={heroFigure()}>
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
            <h1>Serentiy Residence Curacao</h1>
            <p>Your peacefull getaway in Curacao awaits!</p>
            <button className={s.ctaButton}>Start your Dream</button>
          </div>
        </div>
      </section>
    </main>
  );
}
