import http from "../api/http";
import { TypeProduct } from "../types/product.type";

export const getParentProduct = async (parent_category_id: number) => {
  const res = await http.get<TypeProduct[]>(`/product/parent_category/${parent_category_id}`);
  return res.data
}

export const getChildProduct = async (subcategory_id: number) => {
  const res = await http.get<TypeProduct[]>(`/product/subcategory/${subcategory_id}`);
  return res.data
}