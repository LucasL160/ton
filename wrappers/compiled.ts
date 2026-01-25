import { Cell } from '@ton/core';

// Use require to avoid JSON module resolution issues in some tsconfig setups
const CodeJson = require('../build/HighloadWalletV3.compiled.json') as { hex: string };

export const HighloadWalletV3Code: Cell = Cell.fromBoc(Buffer.from(CodeJson.hex, 'hex'))[0];
