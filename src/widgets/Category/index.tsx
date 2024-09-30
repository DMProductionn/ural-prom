import style from '../../app/css/Catalog/Category/category.module.css';
import { TypeProduct } from '../../app/types/product.type';
import { getChildProduct, getParentProduct } from '../../app/services/category.service';
import { TypeParent } from '../../app/types/category.type';
import React, { useState } from 'react';

interface CategoryProps {
  parentCategories: TypeParent[];
  setProduct: (product: TypeProduct[]) => void;
  productAll: TypeProduct[];
  setLoading: (loading: boolean) => void;
}

const Category: React.FC<CategoryProps> = ({ parentCategories, setProduct, productAll, setLoading }) => {
  const [activeParentIndex, setActiveParentIndex] = useState<number | null>(null);

  const handleAll = () => {
    setProduct(productAll);
    setActiveParentIndex(null);
  };

  const handleParent = async (parent_category_id: number, index: number) => {
    setActiveParentIndex(index);
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

  const handleChild = async (subId: number, parentIndex: number) => {
    setActiveParentIndex(parentIndex); 
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
      
      const subcategoriesSet = new Map();
      productAll.forEach(product => {
        product.subcategories.forEach(subcategory => {
          if (subcategory.parent_category.id === id && !subcategoriesSet.has(subcategory.id)) {
            subcategoriesSet.set(subcategory.id, subcategory);
          }
        });
      });

      return {
        parentCategory,
        subcategories: Array.from(subcategoriesSet.values()),
      };
    })
    .filter(item => item.subcategories.length > 0);

  return (
    <ul className="mx-auto flex flex-wrap gap-[30px]">
      <li>
        <button onClick={handleAll} className={activeParentIndex === null ? `${style.btn} text-blue` : style.btn}>
          Все
        </button>
      </li>
      {uniqueParentCategories.map(({ parentCategory, subcategories }, index) => (
        <li key={parentCategory?.id} className={style.list}>
          <button 
            onClick={() => handleParent(parentCategory?.id ?? 0, index)} 
            className={activeParentIndex === index ? `${style.btn} text-blue` : style.btn}
          >
            {parentCategory?.name}
          </button>
          <div className={style.sub_menu}>
            <ul>
              {subcategories.map(subcategory => (
                <li key={subcategory.id} className={style.sub_list} onClick={() => handleChild(subcategory.id, index)}>
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
