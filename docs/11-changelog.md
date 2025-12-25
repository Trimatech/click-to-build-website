---
id: changelog
title: Changelog / Version History
---

This page lists notable changes across releases. Use it to track new features, improvements, and fixes.

## Unreleased 🧪

- EditableMesh as a result from Shape Builder and Puncher
- Shape Builder: Adding of arched corner (half-arch corner)
- **Shape Builder: New shape — Arc**: Create smooth curved arches and arcs using cubic Bezier curves.
    - Six quick preset styles: Default, Rounded, Horseshoe, Pointed, Small point, Ogee
    - Configurable arc angle (-360° to 360°)
    - Handle powers for fine-tuning curvature at center and endpoints
    - Thickness and segment width controls for arc resolution
    - Fill corners option for seamless base transitions
    - Perfect for architectural elements like doorways, windows, bridges, and decorative arches

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
