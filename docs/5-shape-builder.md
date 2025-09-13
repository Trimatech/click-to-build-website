---
id: shape-builder
title: Shape Builder
---

## What it is ℹ️

Draw primitives and custom geometry directly in the viewport with live previews, snapping, and precise controls.

## When to use 🧩

-   Blocking out levels and paths
-   Creating walls, floors, ramps, wedges, cylinders, sectors, and spheres
-   Making clean, repeatable geometry with consistent dimensions

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

-   Ear-clipping (Default)
-   Delaunay (Better Triangles - does not create long and narrow wedges)
-   Simple (Non‑concave — not needed in most cases; does not work with concave polygons)
-   Grid Based (Experimental)

When the "Visualize part" setting is enabled, you can see the difference in wedge generation:

-   Ear-clipping
    ![Shape Polygon Ear Clipping](/img/shapes/polygon-ear-clipping.png)

-   Delaunay
    ![Shape Polygon Delaunay](/img/shapes/polygon-delaunay.png)

-   Simple
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

-   Remove point: Click a point; when selected it turns red and you can press Backspace/Delete to remove it.

-   Add point: Click an edge to create a point, then click & drag the point. Or click & drag directly on the edge to create and move a point immediately.

-   Move point: Click & drag a point to move it; release when done.

#### Edit selected polygon

You can edit an already created polygon. It does not have to be created with this plugin. It can even be a plain `Part`.
Select all the parts that make up a polygon, or a folder/model that contains those parts as children.
Then press "Edit Selected Polygon ✏️". It regenerates all corner points including the height point and goes into Edit Mode. Then you can change height or move/remove/add points. When done, either:

-   Exit "Edit Mode" by unchecking Edit Mode checkbox (or using shortcut Shift+G)
-   Click "Finish Building" (or using shortcut Shift+T)

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

-   Width → Depth → Height
-   Center → Corner
-   Square: Center → Side

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

-   Width → Depth → Height
-   Center → Corner
-   Square: Center → Side

![Shape Pill](/img/shapes/shape-pill.gif)

### Shape - Roundbox

Create a fully rounded rectangular block (rounded edges and corners). Great for soft, polished shapes and filleted blocks.

![Shape Pill Settings](/img/shapes/draw-modes-rounded.png)

#### Draw Modes

-   Width → Depth → Height
-   Center → Corner
-   Square: Center → Side

![Shape Pill](/img/shapes/shape-roundbox.gif)

#### Radius Modes

-   Define Radius Last: after setting width/depth/height, place one extra point on the top face to set the inner flat size; the radius is derived from that, letting you visually dial in the corner roundness.
-   Predefined Radius: type a numeric radius that is used directly (default 0.5). Radius is clamped so it never exceeds half of width/depth/height.

Works with Punch mode to cut rounded openings.

### Shape - Quadbox

A performance-friendly rounded rectangle variant. Produces straight top/bottom faces with rounded vertical corners (no corner spheres or top/bottom edge cylinders), ideal when you want rounded sides at lower part counts.

![Shape Pill Settings](/img/shapes/draw-modes-rounded.png)

![Shape Pill](/img/shapes/shape-quadbox.gif)

#### Draw Modes

-   Width → Depth → Height
-   Center → Corner
-   Square: Center → Side

#### Radius Modes

-   Define Radius Last: after setting width/depth/height, place one extra point on the top face to set the inner flat size; the radius is derived from that, letting you visually dial in the corner roundness.
-   Predefined Radius: type a numeric radius that is used directly (default 0.5). Radius is clamped so it never exceeds half of width/depth/height.

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

## Related

-   See [Common Settings](/docs/reference-common-settings) for shared options across builders
-   See [Keyboard Shortcuts](/docs/reference-shortcuts) to work faster
