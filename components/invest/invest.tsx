import s from './invest.module.scss';

const images = [
  // There are 9 normal images, 3 horizontal images, 3 vertical images, and 3 big images in the list.
  { src: '/invest-image/house-normal.jpg', alt: 'Normal Image 1', className: '' },
  { src: '/invest-image/house-vertical1.jpg', alt: 'Vertical Image 1', className: s.vertical },
  { src: '/invest-image/house-horizontal1.jpg', alt: 'Horizontal Image 1', className: s.horizontal },
  { src: '/invest-image/house-normal1.jpg', alt: 'Normal Image 2', className: '' },
  { src: '/invest-image/house-normal2.jpg', alt: 'Normal Image 3', className: '' },
  { src: '/invest-image/house-big1.jpg', alt: 'Big Image 1', className: s.big },
  { src: '/invest-image/house-normal3.jpg', alt: 'Normal Image 4', className: '' },
  { src: '/invest-image/house-vertical2.jpg', alt: 'Vertical Image 2', className: s.vertical },
  { src: '/invest-image/house-normal5.jpg', alt: 'Normal Image 5', className: '' },
  { src: '/invest-image/house-horizontal2.jpg', alt: 'Horizontal Image 2', className: s.horizontal },
  { src: '/invest-image/house-big2.jpg', alt: 'Big Image 2', className: s.big },
  { src: '/invest-image/house-normal6.jpg', alt: 'Normal Image 7', className: '' },
  { src: '/invest-image/house-horizontal3.jpg', alt: 'Horizontal Image 3', className: s.horizontal },
  { src: '/invest-image/house-normal8.jpg', alt: 'Normal Image 8', className: '' },
  { src: '/invest-image/house-big3.jpg', alt: 'Big Image 3', className: s.big },
  { src: '/invest-image/house-normal9.jpg', alt: 'Normal Image 9', className: '' },
  { src: '/invest-image/house-vertical3.jpg', alt: 'Vertical Image 3', className: s.vertical },
];

export default function Invest() {
  return (
    <section className={s.invest}>
      <div className={s.investContent}>
        <h2>
          Invest in our
          <span>New Developments</span>
        </h2>
        <p>
          Our new developments are designed to provide you with the ultimate luxury experience. Each villa is built to
          the highest standards, with attention to detail and a focus on sustainability.
        </p>
        <a className={s.investButton} href="/invest">
          Explore our developments
        </a>
      </div>

      <div className={s.investImageGrid}>
        {images.map((image, index) => (
          <div key={index} className={image.className}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
