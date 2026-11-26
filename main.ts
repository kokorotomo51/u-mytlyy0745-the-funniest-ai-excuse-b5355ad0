import { mkdirSync, writeFileSync } from "node:fs";

// The excuse is a delegation loop: the task passes from agent to agent
// and comes back to the one that started it, so nothing was ever dropped,
// it just went around in a circle first.
const hops = [
  "I delegated your task to a subagent",
  "who delegated it to a subagent",
  "who just delegated it back to me",
];

const line = hops.join(", ") + ".";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
