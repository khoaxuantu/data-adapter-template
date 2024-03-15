import { DataMappingCommand } from "../../lib/command/base";

export default class CmdBtoB1 extends DataMappingCommand {
  constructor() {
    super();
  }

  override execute(): void {
    console.log("Map B to B1");
  }
}
