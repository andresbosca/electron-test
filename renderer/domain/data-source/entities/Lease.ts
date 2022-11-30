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
export class Lease extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  rent: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  securityDeposit: number;
  @Column()
  leaseDuration: number;
}
