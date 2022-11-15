import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1668436273211 implements MigrationInterface {
    name = 'migrations1668436273211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "property" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "address" character varying NOT NULL, "price" integer NOT NULL, "area" integer NOT NULL, "rooms" integer NOT NULL, "bathrooms" integer NOT NULL, "parkingSpaces" integer NOT NULL, "propertyType" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "country" character varying NOT NULL, "mainImage" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d80743e6191258a5003d5843b4f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "property"`);
    }

}
