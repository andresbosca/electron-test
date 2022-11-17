import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1668536556080 implements MigrationInterface {
    name = 'migrations1668536556080'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "amenities" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "propertyId" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c0777308847b3556086f2fb233e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lease" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "rent" integer NOT NULL, "securityDeposit" integer NOT NULL, "leaseDuration" integer NOT NULL, CONSTRAINT "PK_954811694773f24986695203663" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sell" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "value" integer NOT NULL, "securityDeposit" integer NOT NULL, CONSTRAINT "PK_8cc9d759945a4176103696feedf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "property" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "type" character varying NOT NULL, "imageUrl" character varying NOT NULL, "imageAlt" character varying NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "number" integer NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "zip" character varying NOT NULL, "bedrooms" integer NOT NULL, "bathrooms" integer NOT NULL, "squareFeet" integer NOT NULL, "price" integer NOT NULL, "garage" integer NOT NULL, "description" character varying NOT NULL, "dateAdded" TIMESTAMP NOT NULL, "leaseValueId" integer, "sellValueId" integer, CONSTRAINT "REL_de925bc0e047fb2cd5146ebee8" UNIQUE ("leaseValueId"), CONSTRAINT "REL_5fd7b67864a72c8f164a825c9a" UNIQUE ("sellValueId"), CONSTRAINT "PK_d80743e6191258a5003d5843b4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "property" ADD CONSTRAINT "fk_property_lease_id" FOREIGN KEY ("leaseValueId") REFERENCES "lease"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "property" ADD CONSTRAINT "fk_property_sell_id" FOREIGN KEY ("sellValueId") REFERENCES "sell"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "property" DROP CONSTRAINT "fk_property_sell_id"`);
        await queryRunner.query(`ALTER TABLE "property" DROP CONSTRAINT "fk_property_lease_id"`);
        await queryRunner.query(`DROP TABLE "property"`);
        await queryRunner.query(`DROP TABLE "sell"`);
        await queryRunner.query(`DROP TABLE "lease"`);
        await queryRunner.query(`DROP TABLE "amenities"`);
    }

}
