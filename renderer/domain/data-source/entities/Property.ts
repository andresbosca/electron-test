import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Amenity, LeaseValue, NewProperty, SellValue } from '../../property';
import { Amenities } from './Amenities';
import { Lease } from './Lease';
import { PropertyImage } from './PropertyImage';
import { Sell } from './Sell';

@Entity()
export class Property extends BaseEntity implements NewProperty {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @Column()
  type: string;
  @Column()
  imageUrl: string;
  @Column()
  imageAlt: string;
  @Column()
  name: string;
  @Column()
  address: string;
  @Column()
  number: number;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  zip: string;
  @Column()
  bedrooms: number;
  @Column()
  bathrooms: number;
  @Column()
  squareFeet: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
  @Column()
  garage: number;
  @Column()
  description: string;
  @Column()
  dateAdded: Date;
  @OneToOne(() => Lease, { cascade: true })
  @JoinColumn({
    foreignKeyConstraintName: 'fk_property_lease_id',
    referencedColumnName: 'id',
  })
  leaseValue?: LeaseValue;
  @OneToOne(() => Sell, { cascade: true })
  @JoinColumn({
    foreignKeyConstraintName: 'fk_property_sell_id',
    referencedColumnName: 'id',
  })
  sellValue?: SellValue;
  @OneToMany(() => Amenities, (amenity) => amenity.property, { cascade: true })
  amenities: Amenity[];
  @OneToMany(() => PropertyImage, (image) => image.property, { cascade: true })
  images: PropertyImage[];
}
