import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Property extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  price: number;

  @Column()
  area: number;

  @Column()
  rooms: number;

  @Column()
  bathrooms: number;

  @Column()
  parkingSpaces: number;

  @Column()
  propertyType: string;

  @Column()
  mainImage: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
