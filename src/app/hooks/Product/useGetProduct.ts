import { useQuery } from "@tanstack/react-query"
import { getProduct } from "../../services/product.service"

const useGetProduct = () => {
  return useQuery({
    queryKey: ['productAll'],
    queryFn: () => getProduct()
  })
}

export default useGetProduct