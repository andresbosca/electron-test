import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1669850628837 implements MigrationInterface {
    name = 'migrations1669850628837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "property_image" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "url" character varying NOT NULL, "alt" character varying NOT NULL, "base64" character varying NOT NULL, "propertyId" integer, CONSTRAINT "PK_7bc43b89d4104149dddea18cdf8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "property_image" ADD CONSTRAINT "FK_1f5f43978d27121a7ddd0c2e900" FOREIGN KEY ("propertyId") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "property_image" DROP CONSTRAINT "FK_1f5f43978d27121a7ddd0c2e900"`);
        await queryRunner.query(`DROP TABLE "property_image"`);
    }

}
