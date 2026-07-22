---
id: changelog
title: Changelog / Version History
---

This page lists notable changes across releases. Use it to track new features, improvements, and fixes.

## Unreleased 🧪

- EditableMesh as a result from Shape Builder and Puncher
- Shape Builder: Adding of arched corner (half-arch corner)
- **Shape Builder: Edit Mode for Shapes** (In Progress): Add edit mode functionality for shapes (Rectangle, QuadBox, Roundbox, PillBox, Pyramid, Platform, Wedge, CornerWedge, Plane, TriangleFrom4Points) similar to Polygon/Bezier. Points should be constrained to their defining mode: depth points only move in depth direction, height points only move along work plane Y axis, width points move freely on work plane. When entering edit mode during point definition, mouse position should be added to points array.

## 1.14.0

- **Bezier Path: whole-curve transform gizmo** — Edit Mode gained a gizmo that moves, rotates, and scales the entire curve at once, instead of dragging points one by one. While the gizmo is active, individual point selection is paused so you can't grab an anchor by accident.
    - **Smooth drags** — While you drag the gizmo you get instant live feedback, and the full curve rebuild happens right after the drag settles, so even long, dense curves stay responsive.
    - **Resize handles polish** — The curve resize handles now highlight on hover and give clearer visual cues while scaling.
- **Bezier Path: alignment fix with corner types** — The part alignment options now take effect when a corner type is set; previously the corner geometry could cancel the alignment shift out.
- **Cleaner Edit Mode view** — The draw-phase angle indicator is now hidden while editing a shape, so it no longer lingers over the points you're working on.
- **Seat: script-free preview rigs** — Any scripts inside the rig assets used for sitting previews are stripped before the rig enters your place, so previews never trigger script-injection permission prompts.
- **Cutter fix: wedge cuts** — A partial-height cut of a wedge whose triangle legs are equal no longer produces a wrong full-wedge remainder; the leftover piece is now shaped correctly.
- **GRID fix: invisible sliver parts** — GRID builds with edge-aligned geometry no longer generate degenerate, near-zero-size wedge parts far below the map.
- **Under the hood** — The Shape Builder was rebuilt from one monolithic class into a dedicated builder per shape, making every shape easier to maintain and extend safely. An automated cloud test suite now runs the plugin's tests inside real Roblox servers on every change. Shared UI packages were updated to their latest versions.

## 1.13.0

