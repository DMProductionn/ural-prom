import { useNavigate } from 'react-router-dom';
import style from '../../app/css/Catalog/Product/product.module.css';
import React from 'react';

type Props = {
  img: string;
  name: string;
};

const Product: React.FC<Props> = ({ name, img }) => {
  const navigate = useNavigate();
  const product = {
    name: name,
    img: img,
  }

  const handleClick = () => {
    localStorage.setItem('product', JSON.stringify(product));
    navigate(`/catalog/${product.name}`);
  };

  return (
    <div onClick={handleClick} className={style.product}>
      <p className="mb-[30px] text-[17px] text-center font-black">{name}</p>
      <div className='max-w-[190px] w-full h-[200px]'>
        <img className="w-full h-full object-cover" src={img} alt="image" />
      </div>
      {/* <div className="flex mt-[30px] justify-between">
        <div>
          <p className="text-[13px] text-[#2C3BA0]">
            Корпус: <br /> Влагозащита: <br /> Цвет: <br /> Тип экрана: <br /> Размер экрана:
          </p>
        </div>
        <div>
          <p className="text-[13px] text-[#646986]">
            Металл, Стекло <br /> IP67 <br /> Черный <br /> IPS <br /> 4,7
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Product;
