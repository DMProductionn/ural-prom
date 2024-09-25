import { Helmet } from 'react-helmet';
import style from '../app/css/Home/home.module.css';
import SwitchCatalog from '../features/SwitchCatalog';
import News from '../widgets/News';
import Slider from '../widgets/Slider';

const Home = () => {
  return (
    <>
      <div className={style.home}>
        <h1 className={style.h1}>
          Производство и поставка запасных частей для конвейерного оборудования
        </h1>
        <SwitchCatalog />
      </div>
      <Slider />
      <News />
      <Helmet>
        <title>Уральский Промышленный Центр</title>
        <meta
          name="description"
          content="Уральский Промышленный Центр: ведущий центр промышленного производства и инновационных технологий в Урале. Узнайте больше о наших проектах и возможностях для бизнеса."
        />
      </Helmet>
    </>
  );
};

export default Home;
