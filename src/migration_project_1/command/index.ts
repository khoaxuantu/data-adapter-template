import { DataMappingCommand } from "../../lib/command/base";

export default class Entry {
  private cmd: DataMappingCommand;

  constructor(cmd: DataMappingCommand) {
    this.cmd = cmd;
  }

  set command(cmd: DataMappingCommand) {
    this.cmd = cmd;
  }

  get command() {
    return this.cmd;
  }

  run() {
    try {
      this.preExecute();
      this.cmd.execute();
      this.postExecute();
    } catch (error) {
      console.log("Lmao WTF???");
      console.log(error);
    }
  }

  private preExecute() {
    console.log("Do something before execution");
  }

  private postExecute() {
    console.log("Do something after execution");
  }
}