- **New Seat shape** — Draw it exactly like a Block, get a real working `Seat` part. Sits right next to Block in the shape grid and supports all the Block draw modes and preset sizes. See [Shape Builder — Seat](/docs/shape-builder#shape---seat).
    - **Seat or Vehicle seat** — A **Type** toggle picks which class is placed: a regular `Seat`, or a `VehicleSeat` that also captures movement input from the seated player (a driver's seat).
    - **Sitting preview** — A ghost character sits on the preview while you draw, so you can size and position the seat against real character proportions before committing. Preview only — no character is added to your game.
    - **Pick the preview character** — R15, R6, or Rthro Noob rig, **My character** (your own avatar), or **Custom user** by UserId, `@name`, username, or profile URL.
    - **Show characters on all seats** — Optionally preview a sitting character on every Seat and VehicleSeat already in your workspace while the Seat shape is active, to review seat placement across the whole place at once.

## 1.12.0

- **New Resizer tool** — Select any number of parts and drag one handle to resize the whole build in one direction, rotated parts included. **Stretch** mode resizes the selection like one solid shape, so widening a house keeps its wedge roof a perfect triangle. See [Tools Dock — Resizer](/docs/tools#resizer).
    - **Small details**: parts and models below the **Stretch threshold** keep their size — glued in place when they sit at an end (resizing a window grows only the pane, its frame stays), and following their relative spot when they sit in the middle (windows spread evenly along a widened wall).
    - **Highlight small details**: hover or drag a handle to outline every part that will keep its size in orange — handy for tuning the threshold before you commit to a drag.
    - Studio-style handles: small per-axis colored cubes on the selection bounds that stay the same size on screen.
    - Options: **Stretch** or **Same amount** resize style, **Keep size** or **Stretch** for small models, an adjustable **Stretch threshold**, resize from **One side** or **Center**, **World**- or **Last part**-aligned handles, and a **Snap increment** with quick presets.
- **New Door tool** — Click a post, then a gate, and get a working hinged door: a vertical hinge is added at the gate's edge nearest the post. Optional welding of the gate into one swinging assembly, post anchoring, and a swing angle limit. See [Tools Dock — Door](/docs/tools#door).
- **One-click tools and shapes** — Clicking a shape or tool in its selector now selects and starts it immediately; click the active one again to stop (shapes commit the build in progress).
- **Structure Builder and Model Placer deprecated** — The Shape Builder's **Line** and **Curve** shapes cover the same builds with part and model templates — plus point editing, spacing, extra corner types, and closable loops. The old tools keep working but show a deprecation notice.

## 1.11.0

- **Dropdown menus stay on screen** — When there isn't room below, dropdowns open upward or scroll instead of getting cut off.
- **Tooltip fixes** — Tooltips no longer clip long descriptions, and info tooltips support richer text formatting.

## 1.10.0

- **Shared settings across the Trimatech plugin family** — Theme, UI scale, Click sounds, and Logging now sync between all installed Trimatech plugins: change them once in any plugin and every plugin follows, live and across Studio restarts.
- **Click sounds toggle** — Plugin Settings gained a Click sounds toggle to turn the button click sound off (or back on) everywhere at once.

## 1.9.16

- **Edit Mode: free 3D point movement** — Dragging a point now always uses the free 3D Move gizmo, so points move in any direction regardless of the **Lock to first surface** setting. Applies to Line, Polygon, and Bezier editing.
- **Bezier Path: frozen work plane while editing** — The work plane is locked during point editing, so the curve no longer shifts unexpectedly mid-edit.
- **Edit Mode toggle** — Line, Polygon, and Bezier settings now share a consistent Edit Mode toggle switch for entering and leaving editing.
- **Routing info tooltips** — The build routing info box gained tooltips explaining the destination and lock controls.
- **Refreshed corner type icons** — Updated the Line corner type images (None, Sharp, Round, Bevel, Chamfer, Curve).

## 1.9.15

- **Line Round corners: choose the corner shape** — When the Line's Corner Type is **Round**, a new **Round shape** control lets you pick **Auto**, **Cylinder**, or **Sphere**.
    - **Sphere**: drops a ball joint at each turn so segments connect with no gap or overlap — perfect for cylinder pipes.
    - **Cylinder**: the classic vertical pillar corner.
    - **Auto** (default): picks a **Sphere** corner when your template part is a cylinder, and a **Cylinder** corner otherwise, so pipes round smoothly out of the box while boxes keep the pillar.

## 1.9.13

- **Shape Builder: Line overhaul** — Line now builds a plain box per segment sized by **Height & Width**, so you no longer need a template to draw one. Pick a part or model in Template Settings to build from its shape instead.
    - **Corner Type**: shape each turn between segments — None, Sharp, Round, Bevel, Chamfer, or Curve.
        - Bevel: optional **Bevel inner corner** with an **Amount**.
        - Chamfer: **Amount** cut size.
        - Curve: **Length** (how far the segments pull back) and **Resolution** (how many parts form the arc — higher is smoother).
    - **Corner Alignment**: control how parts meet at a turn (applies in every mode).
    - **Copy shape**: with a part template, adopt its shape, size, and look — or turn it off to wear just the template's look on plain boxes of your own Height & Width.
    - Model templates keep **Magic Merge**, placement modes, extend-to-mouse, and spacing.
- **Shape Builder: Line Edit Mode** — Edit a placed Line just like Polygon and Curve: drag corner points, click a segment to insert a point, and delete points. Works on both plain and template lines.
- **Close Loop** — While drawing a Line, press **Space** to connect the last point back to the first and close the shape. Closing a loop drops you straight into Edit Mode.
- **Bezier Path: Smoothness & Resolution** — New **Smoothness** control and **Resolution (studs)** input to tune how densely the curve is built.
- **Set height per point** — New Surface Settings toggle for two-click placement: place a point, then click again to set its own height. Can be pinned to the viewport PINNED bar.
- **More Plugins panel** — A new panel in each tool links to the rest of the Trimatech building-tool family, with quick Creator Store and DevForum links.

## 1.9.11

- **Tools Dock: New Nudger tool**: Click an existing part face to move the whole part, or resize only that clicked face, by a precise step amount. Designed for fixing z-fighting and tiny alignment issues without rebuilding geometry.
    - Operation: Move part or Resize part.
    - Direction: Pull/Push for moves, Grow/Shrink for resizes.
    - Preview on hover: temporarily shows the result before you click to commit.
    - Quick steps: jump between coarse values and very small values like `0.001` or `0.0001` studs.
- **Pinned tools**: Katana, Laser, and Nudger can be pinned into the viewport PINNED bar and launched without reopening the Tools dock.
- **Custom grid color**: Advanced Settings now includes a Custom grid color toggle. Leave it off for automatic surface-adaptive grid colors, or turn it on to use one fixed grid line color.
- **Tool icons and assets**: Refreshed tool icons and re-uploaded icon assets for cleaner Creator Store/package distribution.

## 1.9.10

- Asset and icon refresh for button/tool artwork.
- Updated shared `@rbxts-ui` package versions for current UI behavior and polish.

## 1.9.9

- **Pinned viewport shortcuts**: Pin frequently used controls into the in-world PINNED bar:
    - Shape quick-launch buttons from Shape Builder.
    - Tool quick-launch buttons from the Tools dock.
    - Quick grid values, grid mode, snap-to-part, edge-aligned grid, offset presets, template panel, Punch Mode, and common settings toggles.
- **Viewport overlay controls**: Advanced Settings now separates visibility for shortcuts, output, pinned controls, build info, distances, and coordinates.
- **Template panel shortcuts**: The template panel can be pinned for faster access while building.
- **Shape icon refresh**: Shape Builder icons were updated for clearer scanning.

## 1.9.6

- Build and deployment cleanup for plugin publishing.
- Plugin window layout polish for a better default fit.

## 1.9.5

- **Bezier Path — Cut along path**: The action button was compacted so it fits better in the settings panel.
- Dependency maintenance for the shared UI packages.

## 1.9.4

- More UI consistency and dark-mode polish across template selectors, settings rows, and Model Builder.
- Round action buttons such as reload/unlink no longer look washed out on Studio's dark theme.

## 1.9.3

- UI consistency pass across Structure, Shape, Tools, and Sequence panels.
- Cutter settings use simpler mode labels with an inline explanation of each cut mode.

## 1.9.2

- Advanced Settings: fixed the Theme label rendering far too small.

## 1.9.1

- UI refresh for inputs, checkboxes, buttons, and accordions.
- Plugin UI follows Roblox Studio light/dark theme automatically.

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
