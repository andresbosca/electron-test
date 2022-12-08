import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Property } from './Property';

@Entity()
export class PropertyImage extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @Column({ nullable: true })
  url?: string;
  @Column({ nullable: true })
  alt?: string;
  @Column({ nullable: true })
  base64?: string;
  @ManyToOne(() => Property, (property) => property.images)
  property: number;
}
