import Entry from "./migration_project_1/command";
import CmdAtoA1 from "./migration_project_1/command/a_to_a1";
import CmdBtoB1 from "./migration_project_1/command/b_to_b1";

const tusss = new Entry(new CmdAtoA1());
tusss.run();

tusss.command = new CmdBtoB1();
tusss.run();
