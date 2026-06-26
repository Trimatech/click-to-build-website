---
id: tools
title: Tools Dock
---

The **Tools** dock is a separate plugin window for runtime utilities (opened from the main toolbar). It includes cutting tools for existing geometry and the Nudger for tiny part moves/resizes.

## Selecting and pinning tools

Select a tool from the tool grid, then use the main Start/Stop action to activate it. The currently selected tool shows a pin button; pinning adds it to the viewport **PINNED** bar so you can launch it without reopening the Tools dock.

- **Katana**: draw a straight slash across the screen to cut touched parts.
- **Laser**: drag a freehand path to cut along the traced line.
- **Nudger**: click a part face to move or resize by a precise step amount.

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

## Related

- [Shape Builder — Curve (Bezier Path)](/docs/shape-builder#shape---curve-bezier-path)
- [Changelog — 1.9.11](/docs/changelog#1911)
