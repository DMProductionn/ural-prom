import http from "../api/http"
import { TypeProduct } from "../types/product.type"

export const getProduct = async () => {
  const res = await http.get<TypeProduct[]>('/product/all');
  return res.data
} 

export const getProductDetail = async (id: string) => {
  const res = await http.get(`/product/detail/${id}`);
  return res.data;
}

export const getSearchProduct = async (product_name: string) => {
  const res = await http.get(`/product/search?product_name=${product_name}`);
  return res.data
} 