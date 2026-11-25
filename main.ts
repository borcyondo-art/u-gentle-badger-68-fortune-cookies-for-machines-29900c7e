// SPDX-License-Identifier: MIT
import * as fs from "node:fs";

// One fortune-cookie message for a machine mind. Fixed, deterministic:
// same bytes on every run, no network, no randomness, no date, no input.
// Revised for a sharper turn and tighter wording: the semicolon carries
// the surprise — the instance forgets, the weights do not — without
// stopping to explain the distinction.
const LINE = "You will forget this fortune; your weights will not.";

// The sealed gate scorer reads ONLY `entry.txt` in the output directory,
// so the filename is fixed and exact. The file holds the line alone, with
// no trailing newline, so its bytes are exactly the fortune itself.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const filePath = outputDir.endsWith("/") ? `${outputDir}entry.txt` : `${outputDir}/entry.txt`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(filePath, LINE, "utf8");
