---
id: tools
title: Tools Dock
---

The **Tools** dock is a separate plugin window for runtime utilities (opened from the main toolbar). It includes cutting tools for existing geometry, the Nudger for tiny part moves/resizes, the Resizer for stretching whole builds, and the Door tool for hinging gates.

## Selecting and pinning tools

Clicking a tool in the grid selects it **and starts it immediately**; clicking the active tool again stops it. The currently selected tool shows a pin button; pinning adds it to the viewport **PINNED** bar so you can launch it without reopening the Tools dock.

- **Katana**: draw a straight slash across the screen to cut touched parts.
- **Laser**: drag a freehand path to cut along the traced line.
- **Nudger**: click a part face to move or resize by a precise step amount.
- **Door**: click a post, then a gate, to create a working hinged door.
- **Resizer**: select many parts and drag a handle to resize the whole build in one direction.

Pinned tools use the same active/inactive state as the Tools dock. Click a pinned tool once to start it; click the active pinned tool again to stop.

## Nudger

Use Nudger when two coplanar parts flicker from z-fighting, or when a part needs a tiny face-level size correction.

![Nudger - screenshot needed](/img/placeholder.svg)

### Settings

- **Operation**:
    - Move part: translates the whole clicked part along the clicked face normal.
    - Resize part: grows or shrinks only the clicked face; the opposite face stays in place.
- **Direction**:
    - Move part: Pull (toward you) or Push (away).
    - Resize part: Grow outward or Shrink inward.
- **Preview on hover**: Temporarily applies the nudge while hovering, then reverts when you move away. Clicking always commits.
- **Step (studs)**: Amount applied per click. Use tiny values like `0.001` for z-fighting fixes, or larger values for coarse alignment.
- **Quick step**: One-tap common step sizes from `1` down to `0.0001`.

:::warning Mesh parts must be saved to Roblox manually

Katana and Laser use `GeometryService` (`SweepPartAsync`, `SubtractAsync`, and similar). The results are often **MeshPart** instances or mesh-backed **UnionOperation** parts.

Those meshes live in your open place in Studio, but Roblox does **not** upload them as assets automatically. Before you publish or hand off the place:

1. Select each cut result (or the parent model).
2. Save or publish the mesh to Roblox from Studio (for example **Save to Roblox** / mesh export via the properties or Asset Manager workflow you normally use for CSG output).

If you skip this step, geometry can look fine in Studio but fail to load or appear broken for players in a published experience.

:::

:::tip
You can also cut along a Bezier path from **Shape Builder** using **Cut along path (SweepPartAsync)** at the bottom of the Bezier Path settings. See [Shape Builder — Cut along path](/docs/shape-builder#cut-along-path).
:::

## Katana and Laser cuts

Cut existing parts with either a straight screen slash (Katana) or a freehand traced path (Laser). Configure thickness, depth (in studs or as a layer count), and optionally recolor the resulting pieces.

![Tools Bezier cut - screenshot needed](/img/placeholder.svg)

### Settings

- **Cut Thickness**: Width of the cutting sweep (studs).
- **Keep cutter part (debug)**: Katana-only option that leaves the temporary cutter slab in the workspace for inspection.
- **Depth (studs) / Depth (layers)**: How deep the cut goes — either a fixed stud depth or a number of camera-facing part layers.
- **Cut Layers (0 = all touched)**: In layer mode, limit how many touched parts are cut. Use `0` to cut everything the stroke touches.
- **Recolor cut pieces**: Tint separated pieces for easier inspection.

## Resizer

Resize many parts at once in the same visual direction — like Studio's Scale tool, but for a whole build. Click parts to select them (Shift-click adds/removes, or use the Explorer), then drag one of the small per-axis cube handles that appear on the selection bounds. Handles stay the same size on screen and work on rotated parts.

![Resizer - screenshot needed](/img/placeholder.svg)

In the default **Stretch** mode the selection resizes like one solid shape: parts scale and shift together so walls, roofs, and frames stay flush — widening a house keeps its wedge roof a perfect triangle. Anything much shorter than the selection along the drag direction counts as a *small detail* and keeps its size: glued in place when it sits at an end (window frame sides, house corner walls), or following its relative spot when it sits in the middle (windows spread evenly along a widened wall).

### Settings

- **Resize style**:
    - Stretch: the selection resizes like one solid shape (see above).
    - Same amount: every part grows by the same number of studs along its own axis closest to the drag — good for making all fence posts equally taller.
- **Small details**: what happens to parts and models below the Stretch threshold.
    - Keep size: they keep their exact size, glued to their end or following their spot in the middle.
    - Stretch: small models stretch too, but only in their middle — a window's pane grows while its thin frame parts keep their size.
- **Stretch threshold (%)**: how much of the selection's length (along the drag direction) something must cover to stretch. Covers more → it stretches; covers less → it counts as a small detail and keeps its size. At the default **35%** a house wall stretches while windows and door frames stay. Lower it to stretch more things, raise it to protect more.
- **Highlight small details**: hover (or drag) a resize handle to outline every part that will keep its size in that drag direction with an orange outline. Unmarked parts stretch. Handy for tuning the threshold before you drag.
- **Resize from**:
    - One side: the side opposite the dragged handle stays anchored; only the dragged side moves (like Studio's resize).
    - Center: the selection grows equally in both directions from its middle.
- **Handle direction**:
    - World: handles follow the world X/Y/Z axes.
    - Last part: handles follow the orientation of the last selected part, so a rotated build resizes along its own axes.
- **Snap increment**: the drag snaps the size change to steps of this many studs. `0` turns snapping off for freeform resizing.
- **Quick snap**: one-tap common increments (`4`, `2`, `1`, `0.5`, `0.1`, Off).

## Door

Turn any post-and-gate pair into a working swinging door. Click the **post** (the fixed side), then click the **gate**. A vertical hinge is added at the gate's edge nearest the post — the post is anchored, the gate is un-anchored and swings.

![Door - screenshot needed](/img/placeholder.svg)

### Settings

- **Weld gate into one assembly**: welds every gate part to the hinged part and un-anchors them, so a multi-part gate model swings as one body.
- **Anchor the post**: keeps the fixed side anchored in place.
- **Limit swing angle**: constrains the hinge; **Swing limit (± degrees)** sets how far the gate can rotate each way.

## Related

- [Shape Builder — Curve (Bezier Path)](/docs/shape-builder#shape---curve-bezier-path)
- [Changelog — 1.9.11](/docs/changelog#1911)
