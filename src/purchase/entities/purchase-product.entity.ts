import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { PurchaseEntity } from "./purchase.entity";
import { ProductEntity } from "../../product/entities/product.entity";
import { BaseEntity } from "../../config/base.entity";

@Entity({ name: "purchases_products" })
export class PurchaseProductEntity extends BaseEntity {
  
  @PrimaryColumn()
  quantityProduct!: number;

  @Column()
  totalPrice!: number;

  @ManyToOne(() => PurchaseEntity, (purchase) => purchase.purchasesProducts)
  @JoinColumn({ name: "purchase_id" })
  purchase!: PurchaseEntity;

  @ManyToOne(() => ProductEntity, (product) => product.purchasesProducts)
  @JoinColumn({ name: "product_id" })
  product!: ProductEntity;
}