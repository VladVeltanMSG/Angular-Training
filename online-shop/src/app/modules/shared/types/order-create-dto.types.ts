import { ProductIdAndQuantity } from "./product-id-and-quantity.types"
export interface OrderCreateDto {
    customerId: string;
    products: ProductIdAndQuantity[];
  }
  