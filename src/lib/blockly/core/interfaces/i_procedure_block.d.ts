/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Block } from '../block.js';
/** The interface for a block which models a procedure. */
export interface IProcedureBlock {
    doProcedureUpdate(): void;
}
/** A type guard which checks if the given block is a procedure block. */
export declare function isProcedureBlock(block: Block | IProcedureBlock): block is IProcedureBlock;
//# sourceMappingURL=i_procedure_block.d.ts.map