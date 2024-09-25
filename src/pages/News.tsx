import { Helmet } from 'react-helmet';
import style from '../app/css/Home/news.module.css';
const News = () => {
  const news = localStorage.getItem('news');
  const newsItem = JSON.parse(news || '{}');

  return (
    <>
      <section className={style.section_news_title}>
        <div className="max-w-[650px] w-full overflow-auto break-words">
          <div className="relative">
            <h1 className="text-[30px] font-black">{newsItem?.name}</h1>
            <p className="mb-[10px] font-[600]">{newsItem?.created_at}</p>
          </div>
          <p>{newsItem?.text}</p>
        </div>
        <div className="flex justify-center">
          <img className={style.news_img} src="/img/others/test.jpg" alt="news" />
        </div>
      </section>
      <Helmet>
        <title>{newsItem?.name}</title>
        <meta name='description' content={newsItem?.text}/>
      </Helmet>
    </>
  );
};

export default News;
