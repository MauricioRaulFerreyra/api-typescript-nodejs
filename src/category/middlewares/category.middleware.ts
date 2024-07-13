import { Request, Response, NextFunction } from "express";
import { HttpResponse } from "../../shared/response/http.response";
import { validate } from "class-validator";
import { CategoryDTO } from "../dto/category.dto";

export class CategoryMiddleware {

    constructor(private readonly httpResponse: HttpResponse = new HttpResponse()) {}

    categoryValidator(req: Request, res: Response, next: NextFunction) {

      const { categoryName } = req.body;

      const valid = new CategoryDTO();

      valid.categoryName = categoryName;
      validate(valid).then((err) => {
        if (err.length > 0) {
          return this.httpResponse.Error(res, err);
        } else {
          return next();
        }
      });

    }

}