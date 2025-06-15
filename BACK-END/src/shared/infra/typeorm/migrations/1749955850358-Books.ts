import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProducts1749093325863 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "books",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "titulo",
                        type: "varchar",
                    },
                    {
                        name: "numero de paginas",
                        type: "integer",
                    },
                    {
                        name: "cod. ISBN",
                        type: "varchar",
                    },
                    {
                        name: "editora",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books")
    }
}
