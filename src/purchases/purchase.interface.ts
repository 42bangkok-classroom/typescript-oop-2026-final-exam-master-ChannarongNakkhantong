import { from } from "rxjs";
import { PurchaseController } from "./purchase.controller";
import { Contains } from "class-validator";

export interface Purchase {
    id: number;
    customerName: string;
    purchaseDate: Date;
    PurchaseItem:[];
    totalPrice: number;
}
export interface PurchaseItem {
    productId: number;
    quantity: number;
}