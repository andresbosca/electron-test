import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1668537654216 implements MigrationInterface {
    name = 'migrations1668537654216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "amenities" ALTER COLUMN "propertyId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD CONSTRAINT "FK_34213d07cb877dbc5a3fae2c214" FOREIGN KEY ("propertyId") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "amenities" DROP CONSTRAINT "FK_34213d07cb877dbc5a3fae2c214"`);
        await queryRunner.query(`ALTER TABLE "amenities" ALTER COLUMN "propertyId" SET NOT NULL`);
    }

}
