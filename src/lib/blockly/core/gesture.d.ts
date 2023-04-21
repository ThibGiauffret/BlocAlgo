/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import './events/events_click.js';
import type { BlockSvg } from './block_svg.js';
import * as browserEvents from './browser_events.js';
import { BubbleDragger } from './bubble_dragger.js';
import type { Field } from './field.js';
import type { IBlockDragger } from './interfaces/i_block_dragger.js';
import type { IBubble } from './interfaces/i_bubble.js';
import type { IFlyout } from './interfaces/i_flyout.js';
import { Coordinate } from './utils/coordinate.js';
import { WorkspaceDragger } from './workspace_dragger.js';
import type { WorkspaceSvg } from './workspace_svg.js';
/**
 * Class for one gesture.
 *
 * @alias Blockly.Gesture
 */
export declare class Gesture {
    private readonly creatorWorkspace;
    /**
     * The position of the pointer when the gesture started.  Units are CSS
     * pixels, with (0, 0) at the top left of the browser window (pointer event
     * clientX/Y).
     */
    private mouseDownXY_;
    private currentDragDeltaXY_;
    /**
     * The bubble that the gesture started on, or null if it did not start on a
     * bubble.
     */
    private startBubble_;
    /**
     * The field that the gesture started on, or null if it did not start on a
     * field.
     */
    private startField_;
    /**
     * The block that the gesture started on, or null if it did not start on a
     * block.
     */
    private startBlock_;
    /**
     * The block that this gesture targets.  If the gesture started on a
     * shadow block, this is the first non-shadow parent of the block.  If the
     * gesture started in the flyout, this is the root block of the block group
     * that was clicked or dragged.
     */
    private targetBlock_;
    /**
     * The workspace that the gesture started on.  There may be multiple
     * workspaces on a page; this is more accurate than using
     * Blockly.common.getMainWorkspace().
     */
    protected startWorkspace_: WorkspaceSvg | null;
    /**
     * Whether the pointer has at any point moved out of the drag radius.
     * A gesture that exceeds the drag radius is a drag even if it ends exactly
     * at its start point.
     */
    private hasExceededDragRadius_;
    /**
     * A handle to use to unbind a pointermove listener at the end of a drag.
     * Opaque data returned from Blockly.bindEventWithChecks_.
     */
    protected onMoveWrapper_: browserEvents.Data | null;
    /**
     * A handle to use to unbind a pointerup listener at the end of a drag.
     * Opaque data returned from Blockly.bindEventWithChecks_.
     */
    protected onUpWrapper_: browserEvents.Data | null;
    /** The object tracking a bubble drag, or null if none is in progress. */
    private bubbleDragger_;
    /** The object tracking a block drag, or null if none is in progress. */
    private blockDragger_;
    /**
     * The object tracking a workspace or flyout workspace drag, or null if none
     * is in progress.
     */
    private workspaceDragger_;
    /** The flyout a gesture started in, if any. */
    private flyout_;
    /** Boolean for sanity-checking that some code is only called once. */
    private calledUpdateIsDragging_;
    /** Boolean for sanity-checking that some code is only called once. */
    private hasStarted_;
    /** Boolean used internally to break a cycle in disposal. */
    protected isEnding_: boolean;
    private healStack_;
    /** The event that most recently updated this gesture. */
    private mostRecentEvent_;
    /** Boolean for whether or not this gesture is a multi-touch gesture. */
    private isMultiTouch_;
    /** A map of cached points used for tracking multi-touch gestures. */
    private cachedPoints;
    /**
     * This is the ratio between the starting distance between the touch points
     * and the most recent distance between the touch points.
     * Scales between 0 and 1 mean the most recent zoom was a zoom out.
     * Scales above 1.0 mean the most recent zoom was a zoom in.
     */
    private previousScale_;
    /** The starting distance between two touch points. */
    private startDistance_;
    /**
     * A handle to use to unbind the second pointerdown listener
     * at the end of a drag.
     * Opaque data returned from Blockly.bindEventWithChecks_.
     */
    private onStartWrapper_;
    /** Boolean for whether or not the workspace supports pinch-zoom. */
    private isPinchZoomEnabled_;
    /**
     * The owner of the dropdownDiv when this gesture first starts.
     * Needed because we'll close the dropdown before fields get to
     * act on their events, and some fields care about who owns
     * the dropdown.
     */
    currentDropdownOwner: Field | null;
    /**
     * @param e The event that kicked off this gesture.
     * @param creatorWorkspace The workspace that created this gesture and has a
     *     reference to it.
     */
    constructor(e: PointerEvent, creatorWorkspace: WorkspaceSvg);
    /**
     * Sever all links from this object.
     *
     * @internal
     */
    dispose(): void;
    /**
     * Update internal state based on an event.
     *
     * @param e The most recent pointer event.
     */
    private updateFromEvent_;
    /**
     * DO MATH to set currentDragDeltaXY_ based on the most recent pointer
     * position.
     *
     * @param currentXY The most recent pointer position, in pixel units,
     *     with (0, 0) at the window's top left corner.
     * @returns True if the drag just exceeded the drag radius for the first time.
     */
    private updateDragDelta_;
    /**
     * Update this gesture to record whether a block is being dragged from the
     * flyout.
     * This function should be called on a pointermove event the first time
     * the drag radius is exceeded.  It should be called no more than once per
     * gesture. If a block should be dragged from the flyout this function creates
     * the new block on the main workspace and updates targetBlock_ and
     * startWorkspace_.
     *
     * @returns True if a block is being dragged from the flyout.
     */
    private updateIsDraggingFromFlyout_;
    /**
     * Update this gesture to record whether a bubble is being dragged.
     * This function should be called on a pointermove event the first time
     * the drag radius is exceeded.  It should be called no more than once per
     * gesture. If a bubble should be dragged this function creates the necessary
     * BubbleDragger and starts the drag.
     *
     * @returns True if a bubble is being dragged.
     */
    private updateIsDraggingBubble_;
    /**
     * Check whether to start a block drag. If a block should be dragged, either
     * from the flyout or in the workspace, create the necessary BlockDragger and
     * start the drag.
     *
     * This function should be called on a pointermove event the first time
     * the drag radius is exceeded.  It should be called no more than once per
     * gesture. If a block should be dragged, either from the flyout or in the
     * workspace, this function creates the necessary BlockDragger and starts the
     * drag.
     *
     * @returns True if a block is being dragged.
     */
    private updateIsDraggingBlock_;
    /**
     * Check whether to start a workspace drag. If a workspace is being dragged,
     * create the necessary WorkspaceDragger and start the drag.
     *
     * This function should be called on a pointermove event the first time
     * the drag radius is exceeded.  It should be called no more than once per
     * gesture. If a workspace is being dragged this function creates the
     * necessary WorkspaceDragger and starts the drag.
     */
    private updateIsDraggingWorkspace_;
    /**
     * Update this gesture to record whether anything is being dragged.
     * This function should be called on a pointermove event the first time
     * the drag radius is exceeded.  It should be called no more than once per
     * gesture.
     */
    private updateIsDragging_;
    /** Create a block dragger and start dragging the selected block. */
    private startDraggingBlock_;
    /** Create a bubble dragger and start dragging the selected bubble. */
    private startDraggingBubble_;
    /**
     * Start a gesture: update the workspace to indicate that a gesture is in
     * progress and bind pointermove and pointerup handlers.
     *
     * @param e A pointerdown event.
     * @internal
     */
    doStart(e: PointerEvent): void;
    /**
     * Bind gesture events.
     *
     * @param e A pointerdown event.
     * @internal
     */
    bindMouseEvents(e: PointerEvent): void;
    /**
     * Handle a pointerdown event.
     *
     * @param e A pointerdown event.
     * @internal
     */
    handleStart(e: PointerEvent): void;
    /**
     * Handle a pointermove event.
     *
     * @param e A pointermove event.
     * @internal
     */
    handleMove(e: PointerEvent): void;
    /**
     * Handle a pointerup event.
     *
     * @param e A pointerup event.
     * @internal
     */
    handleUp(e: PointerEvent): void;
    /**
     * Handle a pointerdown event and keep track of current
     * pointers.
     *
     * @param e A pointerdown event.
     * @internal
     */
    handleTouchStart(e: PointerEvent): void;
    /**
     * Handle a pointermove event and zoom in/out if two pointers
     * are on the screen.
     *
     * @param e A pointermove event.
     * @internal
     */
    handleTouchMove(e: PointerEvent): void;
    /**
     * Handle pinch zoom gesture.
     *
     * @param e A pointermove event.
     */
    private handlePinch_;
    /**
     * Handle a pointerup event and end the gesture.
     *
     * @param e A pointerup event.
     * @internal
     */
    handleTouchEnd(e: PointerEvent): void;
    /**
     * Helper function returning the current touch point coordinate.
     *
     * @param e A pointer event.
     * @returns The current touch point coordinate
     * @internal
     */
    getTouchPoint(e: PointerEvent): Coordinate | null;
    /**
     * Whether this gesture is part of a multi-touch gesture.
     *
     * @returns Whether this gesture is part of a multi-touch gesture.
     * @internal
     */
    isMultiTouch(): boolean;
    /**
     * Cancel an in-progress gesture.  If a workspace or block drag is in
     * progress, end the drag at the most recent location.
     *
     * @internal
     */
    cancel(): void;
    /**
     * Handle a real or faked right-click event by showing a context menu.
     *
     * @param e A pointerdown event.
     * @internal
     */
    handleRightClick(e: PointerEvent): void;
    /**
     * Handle a pointerdown event on a workspace.
     *
     * @param e A pointerdown event.
     * @param ws The workspace the event hit.
     * @internal
     */
    handleWsStart(e: PointerEvent, ws: WorkspaceSvg): void;
    /**
     * Fires a workspace click event.
     *
     * @param ws The workspace that a user clicks on.
     */
    private fireWorkspaceClick_;
    /**
     * Handle a pointerdown event on a flyout.
     *
     * @param e A pointerdown event.
     * @param flyout The flyout the event hit.
     * @internal
     */
    handleFlyoutStart(e: PointerEvent, flyout: IFlyout): void;
    /**
     * Handle a pointerdown event on a block.
     *
     * @param e A pointerdown event.
     * @param block The block the event hit.
     * @internal
     */
    handleBlockStart(e: PointerEvent, block: BlockSvg): void;
    /**
     * Handle a pointerdown event on a bubble.
     *
     * @param e A pointerdown event.
     * @param bubble The bubble the event hit.
     * @internal
     */
    handleBubbleStart(e: PointerEvent, bubble: IBubble): void;
    /** Execute a bubble click. */
    private doBubbleClick_;
    /** Execute a field click. */
    private doFieldClick_;
    /** Execute a block click. */
    private doBlockClick_;
    /**
     * Execute a workspace click. When in accessibility mode shift clicking will
     * move the cursor.
     *
     * @param _e A pointerup event.
     */
    private doWorkspaceClick_;
    /**
     * Move the dragged/clicked block to the front of the workspace so that it is
     * not occluded by other blocks.
     */
    private bringBlockToFront_;
    /**
     * Record the field that a gesture started on.
     *
     * @param field The field the gesture started on.
     * @internal
     */
    setStartField(field: Field): void;
    /**
     * Record the bubble that a gesture started on
     *
     * @param bubble The bubble the gesture started on.
     * @internal
     */
    setStartBubble(bubble: IBubble): void;
    /**
     * Record the block that a gesture started on, and set the target block
     * appropriately.
     *
     * @param block The block the gesture started on.
     * @internal
     */
    setStartBlock(block: BlockSvg): void;
    /**
     * Record the block that a gesture targets, meaning the block that will be
     * dragged if this turns into a drag.  If this block is a shadow, that will be
     * its first non-shadow parent.
     *
     * @param block The block the gesture targets.
     */
    private setTargetBlock_;
    /**
     * Record the workspace that a gesture started on.
     *
     * @param ws The workspace the gesture started on.
     */
    private setStartWorkspace_;
    /**
     * Record the flyout that a gesture started on.
     *
     * @param flyout The flyout the gesture started on.
     */
    private setStartFlyout_;
    /**
     * Whether this gesture is a click on a bubble.  This should only be called
     * when ending a gesture (pointerup).
     *
     * @returns Whether this gesture was a click on a bubble.
     */
    private isBubbleClick_;
    /**
     * Whether this gesture is a click on a block.  This should only be called
     * when ending a gesture (pointerup).
     *
     * @returns Whether this gesture was a click on a block.
     */
    private isBlockClick_;
    /**
     * Whether this gesture is a click on a field.  This should only be called
     * when ending a gesture (pointerup).
     *
     * @returns Whether this gesture was a click on a field.
     */
    private isFieldClick_;
    /**
     * Whether this gesture is a click on a workspace.  This should only be called
     * when ending a gesture (pointerup).
     *
     * @returns Whether this gesture was a click on a workspace.
     */
    private isWorkspaceClick_;
    /**
     * Whether this gesture is a drag of either a workspace or block.
     * This function is called externally to block actions that cannot be taken
     * mid-drag (e.g. using the keyboard to delete the selected blocks).
     *
     * @returns True if this gesture is a drag of a workspace or block.
     * @internal
     */
    isDragging(): boolean;
    /**
     * Whether this gesture has already been started.  In theory every pointerdown
     * has a corresponding pointerup, but in reality it is possible to lose a
     * pointerup, leaving an in-process gesture hanging.
     *
     * @returns Whether this gesture was a click on a workspace.
     * @internal
     */
    hasStarted(): boolean;
    /**
     * Get a list of the insertion markers that currently exist.  Block drags have
     * 0, 1, or 2 insertion markers.
     *
     * @returns A possibly empty list of insertion marker blocks.
     * @internal
     */
    getInsertionMarkers(): BlockSvg[];
    /**
     * Gets the current dragger if an item is being dragged. Null if nothing is
     * being dragged.
     *
     * @returns The dragger that is currently in use or null if no drag is in
     *     progress.
     */
    getCurrentDragger(): WorkspaceDragger | BubbleDragger | IBlockDragger | null;
    /**
     * Is a drag or other gesture currently in progress on any workspace?
     *
     * @returns True if gesture is occurring.
     */
    static inProgress(): boolean;
}
//# sourceMappingURL=gesture.d.ts.map