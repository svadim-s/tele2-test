import { memo } from "react"
import cls from "./Card.module.scss"
import { IProduct } from "../../common/models/IProduct"

interface CardProps {
  product: IProduct
}

export const Card = memo(({ product }: CardProps) => {
  return (
    <div className={cls.Card}>
      <div className={cls.cardInfo}>
        <img src={product.thumbnail} alt='Picture of the product' className={cls.image} />
        <p>{product.title}</p>
        <p>{product.price}</p>
      </div>
    </div>
  )
})