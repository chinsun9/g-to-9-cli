#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const g_to_9_1 = require("g-to-9");
const package_json_1 = require("./package.json");
const program = new commander_1.Command();
program.version(package_json_1.version);
program
    .argument('<text>')
    .description(`replace all 'g' to '9'

Examples:
  $ gto9 chinsung
  $ gto9 gg is good game
  $ gto9 'gg is good game'`)
    .action(() => {
    const input = program.args.join(' ');
    const result = g_to_9_1.gto9(input);
    console.log(result);
});
program.parse();
