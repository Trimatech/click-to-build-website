---
id: changelog
title: Changelog / Version History
---

This page lists notable changes across releases. Use it to track new features, improvements, and fixes.

## Unreleased 🧪

- EditableMesh as a result from Shape Builder and Puncher
- Shape Builder: Adding of arched corner (half-arch corner)
- **Shape Builder: Edit Mode for Shapes** (In Progress): Add edit mode functionality for shapes (Rectangle, QuadBox, Roundbox, PillBox, Pyramid, Platform, Wedge, CornerWedge, Plane, TriangleFrom4Points) similar to Polygon/Bezier. Points should be constrained to their defining mode: depth points only move in depth direction, height points only move along work plane Y axis, width points move freely on work plane. When entering edit mode during point definition, mouse position should be added to points array.

## 1.9.0

- **Shape Builder: New Voxel tool**: Build with whole grid cells — hover a cell and drag up to extrude blocks (green preview); hover the top of a block you made and drag down to remove cells (red preview).
    - Respects the current work plane and grid size; blocks are placed and carved relative to the surface you are building on.
    - Removal cuts through stacked blocks in the column, using boolean subtraction for non-box parts when needed.
    ![Voxel tool - gif needed](/img/placeholder.svg)
- **Voxel Optimize**: When enabled, adjacent same-height blocks with matching material (material, variant, color, transparency, reflectance, textures) merge into larger rectangles — no CSG, rectangle-only retiling.
- **Voxel Advanced building**: When enabled, hovering near a cell edge extrudes a wedge rising at that edge; hovering near a corner gives a corner wedge peaking there. Hover a wedge's top edge (or a corner wedge's peak) to resize it — drag to zero to remove it.
- **Output routing overlay**: A compact viewport info box shows where generated content goes, with a quick Workspace ↔ Selection toggle and a lock to pin routing to the current selection.

## 1.8.0

- **Shape Builder: New Stamp tool**: Hover a part's face and click to stack a new part that matches the face footprint, extruded outward along the face normal.
    - Blocks stay blocks; cylinder caps stay cylinders — the stamped part inherits the hovered face's shape and footprint.
    - **Height (studs)**: How far the new part is extruded outward from the hovered face.
    - **Lip (widen on all sides)**: Optionally grow the footprint outward by a set number of studs.
    - **Dynamic lip**: When enabled, the lip overhangs only the edge/corner under the cursor instead of widening every side (hover the center to widen all sides).
    ![Stamp tool - gif needed](/img/placeholder.svg)
- **Shape Builder: Preset Size (locked dimensions)**: In Width → Depth → Height mode you can lock Width, Depth, and/or Height to a fixed value to skip that click.
    - Lock Height to stamp parts at a constant height; lock Width/Depth for repeatable footprints.
    - Leave a dimension empty (0) to keep drawing it dynamically with the mouse.
    ![Preset Size inputs - screenshot needed](/img/placeholder.svg)
- **Angle indicator while drawing**: Live X/Z component lines and the angle between the active segments are shown as you place points, with a right-angle marker and perpendicular indicator when segments are axis-parallel.
    ![Angle indicator - gif needed](/img/placeholder.svg)
- **Surface Settings: Ignore invisible parts**: Skip fully transparent/invisible parts when snapping and cutting, so hidden helpers don't interfere with building.
- **Model Placer: Flip Model**: New toggle reverses the placement axis direction, with a matching axis indicator and offset handling for templates that were authored facing the other way.
- **Grid rendering improvements**: Refreshed grid colors and extent calculation for clearer, more consistent grids across modes.

## 1.7.3

- **Curve Library**: One-click Bezier presets — Circle, Rounded Square, Capsule, Half-circle, Star, Heart, Infinity ∞, Wave, and Spring. Save and reload your own curves from the panel.
- **Bezier Path — closed curves**: Closed-loop presets and improved handling when the path forms a loop.
- **Bezier Path — sharp bends**: Triangle bevels at tight corners for cleaner geometry on sharp paths.
- **Bezier edit mode — resize & rotate**: Bounding-box handles with axis rods, plus a rotation handle to spin the whole curve. W / H / D labels show box dimensions while editing.
- **Bezier Path — Cut along path**: Red button at the bottom of Bezier Path settings sweeps a BasePart template along the curve and subtracts from touching parts (`SweepPartAsync`).
- **Tools dock — Bezier sweep cut**: Cut parts along a Bezier path with configurable thickness, depth (studs or layer count), and optional recolor of cut pieces.

## 1.7.2

- **Template history dropdown**: Faster re-selection of recently used templates in Model Placer and Shape Builder.
- Template selector and segment preview performance improvements.

## 1.7.0

- **Shape Builder: New shape — Stairs**: Create diagonal staircases with configurable step dimensions.
    - Draw mode: Width → Depth → Height (same as Block)
    - Configurable step height and step depth
    - Gap control between steps (can be negative for overlapping steps)
    - Extend to floor option to make steps reach the base level
    - Steps automatically calculate along the diagonal from start to end point
    - Perfect for creating staircases, ramps, and stepped structures
- **Shape Builder: New shape — Arc**: Create smooth curved arches and arcs using cubic Bezier curves.
    - Six quick preset styles: Default, Rounded, Horseshoe, Pointed, Small point, Ogee
    - Configurable arc angle (-360° to 360°)
    - Handle powers for fine-tuning curvature at center and endpoints
    - Thickness and segment width controls for arc resolution
    - Fill corners option for seamless base transitions
    - Perfect for architectural elements like doorways, windows, bridges, and decorative arches
