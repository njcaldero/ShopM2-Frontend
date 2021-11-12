import { Customer } from "../interfaces/customer";
import { OrderDetail } from "../interfaces/order-detail";

export class CreateOrderDto {
    IdStatus: number;
    Customer: Customer;
    OrderDetails: OrderDetail[];
}
