import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1668725261874 implements MigrationInterface {
  name = 'migrations1668725261874';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "lease" DROP COLUMN "rent"`);
    await queryRunner.query(`ALTER TABLE "lease" ADD "rent" numeric(10,2) NOT NULL`);
    await queryRunner.query(`ALTER TABLE "lease" DROP COLUMN "securityDeposit"`);
    await queryRunner.query(`ALTER TABLE "lease" ADD "securityDeposit" numeric(10,2) NOT NULL`);
    await queryRunner.query(`ALTER TABLE "sell" DROP COLUMN "value"`);
    await queryRunner.query(`ALTER TABLE "sell" ADD "value" numeric(10,2) NOT NULL`);
    await queryRunner.query(`ALTER TABLE "sell" DROP COLUMN "securityDeposit"`);
    await queryRunner.query(`ALTER TABLE "sell" ADD "securityDeposit" numeric(10,2) NOT NULL`);
    await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "price"`);
    await queryRunner.query(`ALTER TABLE "property" ADD "price" numeric(10,2) NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "price"`);
    await queryRunner.query(`ALTER TABLE "property" ADD "price" integer NOT NULL`);
    await queryRunner.query(`ALTER TABLE "sell" DROP COLUMN "securityDeposit"`);
    await queryRunner.query(`ALTER TABLE "sell" ADD "securityDeposit" integer NOT NULL`);
    await queryRunner.query(`ALTER TABLE "sell" DROP COLUMN "value"`);
    await queryRunner.query(`ALTER TABLE "sell" ADD "value" integer NOT NULL`);
    await queryRunner.query(`ALTER TABLE "lease" DROP COLUMN "securityDeposit"`);
    await queryRunner.query(`ALTER TABLE "lease" ADD "securityDeposit" integer NOT NULL`);
    await queryRunner.query(`ALTER TABLE "lease" DROP COLUMN "rent"`);
    await queryRunner.query(`ALTER TABLE "lease" ADD "rent" integer NOT NULL`);
  }
}
