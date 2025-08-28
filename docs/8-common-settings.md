---
id: reference-common-settings
title: Common Settings
---

## What it is ℹ️

Shared options that appear in every builder panel. They control how points are placed, how points align to surfaces, and how results are finalized. Use them the same way across Shape Builder, Structure Builder, and Model Placer.

## When can you change these 🕒

-   Before drawing, to set snapping and surface behavior
-   While drawing, to tweak offsets or grid size for precision
-   Just before completing drawing, to control final unioning or alternating offsets
-   At any time; previews refresh automatically

## Panels 🎛️

### Punch Settings

Punch Mode turns your current shape into a cutter instead of a builder. While it's on, the preview shows the cutter. When you finish making the cut shape, the plugin subtracts the cutter from target parts:

-   Blocks can either slice parts into multiple pieces (Cut Parts) or use Solid Modeling (boolean subtract).
-   All other shapes use Solid Modeling automatically.
-   Nothing is applied until you finish making the cut part; Undo works as usual.
-   By default, the cutter will cut everything it touches. Parts can be inside a folder or model, or nested deep in the Explorer tree — it does not matter. If it touches the part, it will cut it.
-   Tip: Use "Only selected parts" to limit the operation, and "Keep Cutout" if you need the removed piece (e.g., making a door from a wall).

#### Settings for all Shapes except Block

![Punch Settings](/img/common/punch-settings-other.png)

-   Enable Punch Mode: Use shape as cutter/puncher instead of builder.
-   Keep Cutter Part: Keep the shape you used to punch as a separate part. (Enable if you also need the cutter for various reasons. E.g., you cut a tunnel through many parts and want the cutter part to be used for collision detection inside the tunnel.)
-   Scope:

    -   All touching parts (Cuts through everything)
    -   Only selected parts (Cuts only through selected parts)

-   Solid Modeling: Merge into a single union when using boolean subtract.

#### Settings for Block

![Punch Settings](/img/common/punch-settings-block.png)

-   Mode:
    -   Cut Parts into multiple parts: slice touching parts into separate pieces.
    -   Use Solid Modeling to punch holes: performs a boolean subtract using Roblox unions.
-   Cut Parts Settings (visible when "Cut Parts" mode is selected):
    -   Cut from Block: (Automatic, included for completeness)
    -   Cut from Wedge: Enable if wedges should be cut rather than falling back to Solid Modeling (disable if cutting from a difficult angle does not work, or you are fine cutting wedges with Solid Modeling)
    -   Fallback to Solid Modeling for non‑cuttable parts: (Included for completeness so you know what is happening. If requested, this can be made editable to limit cut parts. Limiting can also be done with the "Only selected parts" setting)
    -   Keep Cutout: Keep the removed piece as a separate part (can create multiple parts depending on the cut; cutouts will be placed in a separate folder for easy selection)

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

-   Polygon, Donut, and Sector cutters are experimental due to triangulation inaccuracies.

### Template Settings

![Template Settings](/img/common/template-settings.png)

Select a part to use as a template. The selection box shows the current template. Click "Set to Part". You can switch templates when selecting another part and clicking "Change to Part".

-   Reload Template button: Reloads template. Useful if you make changes to your template model.
-   Reset Template button: Resets template
-   Copy shape (Block only): Reuse the template’s geometric shape where supported. E.g., you can use a `UnionOperation` as a shape. For other shapes, the plugin creates the correct primitive and then applies the properties above.
-   Copy size (only in Structure Builder): Match the template’s dimensions when placing instances.

What gets copied to the new Shape (when a template is set):

-   Visual: Color, Material, Material Variant, Transparency, Reflectance, CastShadow
-   Physics: Anchored, CanCollide, CanTouch, CanQuery, Massless, CustomPhysicalProperties
-   Surfaces: Top/Bottom/Left/Right/Front/Back surface types
-   "Shape" property (only when both source and target are `Part`)
-   Studio: Locked flag
-   Children: All child instances are cloned to the generated part (e.g., Decals, SurfaceAppearance, Lights, Attachments)
-   Attributes are not copied

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

-   Points on one surface: Constrains new points to the current work plane for even elevation.
-   Max Corner (∠): Limits the turn angle between consecutive segments to keep corners clean.

### Offset Settings

![Offset Settings](/img/common/offset-settings.png)

-   Bottom on surface: Place the bottom of the generated part on the hit surface.
-   Unit: Choose Studs or % for the offset value.
-   Offset: Distance above/below the surface. Disabled when Bottom on surface is on.

### Finalization Settings

![Finalization Settings](/img/common/finalization-settings.png)

-   Union (Applied on finish): Union created parts on commit. Reduces seams; can impact performance with many parts.
-   Alternating Offset (Applied at finish): Apply a top/bottom alternating adjustment to results.
-   Alternating Offset value: Magnitude of the alternating adjustment. Use 0.001–0.01 to minimize texture Z‑fighting when not unioning.

### Grid Settings

![Grid Settings](/img/common/grid-settings.png)

#### Grid Mode

-   Default: Is on surface that mouse points on

    ![Grid Mode — Default](/img/common/grid-mode-default.gif)

-   Rotated to part: Aligns to the hit surface/part orientation.

    ![Grid Mode — Rotated to part](/img/common/grid-mode-rotatedToPart.gif)

-   World grid: Uses global position (0,0,0) instead of hit surface/part position

    ![Grid Mode — World](/img/common/grid-mode-world.gif)

-   Camera grid: Grid is locked to the position of camera with offset

        -   Camera Distance: Offset of the plane from the camera (studs).
        -   Camera Workplane Axis: Lock the plane to None, X, Y or Z.

            ![Grid Mode — Camera](/img/common/grid-mode-camera.gif)

#### Other settings

-   Grid Size: Spacing used for grid snapping.
-   Quick Grid: One‑tap presets 10, 5, 1, and the minimum size.
-   Snap to part: Snap points to nearby part vertices/edges.
-   Align grid to current edge: Rotate and position the grid to the current edge on the work surface.

    ![Grid Mode — Align to edge](/img/common/grid-align-current-edge.gif)

-   Tip: Press V while building to lock/unlock the current plane.

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
    
#### Demo of using "Align grid to current edge" in Model Builder

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

-   Point Size: Visual size of control points while editing.
-   Show info box: Toggle on‑screen hints and shortcuts.
-   Show distances UI: Display live distances between points while placing.
-   Enable logging: Print internal events to the console for debugging.
-   UI Scale: Scale the plugin UI (useful for high‑DPI or small screens).
-   Reset Settings: Revert all settings to defaults and end active building.

## Related 🔗

-   See [Shape Builder](/docs/shape-builder), [Structure Builder](/docs/structure-builder), and [Model Placer](/docs/model-placer) for builder‑specific options
-   See [Keyboard Shortcuts](/docs/reference-shortcuts) to work faster
