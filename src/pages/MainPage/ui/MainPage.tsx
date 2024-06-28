import { memo, useCallback, useEffect, useMemo, useState } from "react"
import cls from "./MainPage.module.scss"
import { useAppDispatch, useAppSelector } from "../../../common/hooks/useAppDispatch"
import { fetchProducts } from "../model/services/fetchProducts";
import { CardList } from "../../../components/CardList/CardList";
import Input from "../../../components/Input/Input";
import { IProduct } from "../../../common/models/IProduct";
import Pagination from "../../../components/Pagination/Pagination";

const MainPage = memo(() => {
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(10)
  const dispatch = useAppDispatch()
  const { products, isLoading, error } = useAppSelector(state => state.product)

  const handleSearchChange = (value: string) => {
    setQuery(value);
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product: IProduct) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error</h1>
  }

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  return (
    <div className={cls.MainPage}>
      <Input onChange={handleSearchChange} />
      <CardList
        products={filteredProducts}
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
})

export default MainPage