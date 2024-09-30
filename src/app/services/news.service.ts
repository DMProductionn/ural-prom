import http from "../api/http"
import { INews } from "../types/news.type.";


export const getNews = async () => {
  const res = await http.get<INews[]>('/news/all');
  return res.data
} 

export const getNewsDetail = async (news_id: number) => {
  const res = await http.get<INews>(`/news/detail/${news_id}`);
  return res.data
}