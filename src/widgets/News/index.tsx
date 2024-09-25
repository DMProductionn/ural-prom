import ReactPaginate from 'react-paginate';
import style from '../../app/css/Home/news.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll';
import useGetNews from '../../app/hooks/News/useGetNews';
import { INews } from '../../app/types/news.type.';


const News = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const newsPerPage = 3; 
  const navigate = useNavigate();

  const { data: dataNews } = useGetNews();

  const indexOfLastNews = (currentPage + 1) * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = dataNews?.slice(indexOfFirstNews, indexOfLastNews);
  const totalNewsCount = dataNews?.length || 0;

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const handleNews = ({newsItem}: any) => {
    localStorage.setItem('news', JSON.stringify(newsItem));
  }
  

  return (
    <Element name="news" id='news'>
      <h3 className="text-[30px] text-center font-black">Новости</h3>
      <section id='news' className={style.news}>
        {currentNews?.map((newsItem: INews) => (
          <div onClick={() => handleNews({newsItem})} key={newsItem.id} className="w-full max-w-[340px]">
            <div
              onClick={() => navigate(`/news/${newsItem.id}`)}
              className="w-full max-w-[340px] h-[260px] rounded-[8px] overflow-hidden relative cursor-pointer">
              <img className="w-full h-full object-cover" src='./img/others/test.jpg' alt="news" />
              <p className={style.date}>{newsItem.created_at}</p>
            </div>
            <p className="font-[600] mt-[10px] text-[18px]">{newsItem.name}</p>
            <div className={`${style.text__desc_block} break-words`}>
              <p className="text-[#5A5A5A] text-[14px]">{newsItem.title}</p>
            </div>
          </div>
        ))}
      </section>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={Math.ceil(totalNewsCount / newsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={style.pagination}
        pageClassName={style.page_item}
        pageLinkClassName={style.page_link}
        previousClassName={style.page_item}
        previousLinkClassName={style.page_link}
        nextClassName={style.page_item}
        nextLinkClassName={style.page_link}
        breakClassName={style.page_item}
        breakLinkClassName={style.page_link}
        activeClassName={style.active}
      />
    </Element>
  );
};

export default News;
