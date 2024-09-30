import { useNavigate } from 'react-router-dom';
import style from '../../app/css/Catalog/Product/product.module.css';
import { TypeProduct } from '../../app/types/product.type';

const Product = ({ product }: { product: TypeProduct }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/catalog/product/${product.id}`);
  };

  return (
    <div onClick={handleClick} className={style.product}>
      <p
        className={`mb-[30px] text-center font-black max-w-[100px] mx-auto ${style.productText}`}>
        {product?.name}
      </p>
      <div className="max-w-[190px] w-full h-[200px]">
        <img className="w-full h-full object-cover" src={product?.img} alt="image" />
      </div>
    </div>
  );
};

export default Product;
