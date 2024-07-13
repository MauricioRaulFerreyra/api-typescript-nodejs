import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { SharedMiddleware } from "../../shared/middlewares/shared.middleware";

import { PurchaseProductDTO } from "../dto/purchase-product.dto";

export class PurchaseProductMiddleware extends SharedMiddleware {
  constructor() {
    super();
  }
  purchaseProductValidator(req: Request, res: Response, next: NextFunction) {
    const { quantityProduct, totalPrice, purchase, product } = req.body;

    const valid = new PurchaseProductDTO();
    valid.quantityProduct = quantityProduct;
    valid.totalPrice = totalPrice;
    valid.purchase = purchase;
    valid.product = product;

    validate(valid).then((err) => {
      if (err.length > 0) {
        return this.httpResponse.Error(res, err);
      } else {
        return next();
      }
    })
    .catch((err) => {
        // Manejar cualquier error que ocurra durante la validación
        console.error("Error during validation:", err);
        return this.httpResponse.Error(res, err);
      });
  }
}
