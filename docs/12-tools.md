---
id: tools
title: Tools Dock
---

The **Tools** dock is a separate plugin window for runtime utilities (opened from the main toolbar). It includes cutting tools for existing geometry, the Nudger for tiny part moves/resizes, the Resizer for stretching whole builds, the Door tool for hinging gates — and a family of finishing tools for geometry you have already built: the Rounder and Smoother for rounding edges and softening creases, Fill for closing holes, the Splitter for cutting one part into two, the Replacer for swapping placeholders out, and Reorient for fixing a part's axes.

## Selecting and pinning tools

Clicking a tool in the grid selects it **and starts it immediately**; clicking the active tool again stops it. The currently selected tool shows a pin button; pinning adds it to the viewport **PINNED** bar so you can launch it without reopening the Tools dock.

- **Katana**: draw a straight slash across the screen to cut touched parts.
- **Laser**: drag a freehand path to cut along the traced line.
- **Nudger**: click a part face to move or resize by a precise step amount.
- **Door**: click a post, then a gate, to create a working hinged door.
- **Resizer**: select many parts and drag a handle to resize the whole build in one direction.
- **Reorient**: click a face of a part to make it the part's Front, Top, or Right — without moving the part.
- **Rounder**: drag the edges and corners of a block to round them, and back out to sharpen them again.
- **Smoother**: drag a curve into the crease where two parts meet — a wall on a floor, a step against its riser.
- **Fill**: hover a hole and click to build the part that belongs in it, measured from the parts around it.
- **Splitter**: point at a part and click to cut it into two plain parts, exactly where you are looking.
- **Replacer**: hover anything with a template picked and click to swap it out, keeping where it stood.

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

## Rounder

Round the edges and corners of a block you have already built. Turn the tool on and hover a block — all twelve of its edges and eight of its corners light up straight away: **blue** where an edge is still sharp, **green** where it is already rounded. Drag an edge inwards and the rounding grows under your cursor, snapped to your **Grid Size**, with the block rebuilding live so you can see the radius you are choosing; drag it back out to nothing and that edge goes sharp again. A click instead of a drag toggles an edge or corner on or off at the last radius you dragged to.

![Rounder - screenshot needed](/img/placeholder.svg)

Roblox cannot bend a part, so the block becomes several — the flat parts of it, plus a **cylinder** for each rounded edge and a **ball** for each rounded corner. Every piece is copied from the block you started with, so material, colour, transparency, anchoring and collision come across on their own.

- **Drag a corner** and the three edges meeting there round together, so the corner comes out as a ball nestled between three cylinders — smooth all the way around.
- **Every edge keeps its own radius.** Rounding one edge leaves everything already rounded on the block exactly as it was, so the four uprights of a block can each carry a different radius. The one place sizes must agree is a corner where all three edges are rounded: that is a single ball, and a ball is one size.
- **Rounding is not one-way.** The block remembers its size and every edge's radius, so you can come back in any session and drag another edge, change one, or take the rounding off entirely — you get your plain block back in one piece. Undo does the same.
- **QuadBox, RoundBox and PillBox count as rounded blocks**: draw one, point the Rounder at it, and its edges and corners come up on the handles like anything else you rounded.
- The Rounder only measures the sides a rounding actually eats into, so a half-stud floor tile can still have four-stud corners.
- Only plain blocks can be rounded; anything else is outlined in red.

### Settings

- **An edge drag rounds**:
    - Current edge: just the edge (or corner) you grabbed.
    - All edges: every edge of the block follows whichever handle you pull.
    - Hold **Shift** while dragging to flip the choice just for that drag. Everything a drag would carry with it lights up as soon as you hover a handle.

## Smoother

The Rounder turned inside out: it softens the sharp **crease where two parts meet** — a wall standing on a floor, a step against its riser, a beam under a ceiling. Point at the crease and it lights up amber, with two green lines showing how far the smoothing will reach along each part. Drag away from the crease — across the floor or up the wall, whichever suits your view — and the curve grows under your cursor, snapped to your **Grid Size**; drag it back to nothing and it is gone again. A click without a drag smooths the corner at the **Radius** in the panel.

![Smoother - screenshot needed](/img/placeholder.svg)

