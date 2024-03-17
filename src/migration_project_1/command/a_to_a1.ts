import { DataMappingCommand } from "../../lib/command/base";
import AdapterAtoA1 from "../adapter/a_to_a1";

export default class CmdAtoA1 extends DataMappingCommand {
  constructor() {
    super(new AdapterAtoA1());
  }

  override execute(): void {
    console.log("Map A to A1");
    this.adapter.process();
  }
}
