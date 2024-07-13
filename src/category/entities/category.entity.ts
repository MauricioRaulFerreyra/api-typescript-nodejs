import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ProductEntity } from "../../product/entities/product.entity";

@Entity({ name: "category" })
export class CategoryEntity extends BaseEntity {

    @Column()
    categoryName!: string;

    @Column()
    colorBadge!: string;

    @OneToMany(() => ProductEntity, (product) => product.category)
    @JoinColumn({ name: "product_id" })
    products!: ProductEntity[];
}