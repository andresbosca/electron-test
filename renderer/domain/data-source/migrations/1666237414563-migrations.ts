import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1666237414563 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      'CREATE TABLE "typeorm_metadata" ("type" varchar(255) NOT NULL,"database" varchar(255) DEFAULT NULL,"schema" varchar(255) DEFAULT NULL,"table" varchar(255) DEFAULT NULL,"name" varchar(255) DEFAULT NULL,"value" text);',
    );
    queryRunner.query(
      'CREATE TABLE public."Property" ( id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ), title character varying COLLATE pg_catalog."default" NOT NULL, description character varying COLLATE pg_catalog."default" NOT NULL, address character varying COLLATE pg_catalog."default" NOT NULL, price double precision NOT NULL, area double precision NOT NULL, rooms numeric NOT NULL, bathrooms numeric NOT NULL, parking_spaces numeric NOT NULL, property_type character varying COLLATE pg_catalog."default" NOT NULL, main_image character varying COLLATE pg_catalog."default" NOT NULL, created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP, updated_at timestamp without time zone, CONSTRAINT property_pk_id PRIMARY KEY (id))',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('DROP TABLE "typeorm_metadata"');
    queryRunner.query('DROP TABLE public."Property"');
  }
}
