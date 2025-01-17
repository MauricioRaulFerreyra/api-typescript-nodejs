import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from "../../category/entities/category.entity";
import { PurchaseProductEntity } from "../../purchase/entities/purchase-product.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";
import { BaseEntity } from "../../config/base.entity";

@Entity({ name: "product" })
export class ProductEntity extends BaseEntity {

    @Column()
    productName!: string;

    @Column()
    description!: string;

    @Column()
    price!: number;

    @ManyToOne(()=>CategoryEntity, (category)=> category.products)
    @JoinColumn({name: 'category_id'})
    category!: CategoryEntity;

    @OneToMany(()=>PurchaseProductEntity,(purchaseProduct)=>purchaseProduct.product)
    purchasesProducts!:PurchaseEntity[];

}