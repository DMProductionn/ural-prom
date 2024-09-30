import Category from '../widgets/Category';
import Product from '../widgets/Product';
import style from '../app/css/Catalog/CatalogPage/catalog.module.css';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import useGetProduct from '../app/hooks/Product/useGetProduct';
import { TypeProduct } from '../app/types/product.type';
import { TypeParent } from '../app/types/category.type';
import Loader from '../shared/Loader';
import { Helmet } from 'react-helmet';

const Catalog = () => {
  const catalogRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [parentCategories, setParentCategories] = useState<TypeParent[]>([]);
  const [product, setProduct] = useState<TypeProduct[] | null>([]);
  const { data: productAll } = useGetProduct();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (productAll) {
      setProduct(productAll);
      const uniqueParentCategories: TypeParent[] = [];
      productAll.forEach((product) => {
        product.subcategories.forEach((category) => {
          if (!uniqueParentCategories.includes(category.parent_category)) {
            uniqueParentCategories.push(category.parent_category);
          }
        });
      });
      setParentCategories(uniqueParentCategories);
    }
  }, [productAll]);

  // Mouse wheel scroll handler
  const handleWheel = (event: WheelEvent) => {
    // Disable scrolling if there are fewer than 3 products
    if (product && product.length <= 3) {
      return; // Do nothing
    }

    if (catalogRef.current) {
      event.preventDefault(); 
      catalogRef.current.scrollLeft += event.deltaY; 
    }
  };

  useEffect(() => {
    const catalogElement = catalogRef.current;
    if (catalogElement) {
      catalogElement.addEventListener('wheel', handleWheel);
    }
    return () => {
      if (catalogElement) {
        catalogElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [product]); 

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (catalogRef.current) {
      setStartX(event.pageX - catalogRef.current.offsetLeft);
      setScrollLeft(catalogRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    event.preventDefault();
    if (catalogRef.current) {
      const x = event.pageX - catalogRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      catalogRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-[20px] justify-between items-center">
        <h1 className="text-[25px] font-black">Каталог товаров</h1>
        <Category
          setProduct={setProduct}
          parentCategories={parentCategories}
          productAll={productAll ?? []}
          setLoading={setLoading}
        />
      </div>
      <div
        className={style.catalog}
        ref={catalogRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}>
        {loading ? (
          <div className='w-full h-[325px] flex items-center justify-center'><Loader /></div>
        ) : (
          product?.map((product: TypeProduct) => {
            return <Product key={product.id} product={product} />;
          })
        )}
      </div>
      <Helmet>
        <title>Каталог</title>
        <meta name="description" content="Каталог Уральского промышленного центра: все о ведущих предприятиях, инновациях и решениях в сфере промышленности. Узнайте о наших партнерах, продуктах и услугах для эффективного бизнеса на Урале." />
      </Helmet>
    </>
  );
};

export default Catalog;
