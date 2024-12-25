import s from './page.module.scss';
import { cva } from 'class-variance-authority';
import Hero from '@/components/hero/hero';
import AboutSection from '@/components/about-section/about-section';
import Cta from '@/components/cta/cta';
import Invest from '@/components/invest/invest';

const main = cva([, s.main, 'base-grid']);

export default function Home() {
  return (
    <main className={main()}>
      <Hero />
      <Cta />
      <AboutSection />
      <Invest />
    </main>
  );
}
