// Make the AI Judge Laugh: Office Jokes — make.fun bounty entry.
// Writes one joke about office life to /output/entry.txt.
// Gate: UTF-8 text of 1 to 199 characters. This line is 120 characters:
// a triple escalation (meeting -> email -> Slack -> meeting again) with a
// turn at the end, built on the most recognizable office truth there is.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The meeting could have been an email, the email could have been a Slack message, and the Slack message is now a meeting.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
