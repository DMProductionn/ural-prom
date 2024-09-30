import { Helmet } from 'react-helmet';
import style from '../app/css/Home/news.module.css';
import useGetNewsDetail from '../app/hooks/News/useGetNewsDetail';
import { useParams } from 'react-router-dom';
const News = () => {
  const { newsId } = useParams();
  const id = Number(newsId);

  const { data: newsData } = useGetNewsDetail(id);

  return (
    <>
      <section className={style.section_news_title}>
        <div className="max-w-[650px] w-full overflow-auto break-words">
          <div className="relative">
            <h1 className="text-[30px] font-black">{newsData?.name}</h1>
            <p className="mb-[10px] font-[600]">{newsData?.created_at}</p>
          </div>
          <p>{newsData?.text}</p>
        </div>
        <div className="flex justify-center">
          <img className={style.news_img} src={newsData?.img} alt="news" />
        </div>
      </section>
      <Helmet>
        <title>{newsData?.name}</title>
        <meta name="description" content={newsData?.text} />
      </Helmet>
    </>
  );
};

export default News;
