---
id: shape-builder
title: Shape Builder
---

## What it is ℹ️

Draw primitives and custom geometry directly in the viewport with live previews, snapping, and precise controls.

## When to use 🧩

- Blocking out levels and paths
- Creating walls, floors, ramps, stairs, wedges, cylinders, sectors, and spheres
- Drawing smooth curves for roads, rails, pipes, and organic shapes
- Laying out connected segment paths — roads, walls, fences, and curbs — with shaped corners (Line)
- Making clean, repeatable geometry with consistent dimensions

## Workflow 🛠️

1. Choose a shape and draw mode in the panel.
2. Enable grid or surface snapping as needed.
3. Click in the viewport to place points.
4. You will see a preview as you set points.
5. You can change settings while placing points. The preview updates accordingly.
6. Building will end after placing the last point.
7. You have created a shape.

## Supported shapes

![Available Shapes](/img/shapes/supported-shapes.png)

### Shape - Block

![Shape Block Settings](/img/shapes/draw-modes-rect.png)

#### Draw Modes

##### Width → Depth → Height

![Shape Block](/img/shapes/shape-block.gif)

##### Center → Corner

Good when working with Grid, especially when creating many blocks and minimizing clicks.

##### Square: Center → Side

Constrained square variant of the center-based mode. Click the center, then a side direction; width and depth are locked to be equal (square footprint). Great for fast, perfectly square floors/walls while staying aligned to the work plane and grid.

![Shape Builder Square](/img/shapes/shape-builder-square.gif)

#### Preset Size (locked dimensions)

In **Width → Depth → Height** mode you can lock any of the three dimensions to a fixed value so you don't have to click to define it. This is great for repeatable footprints and for stamping parts at a constant height.

![Preset Size inputs - screenshot needed](/img/placeholder.svg)

- **Width / Depth / Height**: Type a value (studs) to lock that dimension. The corresponding click is skipped and the part is built using the preset value.
- **Dynamic (0)**: Leave a field empty or set it to `0` to keep drawing that dimension with the mouse as usual.
- Tip: Lock just **Height** to drop many same-height blocks in one click each; lock **Width** and **Depth** for a fixed footprint you can place repeatedly.

### Shape - Seat

Draws exactly like a **Block**, but the placed part is a real, working `Seat` (or `VehicleSeat`) — characters can sit on it in game with no extra setup. While you draw, a semi-transparent ghost character sits on the preview so you can size and position the seat against actual character proportions before committing.

