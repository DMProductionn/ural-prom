import { Helmet } from 'react-helmet';
import style from '../app/css/Catalog/Product/productPage.module.css';

const Product = () => {
  const product = localStorage.getItem('product');
  const name = JSON.parse(product || '{}').name;
  const img = JSON.parse(product || '{}').img;

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[20px]">
        <h1 className="text-[30px] font-black">{name}</h1>
        <div className={style.img_block}>
          <img className="w-full h-auto object-cover" src={img} alt="Изображение продукта" />
        </div>
      </div>
      <Helmet>
        <title>{name}</title>
      </Helmet>
    </>
  );
};

export default Product;
