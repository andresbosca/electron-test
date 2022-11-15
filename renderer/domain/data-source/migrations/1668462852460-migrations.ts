import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1668462852460 implements MigrationInterface {
    name = 'migrations1668462852460'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "amenities" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "propertyId" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c0777308847b3556086f2fb233e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lease" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "propertyId" integer NOT NULL, "rent" integer NOT NULL, "securityDeposit" integer NOT NULL, "leaseDuration" integer NOT NULL, CONSTRAINT "PK_954811694773f24986695203663" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sell" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "propertyId" integer NOT NULL, "value" integer NOT NULL, "securityDeposit" integer NOT NULL, CONSTRAINT "PK_8cc9d759945a4176103696feedf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "mainImage"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "propertyType"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "parkingSpaces"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "rooms"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "area"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "property" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "imageUrl" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "imageAlt" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "zip" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "bedrooms" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "squareFeet" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "garage" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "dateAdded" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "dateAdded"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "garage"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "squareFeet"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "bedrooms"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "zip"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "imageAlt"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "imageUrl"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "property" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "area" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "rooms" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "parkingSpaces" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "propertyType" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "country" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "mainImage" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "sell"`);
        await queryRunner.query(`DROP TABLE "lease"`);
        await queryRunner.query(`DROP TABLE "amenities"`);
    }

}
