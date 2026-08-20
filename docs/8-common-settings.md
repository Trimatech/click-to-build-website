---
id: reference-common-settings
title: Common Settings
---

## What it is ℹ️

Shared options that appear in every builder panel. They control how points are placed, how points align to surfaces, and how results are finalized. Use them the same way across Shape Builder, Structure Builder, and Model Placer.

## When can you change these 🕒

- Before drawing, to set snapping and surface behavior
- While drawing, to tweak offsets or grid size for precision
- Just before completing drawing, to control final unioning or alternating offsets
- At any time; previews refresh automatically

## Panels 🎛️

### Punch Settings

Punch Mode turns your current shape into a cutter instead of a builder. While it's on, the preview shows the cutter. When you finish making the cut shape, the plugin subtracts the cutter from target parts:

- Blocks can either slice parts into multiple pieces (Cut Parts) or use Solid Modeling (boolean subtract).
- All other shapes use Solid Modeling automatically.
- Nothing is applied until you finish making the cut part; Undo works as usual.
- By default, the cutter will cut everything it touches. Parts can be inside a folder or model, or nested deep in the Explorer tree — it does not matter. If it touches the part, it will cut it.
- Tip: Use "Only selected parts" to limit the operation, and "Keep Cutout" if you need the removed piece (e.g., making a door from a wall).

#### Settings for all Shapes except Block

![Punch Settings](/img/common/punch-settings-other.png)

- Enable Punch Mode: Use shape as cutter/puncher instead of builder.
- Keep Cutter Part: Keep the shape you used to punch as a separate part. (Enable if you also need the cutter for various reasons. E.g., you cut a tunnel through many parts and want the cutter part to be used for collision detection inside the tunnel.)
- Scope:
    - All touching parts (Cuts through everything)
    - Only selected parts (Cuts only through selected parts)

- Solid Modeling: Merge into a single union when using boolean subtract.

#### Settings for Block

![Punch Settings](/img/common/punch-settings-block.png)

- Mode:
    - Cut Parts into multiple parts: slice touching parts into separate pieces.
    - Use Solid Modeling to punch holes: performs a boolean subtract using Roblox unions.
- Cut Parts Settings (visible when "Cut Parts" mode is selected):
    - Cut from Block: (Automatic, included for completeness)
    - Cut from Wedge: Enable if wedges should be cut rather than falling back to Solid Modeling (disable if cutting from a difficult angle does not work, or you are fine cutting wedges with Solid Modeling)
    - Fallback to Solid Modeling for non‑cuttable parts: (Included for completeness so you know what is happening. If requested, this can be made editable to limit cut parts. Limiting can also be done with the "Only selected parts" setting)
    - Keep Cutout: Keep the removed piece as a separate part (can create multiple parts depending on the cut; cutouts will be placed in a separate folder for easy selection)

##### Demo of Rectangle cutter cutting part into wedges as parts

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/_vBB56djae0"
  title="Rectangle cutter creates wedges as parts demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

##### Demo of all other shapes cutting using Solid Modeling

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/jrOoAEcGit8"
  title="Solid Modeling cutting demo for other shapes"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

#### Notes 📝

- Polygon, Donut, and Sector cutters are experimental due to triangulation inaccuracies.

### Template Settings

![Template Settings](/img/common/template-settings.png)

Select a part to use as a template. The selection box shows the current template. Click "Set to Part". You can switch templates when selecting another part and clicking "Change to Part".

- **History dropdown**: Quickly re-select previously used templates from a dropdown without navigating the Explorer. Templates are automatically added to history when used.
- Reload Template button: Reloads template. Useful if you make changes to your template model.
- Reset Template button: Resets template
- Copy shape (Block only): Reuse the template's geometric shape where supported. E.g., you can use a `UnionOperation` as a shape. For other shapes, the plugin creates the correct primitive and then applies the properties above.
- Copy size (only in Structure Builder): Match the template's dimensions when placing instances.

What gets copied to the new Shape (when a template is set):

- Visual: Color, Material, Material Variant, Transparency, Reflectance, CastShadow
- Physics: Anchored, CanCollide, CanTouch, CanQuery, Massless, CustomPhysicalProperties
- Surfaces: Top/Bottom/Left/Right/Front/Back surface types
- "Shape" property (only when both source and target are `Part`)
- Studio: Locked flag
- Children: All child instances are cloned to the generated part (e.g., Decals, SurfaceAppearance, Lights, Attachments)
- Attributes are not copied

#### Demo for using Template in Structure Builder

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/yWDLoMx1CE8"
  title="Template usage in Structure Builder demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

### Surface Settings

![Surface Settings](/img/common/surface-settings.png)

- Points on one surface: Constrains new points to the current work plane for even elevation.
- Max Corner (∠): Limits the turn angle between consecutive segments to keep corners clean.
- Ignore invisible parts: Skip fully transparent/invisible parts when snapping and cutting, so hidden helper parts don't interfere with building. Leave off to keep treating invisible parts as solid surfaces.

  ![Ignore invisible parts - screenshot needed](/img/placeholder.svg)

### Offset Settings

![Offset Settings](/img/common/offset-settings.png)

- Bottom on surface: Place the bottom of the generated part on the hit surface.
- Unit: Choose Studs or % for the offset value.
- Offset: Distance above/below the surface. Disabled when Bottom on surface is on.

### Finalization Settings

![Finalization Settings](/img/common/finalization-settings.png)

- Union (Applied on finish): Union created parts on commit. Reduces seams; can impact performance with many parts.
- Alternating Offset (Applied at finish): Apply a top/bottom alternating adjustment to results.
- Alternating Offset value: Magnitude of the alternating adjustment. Use 0.001–0.01 to minimize texture Z‑fighting when not unioning.

