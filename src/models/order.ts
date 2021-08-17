import { BasicOrder, Order, OrderWithDetails } from "../../types/Order";
import { db } from "../../db";
import { OkPacket, RowDataPacket } from "mysql2";

export const create = (order: BasicOrder, callback: Function) => {
    const query = "INSERT INTO ProductOrder (product_id, customer_id, product_quantity) VALUES (?, ?, ?)";

    db.query(
        query,
        [order.product.id, order.customer.id, order.productQuantity],
        (err, res) => {
            if (err) { callback(err) }

            const insertId = (<OkPacket> res).insertId;
            callback(null, insertId);
        }
    )
}