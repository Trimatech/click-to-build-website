---
id: changelog
title: Changelog / Version History
---

This page lists notable changes across releases. Use it to track new features, improvements, and fixes.

## Unreleased 🧪

-   EditableMesh as a result from Shape Builder and Puncher
-   Rounded Block

## 1.3.0

-   Grid Snap: while holding Shift to disable snapping, hold Shift+Option to apply precision rounding to 0.1 on movements/placements.
-   Block: new draw mode — 3 Points (Square Center to Side). Constrains width and depth to be equal when using the 3‑point rectangle flow.
-   Added Pyramid shape.
-   Added Pill shape.
-   Added Platform shape.
-   Small-scale building improvements: better preview sizes, snap indicators scale with zoom.

## 1.2.0

-   Model Placer — Template mode enhancements:

    -   Start/End Segment %: define start/end caps and extendable/repeating middle segment
    -   Spacing applies in None/Copy placement modes
    -   Template preview is interactive (zoom and rotate)
    -   Persist template specific settings to template as attributes.

## 1.1.0

-   Grid Mode — Camera: Lock the grid to a plane in front of the camera with configurable distance and axis (X/Y/Z/None). Improves free‑space drawing without relying on a surface.
-   Align grid to current edge: Rotate and position the grid to the active edge direction for precise edge‑aligned placement in both Shape Builder and Model Placer.

-   Demos: [Camera grid mode](https://www.youtube.com/watch?v=9_SBb4Cul5Q), [Align grid to edge (Model Placer)](https://www.youtube.com/watch?v=oiYGyTu9LJc), [Align grid to edge (Shape Builder)](https://www.youtube.com/watch?v=nvRp8FfR1eQ)

## 1.0.9

-   Punch feature: Subtract shapes from parts (Shape Builder)
-   Supports cutters: Rectangle, Cylinder, Sphere, Wedge, CornerWedge, Polygon, Triangle, Sector, Donut
-   Modes:
    -   Cut Parts into multiple parts (Rectangle only) with options: Cut from Wedge, Keep Cutout, fallback to solid modeling for non‑cuttable parts
    -   Use Solid Modeling to punch holes (all non‑rectangle shapes)
-   Scope options: All touching parts or Only selected parts
-   Solid Modeling option: Merge into a single union
-   Note: Polygon, Donut, and Sector cutters are experimental due to triangulation accuracy
-   Demos: [Demo of Rectangle cutter cutting part into wedges as parts](https://www.youtube.com/watch?v=_vBB56djae0), [Demo of all other shapes cutting using Solid Modeling](https://www.youtube.com/watch?v=jrOoAEcGit8)

## 1.0.8

-   Polygon Edit Mode: move, add, and delete points with full undo/redo
-   Toggle with Shift+G or via the Edit Mode checkbox; works during creation and on selected existing polygons
-   Grid snapping supported; hold Shift to temporarily ignore grid while moving points
-   Works on any surface; edits are integrated with history/undo
-   Demos: [Enter edit mode while creating](https://youtu.be/1KJKzWey1Ac), [Edit polygon from selection](https://youtu.be/XTz_gAncbF4)

## 1.0.7

-   Polygon from Selection:
    -   Boundary polygon (convex hull) from selected parts
    -   Exact polygon via boundary face detection; finds external boundaries and connects them into polygon points
-   Grid Snap Control: hold Shift to temporarily disable grid snapping while building (with visible indicator)

## 1.0.0

-   Initial public release of Click to Build.
-   Shape Builder, Model Placer, and Structure Builder.
-   Grid snapping, distance labels, and previews.