### Grid Settings

![Grid Settings](/img/common/grid-settings.png)

#### Grid Mode

- Default: Is on surface that mouse points on

    ![Grid Mode — Default](/img/common/grid-mode-default.gif)

- Rotated to part: Aligns to the hit surface/part orientation.

    ![Grid Mode — Rotated to part](/img/common/grid-mode-rotatedToPart.gif)

- World grid: Uses global position (0,0,0) instead of hit surface/part position

    ![Grid Mode — World](/img/common/grid-mode-world.gif)

- Camera grid: Grid is locked to the position of camera with offset

        -   Camera Distance: Offset of the plane from the camera (studs).
        -   Camera Workplane Axis: Lock the plane to None, X, Y or Z.

            ![Grid Mode — Camera](/img/common/grid-mode-camera.gif)

#### Other settings

- Grid Size: Spacing used for grid snapping.
- Quick Grid: One‑tap grid size presets. Two systems ship with the plugin — **Halving** (16 → 0.1, every step half the one above) and **Round numbers** (10, 5, 1, 0.5, 0.2, 0.1) — and you can save your own set beside them and switch between them in one click. The preset row can be pinned into the viewport PINNED bar.
- Snap to part: Snap points to nearby part vertices/edges. This also works in the constrained defining steps — while dragging a height, depth, or top size, snap points from nearby parts are projected onto the axis you are defining, so you can match an existing part's height without measuring it.
- Align grid to current edge: Rotate and position the grid to the current edge on the work surface.

    ![Grid Mode — Align to edge](/img/common/grid-align-current-edge.gif)

- Tip: Press V while building to lock/unlock the current plane.

#### Demo of using Grid Mode "Camera" in Shape Builder

<iframe
    width="80%"
    height="420"
    src="https://www.youtube.com/embed/9_SBb4Cul5Q"
    title="Grid usage demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    > </iframe>
    
#### Demo of using "Align grid to current edge" in Model Placer

<iframe
    width="80%"
    height="420"
    src="https://www.youtube.com/embed/oiYGyTu9LJc"
    title="Grid usage demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    > </iframe>

#### Demo of using "Align grid to current edge" in Shape Builder

<iframe
    width="80%"
    height="420"
    src="https://www.youtube.com/embed/nvRp8FfR1eQ"
    title="Grid usage demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    > </iframe>

#### Demo for using the Grid

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/UzAK-zyTFQs"
  title="Grid usage demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

#### Demo for using the Grid on any surface

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/piqlfcJQqjo"
  title="Grid on any surface demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

### Advanced Settings

![Advanced Settings](/img/common/advanced-settings.png)

- Point Size: Visual size of control points while editing.
- Custom grid color: Leave off to let grid lines auto-adapt to the surface color, or turn it on to paint every grid line with one fixed color.
    - Grid Color: Color picker shown when Custom grid color is enabled.
- Show info box: Toggle on‑screen hints and shortcuts.
- Show distances UI: Display live distances between points while placing. This also shows an **angle indicator** — X/Z component lines and the angle between the active segments, with a right-angle marker and perpendicular guide when the segments are axis-parallel.

  ![Angle indicator - gif needed](/img/placeholder.svg)

- Show spacing UI: Measure the shape you are drawing against the last one you built, square to its nearest face — so a row of fence posts reads its own spacing as you place it, with nothing to count. A thin line is drawn across the space between the two with the clear gap written on it in studs, and nothing else. It follows the cursor before the first click, then the shape you are drawing, and it measures out of the last build's own faces however that build is turned.
- Show coordinates UI: Display point coordinates (X, Y, Z values) while placing.
- Output Type: Decide whether generated geometry is grouped into a `Folder` or `Model`.
- Output To: Route results to `Workspace` (default) or the first selected folder/model in the Explorer. If you select a part, the plugin climbs up the hierarchy until it finds a folder/model; if nothing valid is selected it safely falls back to `Workspace`.
    - Selection Lock: When "Selected Folder/Model" is chosen, pick "Follow Selection" to update the target as you select different items, or "Lock Current" to persist the target even when your selection changes.
- Enable logging: Print internal events to the console for debugging.
- UI Scale: Scale the plugin UI (useful for high‑DPI or small screens).
- Reset Settings: Revert all settings to defaults and end active building.

### Pinned viewport shortcuts

Rows with a pin button can be added to the viewport **PINNED** bar. This keeps frequently used controls close to the cursor while you build, without reopening the full plugin panel.

Common pinned controls include:

- Shape quick-launch buttons from Shape Builder.
- Tool quick-launch buttons from the Tools dock.
- Quick Grid values, Grid Mode, Snap to part, and Align grid to current edge.
- Quick Offset, Bottom on surface, Points on one surface, Ignore invisible parts, Union on finish, Alternating Offset, and Punch Mode.
- Template panel access and viewport overlay toggles.

Use **Show pinned UI** in Advanced Settings to hide or show the pinned bar.

### What's New (changelog in plugin)

At the bottom of each builder panel (and the Tools dock), the **What's New** accordion lists recent release notes. A red dot appears when there is a changelog you have not opened yet — expand the accordion once to mark it as read.

![Whats New accordion - screenshot needed](/img/placeholder.svg)

## Related 🔗

- See [Shape Builder](/docs/shape-builder), [Structure Builder](/docs/structure-builder), and [Model Placer](/docs/model-placer) for builder‑specific options
- See [Keyboard Shortcuts](/docs/reference-shortcuts) to work faster
