import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1669853049790 implements MigrationInterface {
    name = 'migrations1669853049790'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "property_image" ALTER COLUMN "url" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property_image" ALTER COLUMN "alt" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property_image" ALTER COLUMN "base64" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "property_image" ALTER COLUMN "base64" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property_image" ALTER COLUMN "alt" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property_image" ALTER COLUMN "url" SET NOT NULL`);
    }

}
