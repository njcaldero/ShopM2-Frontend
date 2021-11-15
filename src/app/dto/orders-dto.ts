import { Customer } from "../interfaces/customer";
import { OrderDetail } from "../interfaces/order-detail";

export class OrdersDto {
    Id?: number;
    IdCustomer?: number;
    IdStatus?: number;
    Created_at?: Date;
    Updated_at?: Date;
    Customer?: Customer;
    OrderDetails?: OrderDetail[];
}