Draw modes, preset sizes, and the rest of the panel match [Block](#shape---block). Seat adds the settings below.

<img src="/img/shapes/seat-settings.png" alt="Shape Seat Settings" width="50%" />

#### How to use

1. Select the **Seat** shape from the shape selector (next to Block).
2. Draw it like a Block — all Block [draw modes](#draw-modes) and [preset sizes](#preset-size-locked-dimensions) apply.
3. Watch the ghost character on the preview to judge seat height and depth, then click to commit.

The preview characters are never added to your game — only the seat part is placed.

#### Seat

##### Type

Which sit-part class is placed:

- **Seat** (default): characters sit when they touch it.
- **Vehicle seat**: a `VehicleSeat` — also captures movement input from the seated player, so use it as the driver's seat of a vehicle.

#### Seat Character

##### Character

Who sits on the preview:

- **R15 Noob** (default), **R6 Noob**, **Rthro Noob**: standard rigs for checking classic proportions.
- **My character**: your own avatar.
- **Custom user**: any Roblox user — enter a UserId, `@name`, username, or profile URL in the **User** field.

##### Animation

Animation asset ID the preview character plays while sitting. Leave empty for the default Roblox sit animation.

##### Show characters on all seats

While the Seat shape is active, also previews a sitting character on every `Seat` and `VehicleSeat` already in the workspace (occupied seats are skipped). Great for reviewing seat placement and spacing across a whole place at once. Preview only — the characters disappear when you switch shapes.

##### Show character on selected seats

Same preview, but only on seats currently selected in Studio.

### Shape - Plane

Create a rectangular plane aligned to the current work plane. Useful for floors, walls, and reference surfaces.

![Shape Plane Settings](/img/shapes/plane-settings.png)

#### Modes

- Height is fixed: Locks height to a numeric value while you place width and depth. The fixed height is centered around the grid so adjustments feel intuitive as you move the mouse.
- Depth is fixed: Locks depth to a numeric value while you place width and height.

#### Settings

- Plane Mode: Choose Fixed Height or Fixed Depth
- Fixed Size: Numeric value for the fixed dimension (studs)

The Plane shape supports Punch mode to cut thin openings or surface slices out of other parts.

Set Fixed Size to "-"(0.0001) while using Punch Mode to split parts exactly along the plane (precise slicing).

### Shape - Cylinder

![Shape Cylinder Settings](/img/shapes/cylinder-settings.png)

This creates a Roblox `Part` where the `Shape` property is `Cylinder`.

#### Draw Modes

You can choose from different draw modes to easily create cylinders for each scenario with accuracy.

##### Radius From Center

When you know where you want the center of the cylinder to be.

![Shape Cylinder](/img/shapes/shape-cylinder-radius-from-center.gif)

##### Height From To

When you want to create a cylinder on a surface, for example as a pipe.

![Shape Cylinder](/img/shapes/shape-cylinder-height-from-to.gif)

##### Radius From To

When you want to create a cylinder so edges span from one point to another.

![Shape Cylinder](/img/shapes/shape-cylinder.gif)

### Shape - Sphere

![Shape Sphere Settings](/img/shapes/sphere-settings.png)

#### Draw Modes

You can choose from different draw modes to easily create spheres for each scenario with accuracy.

##### Height from surface

When you know how high you want the sphere to be in relation to other shapes in your build.

![Shape Sphere](/img/shapes/shape-sphere.gif)

##### Radius at surface

When you know the width of the sphere. Especially good when working with Grid.

![Shape Sphere](/img/shapes/shape-sphere-radius-at-surface.gif)

### Shape - Polygon

![Shape Polygon Settings](/img/shapes/polygon-settings.png)

Set as many points for your polygon as you like. You can undo or go to "Edit Mode" if you misplaced your point. To finish building go near first point and click the "Close loop" button (Or press Space any time to close loop). Your last and first point will be connected perfectly. And then you can define the height. And after that you have created a polygon shape.

![Shape Polygon](/img/shapes/polygon-close-loop.png)

![Shape Polygon](/img/shapes/shape-polygon.gif)

#### Triangulation Algorithm

You can set different triangulation algorithms. The default is fine in most cases. If a polygon is not drawn correctly, try changing the algorithm:

- Ear-clipping (Default)
- Delaunay (Better Triangles - does not create long and narrow wedges)
- Simple (Non‑concave — not needed in most cases; does not work with concave polygons)
- Grid Based (Experimental)

When the "Visualize part" setting is enabled, you can see the difference in wedge generation:

- Ear-clipping
  ![Shape Polygon Ear Clipping](/img/shapes/polygon-ear-clipping.png)

- Delaunay
  ![Shape Polygon Delaunay](/img/shapes/polygon-delaunay.png)

- Simple
  ![Shape Polygon Simple](/img/shapes/polygon-simple.png)

##### Demo of using Triangulation Algorithm and Visualize part settings

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/vdDzrVVyWRo"
  title="Polygon triangulation and visualize part demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

#### Edit Mode

When you enable "Edit Mode" for a polygon, you can remove, move, and add points:

![Shape Polygon Simple](/img/shapes/polygon-edit-mode.gif)

- Remove point: Click a point; when selected it turns red and you can press Backspace/Delete to remove it.

- Add point: Click an edge to create a point, then click & drag the point. Or click & drag directly on the edge to create and move a point immediately.

- Move point: Click & drag a point to move it; release when done.

#### Edit selected polygon

You can edit an already created polygon. It does not have to be created with this plugin. It can even be a plain `Part`.
Select all the parts that make up a polygon, or a folder/model that contains those parts as children.
Then press "Edit Selected Polygon ✏️". It regenerates all corner points including the height point and goes into Edit Mode. Then you can change height or move/remove/add points. When done, either:

- Exit "Edit Mode" by unchecking Edit Mode checkbox (or using shortcut Shift+G)
- Click "Finish Building" (or using shortcut Shift+T)

Note: Separate the UnionOperation before editing; otherwise you’ll be editing its bounding box.

#### Boundary polygon from selection

Good if you want to connect two shapes that are not connected.
Select any number of parts, click "Boundary Polygon from Selection ➕", and a polygon with boundary points around your selection is created. Define height and you are done.

#### Exact polygon from selection

This functionality is a predecessor to "Edit Selected Polygon". It creates a copy of the selected polygon and lets you define the height. Of course, you can go into Edit Mode yourself. This might be removed at some point, or become an "Edit Selected Polygon" that copies instead of editing. The idea is you could do low‑poly mountains by creating a base polygon, then copying and editing the height and some points to gradually go higher.

![Boundary polygon from selection](/img/shapes/polygon-boundary-bolygon.gif)

##### Demo of going into edit mode while creating a polygon

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/1KJKzWey1Ac"
  title="Polygon edit mode during creation demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

##### Demo of Editing a Polygon from selection

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/XTz_gAncbF4"
  title="Edit polygon from selection demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

##### Demo of creating Polygon from selection

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/SWIUyNXtfTw"
  title="Create polygon from selection demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

### Shape - Triangle

![Shape Triangle](/img/shapes/shape-triangle.gif)

### Shape - Wedge

![Shape Wedge Settings](/img/shapes/wedge-settings.png)

#### Draw Mode

##### Low Side First

![Shape Wedge](/img/shapes/shape-wedge.gif)

##### High Side First

Use High Side First when you want to add a wedge against a part and can snap to part corners for perfect alignment.

![Shape Wedge](/img/shapes/wedge-high-side-first.gif)

##### Triangle First

If you need a wedge on its side.

![Shape Wedge](/img/shapes/wedge-triangle-first.gif)

### Shape - Corner

![Shape Corner Wedge](/img/shapes/shape-corner-wedge.gif)

### Shape - Pyramid

Build a pyramid made of four CornerWedge parts that meet at a shared apex.

![Shape Block Settings](/img/shapes/draw-modes-rect.png)

![Shape Pyramid](/img/shapes/shape-pyramid.gif)

#### Draw Modes

- Width → Depth → Height
- Center → Corner
- Square: Center → Side

![Shape Pyramid](/img/shapes/shape-pyramid.gif)

### Shape - Platform

![Shape Platform Settings](/img/shapes/platform-settings.png)

Create frustum of a pyramid, in simple terms - a platform.

#### 4 points (45°)

Predefined slope, for quick platform

![Shape Pyramid](/img/shapes/shape-platform-45.gif)

#### 5 points (custom slope)

For last point you will defined slope, it can be inwards or outwards. So you can create upside down platform.

![Shape Pyramid](/img/shapes/shape-platform-custom.gif)

### Shape - Pill

Create a rounded capsule-like block.

![Shape Pill Settings](/img/shapes/draw-modes-rect.png)

#### Draw Modes

- Width → Depth → Height
- Center → Corner
- Square: Center → Side

![Shape Pill](/img/shapes/shape-pill.gif)

### Shape - Roundbox

Create a fully rounded rectangular block (rounded edges and corners). Great for soft, polished shapes and filleted blocks.

![Shape Pill Settings](/img/shapes/draw-modes-rounded.png)

#### Draw Modes

- Width → Depth → Height
- Center → Corner
- Square: Center → Side

![Shape Pill](/img/shapes/shape-roundbox.gif)

#### Radius Modes

- Define Radius Last: after setting width/depth/height, place one extra point on the top face to set the inner flat size; the radius is derived from that, letting you visually dial in the corner roundness.
- Predefined Radius: type a numeric radius that is used directly (default 0.5). Radius is clamped so it never exceeds half of width/depth/height.

Works with Punch mode to cut rounded openings.

### Shape - Quadbox

A performance-friendly rounded rectangle variant. Produces straight top/bottom faces with rounded vertical corners (no corner spheres or top/bottom edge cylinders), ideal when you want rounded sides at lower part counts.

![Shape Pill Settings](/img/shapes/draw-modes-rounded.png)

![Shape Pill](/img/shapes/shape-quadbox.gif)

#### Draw Modes

- Width → Depth → Height
- Center → Corner
- Square: Center → Side

#### Radius Modes

- Define Radius Last: after setting width/depth/height, place one extra point on the top face to set the inner flat size; the radius is derived from that, letting you visually dial in the corner roundness.
- Predefined Radius: type a numeric radius that is used directly (default 0.5). Radius is clamped so it never exceeds half of width/depth/height.

### Shape - Sector

![Shape Sector Settings](/img/shapes/sector-settings.png)

![Shape Sector](/img/shapes/shape-sector.gif)

#### Segments in circle

This is the segment count for a full circle. For a quarter sector, it uses one quarter of the segments. For example, with 60 segments, a 90° sector uses 15.
Default is 60. Here is one with 6 segments:

![Shape Sector](/img/shapes/sector-6-segments.gif)

#### Inverse Sector

Change the direction of sector cutting: left vs right.

### Shape - Donut

![Shape Donut Settings](/img/shapes/donut-settings.png)

![Shape Donut](/img/shapes/shape-donut.gif)

#### Segments in circle

This is the segment count for a full circle. For a quarter segment, it uses one quarter of the segments. For example, with 60 segments, it uses 15.
Default is 60. Here is one with 6 segments:

![Shape Donut](/img/shapes/donut-6-segments.gif)

Here is one with 3 segments and "Custom inner radius":

![Shape Donut](/img/shapes/donut-3-segments.gif)

#### Custom inner radius

You define the inner radius after setting the full radius.

#### Predefined inner radius

You can define the percentage that the hole will be from the width. Default 0.5, so 50%.

#### Donut demo

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/awr4uhXQPTc"
  title="Donut shape demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

### Shape - Stairs

Create diagonal staircases with configurable step dimensions. Steps automatically calculate along the diagonal from the starting point to the height point, making it easy to build staircases of any angle and length. Supports both upward (positive height) and downward (negative height) stairs.

![Shape Stairs Settings](/img/shapes/stairs-settings.png)

![Shape Stairs](/img/shapes/shape-stairs.gif)

#### Draw Mode

##### Width → Depth → Height

Same draw mode as Block. Click to place:

1. First point: starting corner of the stairs base
2. Second point: defines the width of the stairs
3. Third point: defines the depth of the stairs base
4. Fourth point: defines the height where the stairs should end

The stairs will climb diagonally from the base (at the second point) to the height point (fourth point). The height can be positive (upward stairs) or negative (downward stairs).

#### Stairs Parameters

##### Step Height

The vertical height of each individual step. This controls how tall each step is. Larger values create taller steps; smaller values create shorter, more gradual steps.

##### Step Depth

The horizontal depth of each step along the diagonal. This controls how deep each step extends. Larger values create deeper steps; smaller values create narrower steps. Steps are spaced by this value along the horizontal projection of the diagonal.

##### Gap

The gap between consecutive steps. Can be:

- **Positive values**: Creates spacing between steps
- **Zero**: Steps are directly adjacent with no gap
- **Negative values**: Steps overlap, creating a more compact staircase. With step height being small, can create overlapping hovering steps.

##### Extend to floor

When enabled, each step extends downward to reach the floor level. For upward stairs, the floor is at the starting point. For downward stairs, the floor is at the ending point. This creates steps that fully connect to the ground, useful for creating more complete stair structures. When disabled, steps only extend to their calculated height.

### Shape - Arc

Create smooth curved arches and arcs using cubic Bezier curves. Perfect for architectural elements like doorways, windows, bridges, decorative arches, and curved structural supports.

![Shape Arc Settings](/img/shapes/arc-settings.png)

![Shape Arc](/img/shapes/shape-arc.gif)

#### How to use

1. Select the Arc shape from the shape selector
2. Click to place three points defining a rectangle (width → depth → height)
3. The arc curves upward from the base rectangle using Bezier interpolation
4. Adjust settings in the panel to customize the arc shape
5. The arc is created automatically after placing the third point

#### Arc Parameters

##### Thickness

The thickness (depth) of the arc. This controls how thick the arc appears when viewed from the side. Larger values create thicker, more substantial arcs.

##### Segment width

The width of each individual part along the arc curve. Smaller values create more parts and smoother curves; larger values create fewer, longer segments. This controls the resolution of the arc.

##### Fill corners

When enabled, fills the corners at the base of the arc with additional geometry for a smoother, more complete appearance. Useful for creating seamless transitions between the arc and its base.

#### Quick Settings

Choose from six preset arc styles for common use cases:

- **Default**: A simple, standard arc with balanced curvature
- **Rounded**: A thicker, more rounded arc with increased handle powers
- **Horseshoe**: A U-shaped arc with a deep center curve
- **Pointed**: An arc with a distinct upward point, creating a gothic arch style
- **Small point**: Similar to Pointed but with a less pronounced point
- **Ogee**: An S-shaped or wavy arc with elegant curves

Click any preset to instantly apply its angle and handle power settings.

#### Arc Angle

The angle of the arc in degrees. Controls how much of a circle the arc spans:

- **180°**: A half-circle arc (default)
- **90°**: A quarter-circle arc
- **360°**: A full circle (though typically used for partial arcs)

Range: 0° to 360°

#### Handle Powers

Control the shape and curvature of the arc using Bezier handle powers:

##### Center point

Controls the curvature at the top (apex) of the arc. Higher values create more pronounced curves at the center:

- **Lower values** (0.5-1.0): Flatter, more subtle curves
- **Higher values** (1.5-3.0): Sharper, more dramatic curves at the top

##### End point

Controls the curvature at the endpoints (base) of the arc. Higher values create smoother transitions at the ends:

- **Lower values** (0.5-1.0): Sharper transitions at the base
- **Higher values** (1.5-4.0): Smoother, more gradual transitions

Adjusting handle powers allows fine-tuning the arc shape beyond the preset styles. Experiment with different combinations to achieve the exact curvature you need.

### Shape - Curve (Bezier Path)

Create smooth curves by placing anchor points. The plugin generates parts along the path using smooth Bezier interpolation. Perfect for roads, pipes, rails, decorative lines, and any organic flowing geometry.

![Shape Curve Settings](/img/shapes/curve-settings.png)

![Shape Curve](/img/shapes/shape-curve.gif)

#### How to use

1. Select the Curve shape from the shape selector
2. Click to place anchor points (minimum 3 points required)
3. The curve automatically smooths between points using Catmull-Rom interpolation
4. Adjust settings in the panel as you place points
5. Press Space or click "Finish Building" to complete

#### Settings

##### Width

The width of each generated part along the curve. This is the horizontal dimension perpendicular to the curve direction.

##### Height

The height (vertical thickness) of each generated part. Adjust for thicker rails, roads, or thin ribbons.

##### Depth (resolution)

The length of each individual part along the curve direction. Smaller values create more parts and smoother curves; larger values create fewer, longer parts.

##### Spacing (gap)

The gap between consecutive parts along the curve. Set to 0 for continuous geometry with no gaps. Disabled for Fill and Touch alignment modes since those modes determine spacing automatically.

#### Alignment Modes

Control how parts are positioned and distributed along the curve:

##### Center

Parts are centered along the curve path. Even spacing with gaps between parts.

![Curve Center Alignment](/img/shapes/curve-alignment-center.png)

##### Left

Parts are aligned to the left edge of the curve. Useful when building along a wall or boundary.

![Curve Left Alignment](/img/shapes/curve-alignment-left.png)

##### Right

Parts are aligned to the right edge of the curve. Mirror of Left alignment.

![Curve Right Alignment](/img/shapes/curve-alignment-right.png)

##### Fill

Parts stretch to completely fill the curve with no gaps. Uses parallel transport framing for smooth, twist-free orientation. Creates a continuous ribbon effect—perfect for roads or platforms.

![Curve Fill Alignment](/img/shapes/curve-alignment-fill.png)

**Use Adaptive Curvature**: When enabled, parts become smaller at curves by creating denser sampling at sharp corners. This results in smoother curves with better visual quality at bends. Enable this option if you want parts to be smaller at curves for smoother appearance.

##### Touch

Parts are sized so adjacent parts touch exactly at their edges. Uses adaptive curvature sampling to add extra parts at sharp corners. Good for segmented paths that need to look connected.

![Curve Touch Alignment](/img/shapes/curve-alignment-touch.png)

#### Template Support

You can use a selected Part or Model as a template instead of simple rectangles. The template is repeated along the curve, following its orientation.

When a template is selected, the **Template Axis** dropdown appears:

- **Z / -Z**: Template's Z axis follows the curve direction
- **Y / -Y**: Template's Y axis follows the curve direction
- **X / -X**: Template's X axis follows the curve direction

This lets you orient models correctly regardless of how they were authored.

![Curve with Template](/img/shapes/curve-template.gif)

#### Cut along path

After placing at least two points on a Bezier path, you can subtract a swept cut from touching parts using the red **Cut along path (SweepPartAsync)** button at the bottom of the Bezier Path settings block.

![Bezier Path settings](/img/shapes/bezier-path-settings.png)

![Cut along path button](/img/shapes/bezier-cut-along-path.png)

**Requirements**

- Select a **BasePart** as the template (in Template settings). Models are not supported for this action.
- Place at least **two** anchor points on the curve.
- The cut uses the same path sampling as the live preview (width, height, depth, alignment, and optional grid-aligned endpoints).

**What it does**

1. Samples the current Bezier path into sweep frames (matching how parts would be built along the curve).
2. Sweeps the template part along those frames via `GeometryService.SweepPartAsync`.
3. Subtracts the resulting hull from sliceable parts (same scope as Punch: all touching parts or only selected, per your cutter settings).

Use this to carve grooves, slots, or tunnels along a curved guide without building placeholder parts first.

:::warning Mesh parts must be saved to Roblox manually

`SubtractAsync` cut results are mesh-backed parts. Save or publish each resulting mesh to Roblox from Studio before publishing your experience. See the [Tools dock](/docs/tools) warning for the full workflow.

:::

#### Curve Library

![Curve Library - screenshot needed](/img/placeholder.svg)

The **Curve Library** accordion lists ready-made Bezier presets you can place in one click:

- **Closed 2D**: Circle, Rounded Square, Capsule, Star, Heart, Infinity ∞
- **Open 2D**: Half-circle, Wave
- **3D**: Spring (helix)

Click **Build** on a preset to start placement on the active work plane. Adjust radius with your mouse, then commit like any other shape.

**Save current curve**: While in Bezier edit mode, use **Save current curve…** to store the active path under a custom name. Saved curves appear in the same list for quick reuse.

#### Edit Mode

Enable Edit Mode (Shift+G) to interactively adjust the curve after placing points:

![Curve Edit Mode](/img/shapes/curve-edit-mode.gif)

- **Move point**: Click & drag any anchor point to reposition it
- **Delete point**: Select a point (turns red) then press Backspace/Delete
- **Add point**: Click on an edge between anchors to insert a new point
- **Resize bounding box**: Drag the box handles (with axis rods) to scale the whole curve
- **Rotate**: Use the rotation handle on the bounding box to spin the curve in the work plane
- **Size labels**: W, H, and D labels show the bounding box dimensions while edit mode is active

![Curve bbox edit mode - screenshot needed](/img/placeholder.svg)

The curve updates in real-time as you edit, making it easy to refine paths. Sharp bends automatically get triangle bevels so tight corners stay visually clean.

#### 3D Curves

The Bezier Path supports 3D curves. Place points at different heights and the curve will smoothly interpolate through all of them. The parallel transport algorithm ensures parts maintain consistent orientation without unexpected twisting.

![3D Curve](/img/shapes/curve-3d.gif)

:::note
When using Fill mode with 3D curves that change elevation, there may be small gaps between parts. Perfect gap-free surfaces in 3D would require additional wedge and corner-wedge parts, which is not currently implemented. For best results with elevation changes, use smaller Depth values to minimize visible gaps, or use Touch/Center modes with spacing.
:::

### Shape - Line

Draw a path of connected straight segments — a road, wall, fence, curb, or pipe run — by clicking to place points. Each segment is built as its own part, and every turn between segments is shaped by the **Corner Type**. With no template, Line builds a plain box per segment sized by **Height & Width**, so you don't need to prepare any geometry first. Point a Part or Model template at it (in Template Settings) to build from that shape instead.

![Shape Line Settings - screenshot needed](/img/placeholder.svg)

![Shape Line - gif needed](/img/placeholder.svg)

#### How to use

1. Select the **Line** shape from the shape selector.
2. Click to place points. A straight part is drawn between each pair of consecutive points, updating live as you move the mouse.
3. Adjust settings (Height, Width, Corner Type, alignment) while placing — the preview updates.
4. Press **Space** to close the loop (connect the last point back to the first), or click **Finish Building** to end an open line.

#### Part Settings (plain mode)

When there is no template (or "Copy shape" is off), each part is a plain box:

- **Height**: Vertical thickness of each segment part.
- **Width**: Horizontal width of each segment part, perpendicular to the segment direction.

#### Corner Type

Choose how each turn between two segments is shaped:

![Line Corner Types - screenshot needed](/img/placeholder.svg)

- **None**: Segments simply meet; no extra corner geometry.
- **Sharp**: A mitered joint that fills the wedge between the two segments for a clean, solid corner.
- **Round**: A cylindrical corner that rounds the turn.
- **Bevel**: A flat, angled corner across the turn.
    - **Bevel inner corner**: Also bevel the inside of the turn. When on, **Amount** sets the bevel segment length.
- **Chamfer**: A cut corner. **Amount** sets the size of the cut.
- **Curve**: A smooth, multi-part arc around the turn.
    - **Length**: How far the segments pull back to make room for the arc.
    - **Resolution**: How many parts form the arc — higher is smoother.

![Line Corner Types comparison - gif needed](/img/placeholder.svg)

:::tip
Corner rounding lines up best with the **None** corner alignment.
:::

#### Corner Alignment

Controls how parts meet at a turn (applies in every mode): **Outside**, **Inside**, **Fill**, **Touch**, or **None**.

![Line Corner Alignment - screenshot needed](/img/placeholder.svg)

#### Building from a template

Pick a **Part** or **Model** in Template Settings to build the line from an existing shape instead of plain boxes.

- **Part template — Copy shape**: With "Copy shape" on, each segment adopts the part's shape, size, and look, and the corner fillers match its look. Turn "Copy shape" off to keep plain boxes of your own Height & Width that only wear the part's look.
- **Model template**: The model is cloned along the path. Model turns are resolved by **Magic Merge** (with an optional **Clean up small parts after merge**) rather than the Corner Types.
    - **Placement Mode**: None, Copy, or Stretch — how the model repeats or fits along each segment.
    - **Extend to mouse position**: Stretch the current segment out to the cursor.
    - **Spacing**: Gap (studs) between repeated copies.

![Line with template - gif needed](/img/placeholder.svg)

#### Edit Mode

Enable **Edit Mode** (Shift+G) to adjust a placed line after the fact — on both plain and template lines, just like Polygon and Curve:

![Line Edit Mode - gif needed](/img/placeholder.svg)

- **Move point**: Click & drag any point to reposition it.
- **Add point**: Click a segment to insert a new point.
- **Delete point**: Select a point (it turns red) then press Backspace/Delete.

Closing the loop with **Space** while drawing automatically drops you into Edit Mode.

### Shape - Stamp

A stack-on-face tool: hover any part's face and click to create a new part that matches that face's footprint, extruded outward along the face normal. Perfect for quickly building up greebles, ledges, caps, and stacked details without measuring.

![Shape Stamp Settings - screenshot needed](/img/placeholder.svg)

![Shape Stamp - gif needed](/img/placeholder.svg)

#### How to use

1. Select the **Stamp** tool from the shape selector.
2. Hover the face of an existing part — a preview appears matching the face footprint.
3. Click to commit the stamped part.

Blocks stay blocks and cylinder caps stay cylinders, so the new part inherits the hovered face's shape and footprint automatically.

#### Settings

##### Height (studs)

How far the new part is extruded outward from the hovered face along its normal.

##### Lip (widen on all sides)

When enabled, the stamped footprint grows outward by a configurable number of studs.

- **Lip (studs)**: How far the footprint extends beyond the original face on each side.

##### Dynamic lip (toward hovered edge)

When enabled, the lip overhangs only the edge or corner under the cursor instead of widening every side. Hover the center of the face to widen all sides, or hover near an edge/corner to overhang in that direction — useful for ledges and overhangs.

#### Demo of different shape types

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/nplvH69FUHk"
  title="Shape types demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

#### Demo of building something random

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/oejGJCaKWSM"
  title="Random building demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

#### Defining height demo

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/9u7M4moN6lY"
  title="Define height demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

#### Demo for Wedge and Snap to Part

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/w2h_x4V3lSw"
  title="Wedge and snap to part demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

### Shape - Voxel

A grid-cell extrusion tool: hover a cell on the work plane and drag up to stack blocks; hover the top of an existing block and drag down to carve cells away. Great for fast terrain, walls, and blocky structures aligned to the grid.

![Shape Voxel Settings - screenshot needed](/img/placeholder.svg)

![Shape Voxel - gif needed](/img/placeholder.svg)

#### How to use

1. Select the **Voxel** tool from the shape selector.
2. Hover a grid cell — a green ghost shows how many cells you will add.
3. Drag up and release to extrude blocks.
4. Hover the top of a block you created — a red ghost shows removal.
5. Drag down and release to remove cells from that column.

Blocks are placed relative to the current work plane and grid size, not the world axes.

#### Settings

##### Optimize resulting blocks

When enabled, adjacent same-height blocks with matching material merge into larger rectangles after each add. No CSG — only axis-aligned boxes. Wedges are excluded from merging.

##### Advanced building

When enabled, where you hover inside a cell picks the extruded shape:

- **Cell center**: a plain block (default behavior).
- **Near an edge**: a wedge rising at that edge.
- **Near a corner**: a corner wedge peaking at that corner.

Hover a wedge's top edge (or a corner wedge's peak) to resize it — drag to zero to remove it.

## Related

- See [Common Settings](/docs/reference-common-settings) for shared options across builders
- See [Keyboard Shortcuts](/docs/reference-shortcuts) to work faster
