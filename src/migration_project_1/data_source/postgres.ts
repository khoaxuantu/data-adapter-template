import { DataSource } from "typeorm"

export const DataSourceAPostgres = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "a",
    synchronize: true,
    logging: false,
    entities: ["src/migration_project_1/entity/a_to_a1/a1/*.entity.ts"],
});

export const DataSourceBPostgres = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "b",
    synchronize: true,
    logging: false,
    entities: ["src/migration_project_1/entity/b_to_b1/b1/*.entity.ts"],
});
