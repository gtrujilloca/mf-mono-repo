import { ProductDto, Product } from "@/shop/src/domain";

export function mapToProduct(product: ProductDto): Product {
  const {
    id,
    title,
    price,
    description,
    image,
  } = product;

  return {
    id,
    title,
    price,
    description,
    image,
  };
}