import { DataMappingCommand } from "../../lib/command/base";

export default class CmdAtoA1 extends DataMappingCommand {
  constructor() {
    super();
  }

  override execute(): void {
    console.log("Map A to A1");
  }
}
