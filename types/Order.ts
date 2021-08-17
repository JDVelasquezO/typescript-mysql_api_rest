import { BasicProduct, Product } from "./Product";
import { BasicCustomer, Customer } from "./Customer";

export interface BasicOrder {
    product: BasicProduct,
    customer: BasicCustomer,
    productQuantity: number
}

export interface Order extends BasicOrder {
    orderId: number
}

export interface OrderWithDetails extends Order{
    product: Product,
    customer: Customer,
}