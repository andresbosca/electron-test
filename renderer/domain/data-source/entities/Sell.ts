import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Sell extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  value: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  securityDeposit: number;
}
