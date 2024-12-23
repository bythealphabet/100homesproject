import Image from 'next/image';
import s from './card-cta.module.scss';

export default function CardCta({
  article,
}: {
  article: { imageSrc: string; imageAlt: string; title: string; text: string };
}) {
  return (
    <article className={s.article}>
      <figure className={s.articleImageBox}>
        <Image className={s.articleImage} src={article.imageSrc} alt={article.imageAlt} width={1000} height={1000} />
      </figure>
      <h3 className={s.articleTitle}>{article.title}</h3>
      <p className={s.articleText}>{article.text}</p>
      <button className={s.articleButton}>Learn More</button>
    </article>
  );
}