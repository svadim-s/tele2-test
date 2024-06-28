import { memo } from "react"
import cls from "./CardList.module.scss"
import { IProduct } from "../../common/models/IProduct"
import { Card } from "../Card/Card"
import Pagination from "../Pagination/Pagination"

interface CardListProps {
  products: IProduct[]
  currentPage: number;
  productsPerPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const CardList = memo((props: CardListProps) => {
  const { products, currentPage, productsPerPage, totalPages, onPageChange } = props;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className={cls.CardList}>
      <div className={cls.cards}>
        {currentProducts.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
      <div className={cls.pagination}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
});