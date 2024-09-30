import { useQuery } from "@tanstack/react-query"
import { getNewsDetail } from "../../services/news.service"

const useGetNewsDetail = (id: number) => {
  return useQuery({
    queryKey: ['getNewsDetail', id],
    queryFn:() => getNewsDetail(id)
  })
}

export default useGetNewsDetail;