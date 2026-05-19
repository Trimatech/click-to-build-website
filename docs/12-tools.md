---
id: tools
title: Tools Dock
---

The **Tools** dock is a separate plugin window for runtime cutting utilities (opened from the main toolbar).

:::warning Mesh parts must be saved to Roblox manually

Cutting and sweep tools use `GeometryService` (`SweepPartAsync`, `SubtractAsync`, and similar). The results are often **MeshPart** instances or mesh-backed **UnionOperation** parts.

Those meshes live in your open place in Studio, but Roblox does **not** upload them as assets automatically. Before you publish or hand off the place:

1. Select each cut result (or the parent model).
2. Save or publish the mesh to Roblox from Studio (for example **Save to Roblox** / mesh export via the properties or Asset Manager workflow you normally use for CSG output).

If you skip this step, geometry can look fine in Studio but fail to load or appear broken for players in a published experience.

:::

:::tip
You can also cut along a Bezier path from **Shape Builder** using **Cut along path (SweepPartAsync)** at the bottom of the Bezier Path settings. See [Shape Builder — Cut along path](/docs/shape-builder#cut-along-path).
:::

## Bezier sweep cut

Cut existing parts along a Bezier path using `GeometryService.SweepPartAsync`. Configure thickness, depth (in studs or as a layer count), and optionally recolor the resulting pieces.

![Tools Bezier cut - screenshot needed](/img/placeholder.svg)

### Settings

- **Cut Thickness**: Width of the cutting sweep (studs).
- **Depth (studs) / Depth (layers)**: How deep the cut goes — either a fixed stud depth or a number of part layers.
- **Recolor cut pieces**: Tint separated pieces for easier inspection.

## Related

- [Shape Builder — Curve (Bezier Path)](/docs/shape-builder#shape---curve-bezier-path)
- [Changelog — 1.7.3](/docs/changelog#173)
