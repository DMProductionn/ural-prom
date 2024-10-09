import style from '../../css/Header/header.module.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as Scroll, Element } from 'react-scroll';
import SearchProduct from '../../../widgets/SearchProduct';

const Header = () => {
  const [active, setActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();


  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    if (window.screen.width <= 860) {
      setOpenNav(true);
    }
  }, [active]);

  const handleClick = () => {
    setActive(false);
  };

  return (
    <>
      <Element name="header"></Element>
      <header className="max-w-[1200px] w-full px-[15px] mx-auto flex justify-between items-center mt-[40px] h-[40px] mb-[60px] relative">
        <div className={style.burger_wrapper}>
          <nav
            onClick={() => setActive(!active)}
            className={
              active ? `${style.burger_nav} ${style.burger_active}` : `${style.burger_nav}`
            }>
            <span></span>
            <span></span>
            <span></span>
          </nav>
        </div>
        <div
          className={
            active ? `${style.burger_aside} ${style.burger_aside_active}` : style.burger_aside
          }></div>
        <Link to='/'><img className='w-[250px]' src="/img/Logo/Logo.png" alt="logo" /></Link>
        <nav className={!openNav || active ? `${style.nav}` : `${style.nav_none}`}>
          <ul className="flex gap-[30px]">
            <li
              onClick={handleClick}
              className={
                location.pathname === '/'
                  ? 'text-[14px] cursor-pointer hover:text-blue transition text-blue'
                  : 'text-[14px] cursor-pointer hover:text-blue transition'
              }>
              <Link to="/">Главная</Link>
            </li>
            <li
              onClick={handleClick}
              className={
                location.pathname === '/catalog'
                  ? 'text-[14px] cursor-pointer hover:text-blue transition text-blue'
                  : 'text-[14px] cursor-pointer hover:text-blue transition'
              }>
              <Link to="/catalog">Продукция</Link>
            </li>
            <Scroll to="news" spy={true} smooth={true} duration={500}>
              <Link to="/#news">
                <li
                  onClick={handleClick}
                  className="text-[14px] cursor-pointer hover:text-blue transition ">
                  Новости
                </li>
              </Link>
            </Scroll>
          </ul>
        </nav>
        <div className='flex items-center gap-[15px]'>
          <SearchProduct />
          <a href='tel:8 (343) 345-94-84' className="font-bold w-full">8 (343) 345-94-84</a>
        </div>
      </header>
    </>
  );
};

export default Header;