Nothing of the two parts is touched: the smoothing is its own run of parts sitting in the corner, copied from the part you pointed at, so its material and colour match on their own — and you can come back at any time to drag it bigger, change its smoothness, or take it off. It also works on corners that aren't square (a ramp meeting a floor, a leaning wall) and fills them with the curve that actually touches both faces.

### Settings

- **Radius (studs)**: how big the curve filling the corner is — on a square corner, also how far it reaches along each part. Dragging in the viewport writes the size back into this field; typing here re-smooths the corner the tool is pointed at.
- **Smoothness**: how many flat facets the curve is cut into. More is smoother and costs more parts; `1` is a single flat chamfer, often all a small crease needs.
- **Build with**:
    - Exact: wedges that stay strictly inside the corner — nothing crosses into either part, safe against glass, thin walls, and parts you will move later.
    - Blocks only: one plain part per facet, sunk into the two parts behind it — half the parts for the same curve, with the overlap hidden inside solid parts.
- **Smooth every corner of selection**: smooths every crease the selected block(s) make with the blocks touching them, in one go, each at the Radius above. Creases that already have smoothing are left as they are.
- **Remove smoothing from selection**: deletes the smoothing you have selected or are pointed at; the two parts the crease belongs to are untouched.

## Fill

Point at a hole and Fill builds the part that belongs in it: the missing tile in a floor, the space left between four blocks, the gap where a window is going to go. The parts around the hole already say exactly how big it is, so there is nothing to measure and nothing to type. Hover the **surface the hole is in** — the floor you can see through the gap, the ground inside an unfinished room — and the fill appears as a ghost: fitted to the empty space, as tall as the parts around it, wearing their colour and material. Click to build it. The surrounding parts are never touched.

![Fill - screenshot needed](/img/placeholder.svg)

Fill does not care how big your build is: rather than examining the whole surface, it fires a fan of rays out across it from your cursor and works only from the parts that wall that point in — finding a hole in a whole city costs the same as finding one between four blocks. The surface you hover can be anything at all, terrain included; walls are read as boxes (blocks exactly, unions and meshes as their bounding boxes; spheres, cylinders and wedges are ignored).

A **green** preview is a closed hole — parts all the way round it. **Amber** means the gap runs off past the parts it found (open air), which the tool only offers if you ask it to.

### Settings

- **Fill**:
    - One rectangle: the single biggest rectangle of the gap under your cursor, as one part — what an opening wanting one pane wants.
    - Whole hole: the entire gap, tiled by as few parts as it takes — an L-shaped gap comes back as two parts that meet exactly, a cross as three. Nothing overlaps and nothing sticks out.
    - Hold **Shift** in the viewport to preview the other one for as long as you hold it.
- **Thickness**:
    - Match neighbours: as tall as the part the fill leans against — a wall opening fills to the wall's own thickness.
    - Fixed: the stud value below, whatever is around it.
- **Grow (studs)**: grow every piece on all four sides so it bites into the parts around it instead of merely touching. `0` fits the gap exactly; a small amount helps when the surrounding parts are turned at an angle to each other.
- **Match neighbouring part**: take colour, material, transparency, anchoring and collision from the part the fill shares the most edge with, so a filled hole disappears into the wall it was in.
- **Offer open gaps too**: also fill gaps that run off the edge of the build — a notch at the corner of a wall, a missing tile at the edge of a floor. They are squared off at the outside of the surrounding parts and preview in amber.
- **Fill every hole in this surface**: fills every **closed** hole among the parts around the point you last hovered, in one go — how a floor gets all its missing tiles back at once.

## Splitter

Cuts one part into two. Point at any face and the part is drawn as the two parts a click would leave — one green, one blue, with the cut plane between them — and the plane follows your cursor across the face. Click and they are built: no CSG and no meshes, just two plain parts that exactly fill the one that was there, so both halves can still be resized, rounded, coloured and split again.

![Splitter - screenshot needed](/img/placeholder.svg)

Your cursor steers the **direction** as well as the position: the cut runs parallel to the edge you are nearest, so drifting towards a wall's end stands the plane up alongside it, and drifting towards its top lies the cut down flat. Hold **Shift** to turn the cut the other way for as long as you hold it. A cut only ever runs across the two axes lying *in* the face you point at — point at another face for the third.

