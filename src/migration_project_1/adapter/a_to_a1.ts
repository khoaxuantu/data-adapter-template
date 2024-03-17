import { BaseAdapter } from "@/lib/adapter/base";
import { DataSourceAMongo } from "../data_source/mongo";
import { DataSourceAPostgres } from "../data_source/postgres";

export default class AdapterAtoA1 extends BaseAdapter {
  constructor() {
    super(DataSourceAMongo, DataSourceAPostgres);
  }

  override process(): void {

  }

  override test(): void {

  }

  extract(): void {

  }

  transform(): void {

  }

  load(): void {

  }
}
