import { useEffect, useState } from 'react';
import { getSearchProduct } from '../../app/services/product.service';
import { TypeSearchProduct } from '../../app/types/product.type';
import { useNavigate } from 'react-router-dom';
import style from '../../app/css/Header/header.module.css';

const SearchProduct = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [product, setProduct] = useState<TypeSearchProduct[]>([]);
  const [succes, setIsSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => {
      if (searchValue) {
        getSearchProduct(searchValue).then((res) => {
          setProduct(res);
          setIsSuccess(true);
        })
      } else {
        setProduct([]);
      }
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [searchValue]);
  console.log(succes);
  

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClick = (name: string, img: string) => {
    const product = {
      name: name,
      img: img,
    };
    setSearchValue('');
    localStorage.setItem('product', JSON.stringify(product));
    navigate(`/catalog/${product.name}`);
  };

  return (
    <>
      <input
        type="text"
        className={`${style.input} max-w-[400px] w-full h-[30px] bg-transparent border-[1px] border-[#000] outline-none pl-[10px] text-[14px]`}
        placeholder="Поиск по товарам..."
        value={searchValue}
        onChange={onChangeSearch}
      />
      <div
        className={`${style.dropdown} absolute top-[32px] max-w-[400px] w-full max-h-[200px] overflow-auto bg-[white]`}>
        {product.length === 0 && searchValue && succes ? (
          <div
            className={`${style.dropdown} bg-[#3B3B3B] text-white pl-[10px] text-[13px] h-[30px] flex items-center`}>
            <p>Нет результатов</p>
          </div>
        ) : (
          searchValue &&
          product.map((product) => (
            <div
              onClick={() => handleClick(product.name, product.img)}
              key={product.name}
              className={`${style.dropdown_product} bg-[black] hover:bg-blue transition cursor-pointer max-w-[400px] w-full h-[60px] text-white pl-[10px] flex items-center gap-[40px]`}>
              <img className="w-[40px] h-[40px] object-cover" src={product.img} alt="" />
              <p>{product.name}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default SearchProduct;
