import style from '../../css/Footer/footer.module.css';
import { Link as Scroll } from 'react-scroll';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="bg-[#343A62] flex-col justify-between text-[#fff] min-h-[200px] flex mt-[60px] py-[10px]">
      <div className={style.wrapper}>
        <div>Logo</div>
        <nav className={style.nav}>
          <ul className="flex gap-[30px]">
            <li className="text-[14px] cursor-pointer hover:text-blue transition">
              <Link to="/">Главная</Link>
            </li>
            <li className="text-[14px] cursor-pointer hover:text-blue transition">
              <Link to="/catalog">Продукция</Link>
            </li>
            <li className="text-[14px] cursor-pointer hover:text-blue transition">Услуги</li>
            <li className="text-[14px] cursor-pointer hover:text-blue transition">
              Выполненные объекты
            </li>
            <li className="text-[14px] cursor-pointer hover:text-blue transition">
              <Link to="/#news">
                <Scroll to="news" spy={true} smooth={true} duration={500}>
                  Новости
                </Scroll>
              </Link>
            </li>
          </ul>
        </nav>
        <button>
          <Scroll to="header" spy={true} smooth={true} duration={500}>
            <svg
              width="17"
              height="21"
              viewBox="0 0 17 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M8.37705 1L1 9.26667M8.37705 1L16 9.26667M8.37705 1V21" stroke="white" />
            </svg>
          </Scroll>
        </button>
        <ul className="flex flex-col gap-[5px]">
          <li className="font-bold"><a href='tel:8 (343) 345-94-84'>8 (343) 345-94-84</a></li>
          <li className="text-[14px]">г. Екатеринбург, ул. Татищева, 53</li>
          <li className="text-[14px]">e-mail: info@uralpromzentr.com    </li>
        </ul>
      </div>
      <p className="text-center text-[10px] mt-[15px]">
          © {new Date().getFullYear()} Уральский промышленный центр. <br /> Все права защищены.
      </p>
    </footer>
  );
};

export default Footer;