- **Curve Edit Mode: Non-mirroring anchor points**: Added support for non-mirroring anchor points in curve edit mode, giving you more control over Bezier curve handles for asymmetric curves.

## 1.6.0

- **Shape Builder: New shape — Curve (Bezier Path)**: Create smooth curves by placing anchor points with Catmull-Rom interpolation.
    - Alignment modes: Center, Left, Right, Fill, Touch
    - Template support with configurable axis orientation
    - Edit Mode for adjusting points after placement
    - 3D curve support with parallel transport for twist-free orientation
- **Template Selector: History dropdown**: Quickly re-select previously used templates from a dropdown without navigating the Explorer.
- Advanced Settings: Added **Output To** so builders can direct generated folders/models to `Workspace` or the first selected folder/model in the Explorer.
    - Automatic ancestor lookup: if you select a part, the plugin climbs up the hierarchy until it finds a folder/model.
    - Safe fallback to `Workspace` when nothing valid is selected.
    - **Selection Lock**: choose "Follow Selection" to update the target as you click around, or "Lock Current" to keep routing to a specific folder/model.
- Advanced Settings: Added **Show coordinates UI** to display point coordinates (X, Y, Z) while placing.

## 1.5.0

- New shape: Plane (Fixed Height / Fixed Depth)
- Add automatic start/end cap cutters for Model Placer template
- Magic Merge wedge improvemnt, extra cap is filed with corner wedge
- Fixes to Grid Mode: World Grid
- Fixes to Punch Mode
- Fixes to Snap Points

## 1.4.0

- Shape Builder: Added Roundbox (fully rounded rectangle) with two radius modes:
    - Define Radius Last (extra point on top face)
    - Predefined Radius (numeric input)
- Shape Builder: Added Quadbox (lightweight rounded rectangle) sharing the same draw and radius modes as Roundbox.
- Draw Modes: Added 3‑point modes (Center → Corner, Square: Center → Side) to Block, Pyramid, Platform, PillBox, Roundbox, Quadbox.

## 1.3.0

- Grid Snap: while holding Shift to disable snapping, hold Shift+Option to apply precision rounding to 0.1 on movements/placements.
- Block: new draw mode — Square: Center → Side. Constrains width and depth to be equal when using the 3‑point rectangle flow.
- Added Pyramid shape.
- Added Pill shape.
- Added Platform shape.
- Small-scale building improvements: better preview sizes, snap indicators scale with zoom.

## 1.2.0

- Model Placer — Template mode enhancements:
    - Start/End Segment %: define start/end caps and extendable/repeating middle segment
    - Spacing applies in None/Copy placement modes
    - Template preview is interactive (zoom and rotate)
    - Persist template specific settings to template as attributes.

## 1.1.0

- Grid Mode — Camera: Lock the grid to a plane in front of the camera with configurable distance and axis (X/Y/Z/None). Improves free‑space drawing without relying on a surface.
- Align grid to current edge: Rotate and position the grid to the active edge direction for precise edge‑aligned placement in both Shape Builder and Model Placer.

- Demos: [Camera grid mode](https://www.youtube.com/watch?v=9_SBb4Cul5Q), [Align grid to edge (Model Placer)](https://www.youtube.com/watch?v=oiYGyTu9LJc), [Align grid to edge (Shape Builder)](https://www.youtube.com/watch?v=nvRp8FfR1eQ)

## 1.0.9

- Punch feature: Subtract shapes from parts (Shape Builder)
- Supports cutters: Rectangle, Cylinder, Sphere, Wedge, CornerWedge, Polygon, Triangle, Sector, Donut
- Modes:
    - Cut Parts into multiple parts (Rectangle only) with options: Cut from Wedge, Keep Cutout, fallback to solid modeling for non‑cuttable parts
    - Use Solid Modeling to punch holes (all non‑rectangle shapes)
- Scope options: All touching parts or Only selected parts
- Solid Modeling option: Merge into a single union
- Note: Polygon, Donut, and Sector cutters are experimental due to triangulation accuracy
- Demos: [Demo of Rectangle cutter cutting part into wedges as parts](https://www.youtube.com/watch?v=_vBB56djae0), [Demo of all other shapes cutting using Solid Modeling](https://www.youtube.com/watch?v=jrOoAEcGit8)

## 1.0.8

- Polygon Edit Mode: move, add, and delete points with full undo/redo
- Toggle with Shift+G or via the Edit Mode checkbox; works during creation and on selected existing polygons
- Grid snapping supported; hold Shift to temporarily ignore grid while moving points
- Works on any surface; edits are integrated with history/undo
- Demos: [Enter edit mode while creating](https://youtu.be/1KJKzWey1Ac), [Edit polygon from selection](https://youtu.be/XTz_gAncbF4)

## 1.0.7

- Polygon from Selection:
    - Boundary polygon (convex hull) from selected parts
    - Exact polygon via boundary face detection; finds external boundaries and connects them into polygon points
- Grid Snap Control: hold Shift to temporarily disable grid snapping while building (with visible indicator)

## 1.0.0

- Initial public release of Click to Build.
- Shape Builder, Model Placer, and Structure Builder.
- Grid snapping, distance labels, and previews.
