import { DataSource } from "typeorm";

export const DataSourceAMongo = new DataSource({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "a",
  synchronize: true,
  logging: false,
  entities: ["src/migration_project_1/entity/a_to_a1/a/*.entity.ts"],
});

export const DataSourceBMongo = new DataSource({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "b",
  synchronize: true,
  logging: false,
  entities: ["src/migration_project_1/entity/b_to_b1/b/*.entity.ts"],
});
