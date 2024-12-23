'use client';
import { cva } from 'class-variance-authority';
import s from './about-section.module.scss';
import { useEffect, useRef, useState } from 'react';
import CardCta from '@/components/card/card-cta';

const articles = [
  {
    imageSrc: '/article-image/bath.jpg',
    imageAlt: 'about image',
    title: 'The Best Location',
    text: 'Nestled in the heart of Curacao, our residence provides the perfect escape from the hustle and bustle of everyday life. Enjoy breathtaking views, world-class amenities, and unparalleled service.',
    buttonText: 'Explore location',
  },
  {
    imageSrc: '/article-image/dinning.jpg',
    imageAlt: 'about image',
    title: 'Luxurious Accommodations',
    text: 'Experience the epitome of luxury with our elegantly designed accommodations. Each room is meticulously crafted to provide the utmost comfort and style.',
    buttonText: 'Explore accommodations',
  },
  {
    imageSrc: '/article-image/front-view.jpg',
    imageAlt: 'about image',
    title: 'World-Class Amenities',
    text: 'Indulge in our world-class amenities, including a state-of-the-art fitness center, spa, and gourmet dining options. Every detail is designed to enhance your stay.',
    buttonText: 'See amenities',
  },
  // {
  //   imageSrc: '/article-image/outdoor.jpg',
  //   imageAlt: 'about image',
  //   title: 'Unparalleled Service',
  //   text: 'Our dedicated staff is committed to providing unparalleled service, ensuring that your every need is met with the highest level of care and attention.',
  // },
  // {
  //   imageSrc: '/about/about-5.jpg',
  //   imageAlt: 'about image',
  //   title: 'Breathtaking Views',
  //   text: 'Enjoy breathtaking views of the Caribbean Sea from the comfort of your room. Our prime location offers stunning vistas that will leave you in awe.',
  // },
];

const aboutSection = cva([s.aboutSection, 'base-grid']);

export function useScrollAnimation() {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once animation is triggered, we can disconnect the observer
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { elementRef, isVisible };
}

export default function AboutSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className={`${aboutSection()} ${isVisible ? s.animate : s.hidden}`}>
      <h2 className={s.aboutHeading}>
        What we <span>offer</span>
      </h2>
      {/* <p className={s.aboutText}>
        Serenity Residence Curacao offers a unique blend of luxury and tranquility. Nestled in the heart of Curacao, our
        residence provides the perfect escape from the hustle and bustle of everyday life. Enjoy breathtaking views,
        world-class amenities, and unparalleled service.
      </p> */}

      <div className={s.articleBox}>
        {articles.map((article, index) => (
          <CardCta key={index} article={article} />
        ))}
      </div>
    </section>
  );
}
