import 'reflect-metadata'
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from "dotenv";
import { UserRouter } from './user/user.router';
import { ConfigServer } from './config/config';
import { AppDataSource } from './config/data.source';
import { LoginStrategy } from './auth/strategies/login.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { AuthRouter } from './auth/auth.router';
import { PurchaseRouter } from './purchase/purchase.router';
import { ProductRouter } from './product/product.router';
import { CategoryRouter } from './category/category.router';
import { CustomerRouter } from './customer/customer.router';
import { PurchaseProductRouter } from './purchase/purchase-product.router';

dotenv.config();

class ServerBasic extends ConfigServer {
  public app: express.Application = express();
  private port: number = this.getNumberEnv("PORT");

  constructor() {
    super();

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.passportUse();
    this.dbConnect();

    this.app.use("/api", this.routers());
    this.listen();
  }

  routers(): Array<express.Router> {
    return [
      new UserRouter().router,
      new PurchaseRouter().router,
      new ProductRouter().router,
      new CustomerRouter().router,
      new CategoryRouter().router,
      new PurchaseProductRouter().router,
      new AuthRouter().router,
    ];
  }

  passportUse() {
    return [new LoginStrategy().use, new JwtStrategy().use];
  }

  async dbConnect(): Promise<void> {
    try {
      await AppDataSource.initialize();
      console.log("Database connected");
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
  }

  public listen() {
    this.app.listen(this.port, () =>
      console.log("Server listening on port " + this.port)
    );
  }
}

new ServerBasic();