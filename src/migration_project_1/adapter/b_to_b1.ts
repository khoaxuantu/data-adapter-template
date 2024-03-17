import { BaseAdapter } from "@/lib/adapter/base";
import { DataSourceBMongo } from "../data_source/mongo";
import { DataSourceBPostgres } from "../data_source/postgres";

export default class AdapterBtoB1 extends BaseAdapter {
  constructor() {
    super(DataSourceBMongo, DataSourceBPostgres);
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
