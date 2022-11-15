import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1668470259238 implements MigrationInterface {
  name = 'migrations1668470259238';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "amenities" ADD CONSTRAINT "UQ_34213d07cb877dbc5a3fae2c214" UNIQUE ("propertyId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "lease" ADD CONSTRAINT "UQ_bf19769324de50ae4a2258478c0" UNIQUE ("propertyId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "sell" ADD CONSTRAINT "UQ_11885cdf86221c8262b6a2a082d" UNIQUE ("propertyId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "property" ADD CONSTRAINT "UQ_d80743e6191258a5003d5843b4f" UNIQUE ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "property" ADD CONSTRAINT "FK_d80743e6191258a5003d5843b4f" FOREIGN KEY ("id") REFERENCES "lease"("propertyId") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "property" ADD CONSTRAINT "FK_d80743e6191258a5003d5842b4f" FOREIGN KEY ("id") REFERENCES "sell"("propertyId") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "property" DROP CONSTRAINT "FK_d80743e6191258a5003d5843b4f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "property" DROP CONSTRAINT "FK_d80743e6191258a5003d5842b4f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "property" DROP CONSTRAINT "UQ_d80743e6191258a5003d5843b4f"`,
    );
    await queryRunner.query(`ALTER TABLE "sell" DROP CONSTRAINT "UQ_11885cdf86221c8262b6a2a082d"`);
    await queryRunner.query(`ALTER TABLE "lease" DROP CONSTRAINT "UQ_bf19769324de50ae4a2258478c0"`);
    await queryRunner.query(
      `ALTER TABLE "amenities" DROP CONSTRAINT "UQ_34213d07cb877dbc5a3fae2c214"`,
    );
  }
}

