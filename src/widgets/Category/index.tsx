import style from '../../app/css/Catalog/Category/category.module.css';
import { TypeProduct } from '../../app/types/product.type';
import { getChildProduct, getParentProduct } from '../../app/services/category.service';
import { TypeParent } from '../../app/types/category.type';
import React from 'react';

interface CategoryProps {
  parentCategories: TypeParent[];
  setProduct: (product: TypeProduct[]) => void;
  productAll: TypeProduct[];
  setLoading: (loading: boolean) => void;
}

const Category: React.FC<CategoryProps> = ({ parentCategories, setProduct, productAll, setLoading }) => {
  const handleAll = () => {
    setProduct(productAll);
  };

  const handleParent = async (parent_category_id: number) => {
    try {
      setLoading(true);
      const res = await getParentProduct(parent_category_id);
      setProduct(res);
    } catch (error) {
      console.error("Ошибка при получении продуктов родительской категории", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChild = async (subId: number) => {
    try {
      setLoading(true);
      const res = await getChildProduct(subId);
      setProduct(res);
    } catch (error) {
      console.error("Ошибка при получении продуктов подкатегории", error);
    } finally {
      setLoading(false);
    }
  };

  const uniqueParentCategories = Array.from(new Set(parentCategories.map(category => category.id)))
    .map(id => {
      const parentCategory = parentCategories.find(category => category.id === id);
      const subcategories = productAll.flatMap(product =>
        product.subcategories.filter(subcategory => subcategory.parent_category.id === id)
      );

      return {
        parentCategory,
        subcategories,
      };
    })
    .filter(item => item.subcategories.length > 0); 

  return (
    <ul className="mx-auto flex flex-wrap gap-[30px]">
      <li>
        <button onClick={handleAll} className={style.btn}>
          Все
        </button>
      </li>
      {uniqueParentCategories.map(({ parentCategory, subcategories }) => (
        <li key={parentCategory?.id} className={style.list}>
          <button onClick={() => handleParent(parentCategory?.id ?? 0)} className={style.btn}>
            {parentCategory?.name}
          </button>
          <div className={style.sub_menu}>
            <ul>
              {subcategories.map(subcategory => (
                <li key={subcategory.id} className={style.sub_list} onClick={() => handleChild(subcategory.id)}>
                  <button className={style.sub_btn}>
                    {subcategory.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Category;
