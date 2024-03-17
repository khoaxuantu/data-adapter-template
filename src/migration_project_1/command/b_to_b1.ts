import { DataMappingCommand } from "../../lib/command/base";
import AdapterBtoB1 from "../adapter/b_to_b1";

export default class CmdBtoB1 extends DataMappingCommand {
  constructor() {
    super(new AdapterBtoB1());
  }

  override execute(): void {
    console.log("Map B to B1");
    this.adapter.process();
  }
}
