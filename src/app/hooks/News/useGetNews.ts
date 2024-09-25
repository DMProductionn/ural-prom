import { useQuery } from "@tanstack/react-query"
import { getNews } from "../../services/news.service"


const useGetNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: () => getNews()
  })
}

export default useGetNews