import s from './page.module.scss';
import { cva } from 'class-variance-authority';
import Hero from '@/components/header/hero/hero';
import AboutSection from '@/components/header/about-section/about-section';

const main = cva([, s.main, 'base-grid']);

export default function Home() {
  return (
    <main className={main()}>
      <Hero />
      <AboutSection />
    </main>
  );
}
