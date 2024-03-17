import { DataSource } from "typeorm";

export abstract class BaseAdapter {
  protected origin: DataSource;
  protected destination: DataSource;

  constructor(origin: DataSource, destination: DataSource) {
    this.origin = origin;
    this.destination = destination;
  }

  abstract process(): void;
  abstract test(): void;
  abstract extract(): void;
  abstract transform(): void;
  abstract load(): void;
}
