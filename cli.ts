#!/usr/bin/env node
import { Command } from 'commander';
import { gto9 } from 'g-to-9';
import { version } from './package.json';

const program = new Command();

program.version(version);

program
  .argument('<text>')
  .description(`replace all 'g' to '9'

Examples:
  $ gto9 chinsung
  $ gto9 gg is good game
  $ gto9 'gg is good game'`)
  .action(() => {
    const input = program.args.join(' ');
    const result = gto9(input);
    console.log(result);
  });

program.parse();
