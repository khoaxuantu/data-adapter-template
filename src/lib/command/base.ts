import { BaseAdapter } from "../adapter/base";

export abstract class DataMappingCommand {
  protected adapter: BaseAdapter;

  constructor(adapter: BaseAdapter) {
    this.adapter = adapter;
  }

  abstract execute(): void
}