The **larger half is the original part**, resized; only the smaller one is new. Nothing is destroyed, and undo hands back exactly what went in. Blocks split on any axis; cylinders, wedges and trusses only across the one axis that leaves them the shape they were (the tool says so at the cursor when you point at the wrong face). For meshes, unions and cuts at an angle, use the [Katana](#katana-and-laser-cuts).

### Settings

- **Cut**:
    - At the cursor: the plane follows your mouse across the face, with a readout showing what the two halves will measure.
    - In the middle: halves the part; the cursor still steers the direction, not the position.
- **Snap (studs)**: the cut snaps to steps measured from the near end of the part along the axis you are cutting — `1` cuts a 10-stud wall into 1|9, 2|8, 3|7… `0` is freehand. Measured along the *part*, not in world space, so halves land on round sizes however the part is turned.
- **Gap (studs)**: material taken out at the seam, like the width of a blade — for panel lines, expansion joints, or simply seeing that the part really came apart. `0` leaves the halves touching exactly; the gap is shared evenly so the cut stays where you put it.
- **Copy contents to the new half**: the larger half keeps its name, children and welds regardless. On, the new half is a full copy (decals, attachments, welds, scripts); off, it is the bare part — what you want when the contents only made sense once.

## Replacer

Swaps what is already in your place for something better, keeping where it stood. Pick the model or part you want in the panel — the same template picker the rest of the plugin uses — start the tool, and everything you hover is drawn as the template already standing in its place: **red** outline for what goes, **green** for what arrives. Click and the swap happens: the replacement takes the old one's position and rotation and is parented where the old one was parented. Nothing is destroyed — undo hands back the exact model that went in.

![Replacer - screenshot needed](/img/placeholder.svg)

A hundred first-draft trees turned every which way come back as the real tree turned every which way, one click each.

### Settings

- **Replace** — how far out from the part you point at a click reaches (a grouping model has no geometry of its own to hover, so you point at what is inside it):
    - Whole model: the outermost model — point at a canopy inside *Plant → Bush → Canopy* and the whole plant goes. Folders are walked straight through.
    - Inner model: the nearest model instead — the bush, not the plant. For taking an assembly apart a piece at a time.
    - Just the part: only the single part under the cursor.
    - Whatever this is set to, hold **Shift** to reach one group further out or **Alt** one further in for that click; the readout at the cursor counts off where you are, and the red outline always shows exactly what is about to go.
- **Line up by**:
    - Centre: matches the middles of their bounding boxes — the safe default.
    - Bottom: the new underside goes where the old underside was, so a taller tree keeps its roots in the ground instead of hovering.
    - Pivot: the template's pivot lands exactly on the old pivot — exact when both models' pivots were placed deliberately.
- **Keep the old rotation**: on, the replacement is turned the way the old one was turned (the arrangement survives, only the geometry changes); off, every replacement faces the way the template faces.
- **Match the old size**: scale the replacement evenly so it fills the box the old one filled — for placeholders of varying size. Off (the default) places the template at the size it was built.
- **Keep the old name**: rename the replacement to whatever the old one was called — worth having when scripts look things up by name.

## Reorient

Fixes a part whose axes point the wrong way — the model is lying on its side, or its forward is really its top. Hover a part and a **blue** patch and arrow show which face is its forward right now; the face under your mouse lights up **amber**, showing what it would become. Click it and the part swaps its axes onto that face: width, height and depth swap over with them, so a block keeps sitting in exactly the same place and only its facing changes. **Green** means that face is already the forward one.

![Reorient - screenshot needed](/img/placeholder.svg)

Decals, attachments, welds and stud surfaces are carried over to the new axes, so nothing jumps out of place. A **red** outline warns that the part is not a plain block (a wedge, cylinder, mesh or union): its axes are baked into its shape, so reorienting will visibly turn it.

### Settings

- **Clicked face becomes**: Forward (the part's Front — the direction Roblox treats as facing), Up (its Top), or Right. The blue arrow always points at whichever one you pick.
- **Apply to whole selection**: one click reorients every selected part the same way, described in each part's own axes — click the top of one fence post to say "the top is the forward" and all the selected posts turn their own tops forwards, even ones standing at different angles.
- **Mark selected parts**: show the blue face patch and arrow on every selected part (up to 24), so you can see which way a whole group faces at a glance.

## Related

- [Shape Builder — Curve (Bezier Path)](/docs/shape-builder#shape---curve-bezier-path)
- [Changelog — 1.9.11](/docs/changelog#1911)
