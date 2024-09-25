import http from "../api/http"
import { INews } from "../types/news.type.";


export const getNews = async () => {
  const res = await http.get<INews[]>('/news/all');
  return res.data
} 