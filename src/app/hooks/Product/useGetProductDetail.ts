import { useQuery } from "@tanstack/react-query"
import { getProductDetail } from "../../services/product.service"

const useGetProductDetail = (id: string) => {
  return useQuery({
    queryKey: ['getProductDetail', id],
    queryFn: () => getProductDetail(id)
  })
}

export default useGetProductDetail