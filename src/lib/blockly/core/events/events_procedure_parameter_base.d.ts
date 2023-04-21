/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { IParameterModel } from '../interfaces/i_parameter_model.js';
import { IProcedureModel } from '../interfaces/i_procedure_model.js';
import { ProcedureBase, ProcedureBaseJson } from './events_procedure_base.js';
import type { Workspace } from '../workspace.js';
/**
 * The base event for an event associated with a procedure parameter.
 */
export declare abstract class ProcedureParameterBase extends ProcedureBase {
    readonly parameter: IParameterModel;
    constructor(workspace: Workspace, model: IProcedureModel, parameter: IParameterModel);
    /**
     * Encode the event as JSON.
     *
     * @returns JSON representation.
     */
    toJson(): ProcedureParameterBaseJson;
}
export interface ProcedureParameterBaseJson extends ProcedureBaseJson {
    parameterId: string;
}
//# sourceMappingURL=events_procedure_parameter_base.d.ts.map