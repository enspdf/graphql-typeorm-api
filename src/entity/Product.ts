import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Product extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column()
    name!: string;

    @Field(() => Int)
    @Column("int", { default: 0 })
    quantity!: number;

    @Field(() => String)
    @CreateDateColumn({ type: "timestamp" })
    createdAt!: string;
};