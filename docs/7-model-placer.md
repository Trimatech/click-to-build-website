---
id: model-placer
title: Model Placer
---

## What it is ℹ️

Place complex models in sequence and seamlessly connect them.

## When to use 🧭

-   When you want to place models in sequence or in a line
-   When you want to place complex models in sequence and automatically merge matching parts within models

## Panels 🎛️

### Model Template Settings

![Model Settings](/img/model/model-settings.png)

Select a model or part to use as a template.
The selection box shows the currently selected template, its name, and size (X×Y×Z), and whether the size is read from `PrimaryPart` (if present) or from the model’s bounding box.
You can change the template by selecting another model and clicking "Change to Model".

-   Add PrimaryPart button: Adds a `PrimaryPart` to the model in the current orientation (available only for `Model`). If you have problems with model orientation, create or adjust a `PrimaryPart` and try again.
-   Reload Template button: Reloads template. Useful if you make changes to your template model.
-   Reset Template button: Resets template

#### Axis

Controls the direction in which consecutive models are placed. The preview shows a neon blue guide along the primary axis. Saved per template — see Settings persistence below.

-   If axis detection behaves unexpectedly, add or adjust a `PrimaryPart` using "Add primary part 🧱" and try again.

### Corner Settings / Other Settings

![Model Corner Settings](/img/model/model-corner-settings.png)

#### Corner Alignment modes:

-   Outside: Has one corner always touching (same as Inside, just opposite)

    ![Model Corner Outside](/img/model/model-corner-outside.gif)

    Using Magic Merge ✨:

    ![Magic Merge Outside](/img/model/magic-merge-outside.gif)

-   Inside: Has one corner always touching (same as Outside, just opposite)

    ![Model Corner Inside](/img/model/model-corner-inside.gif)

    Using Magic Merge ✨:

    ![Magic Merge Inside](/img/model/magic-merge-inside.gif)

-   Fill: Moves the model so its corners connect and there is no gap

    ![Model Corner Fill](/img/model/model-corner-fill.gif)

    Using Magic Merge ✨:

    ![Magic Merge Fill](/img/model/magic-merge-fill.gif)

-   Touch: Has the closest corner always touching (dynamic version of Outside/Inside)

    ![Model Corner Touch](/img/model/model-corner-touch.gif)

    Using Magic Merge ✨:

    ![Magic Merge Touch](/img/model/magic-merge-touch.gif)

-   None: Center of the model is touching

    ![Model Corner None](/img/model/model-corner-none.gif)

    Using Magic Merge ✨:

    ![Magic Merge None](/img/model/magic-merge-none.gif)

-   Magic Merge ✨: Seamlessly merges connecting parts as you place models; helpful for walls/fences so segments look continuous. The chosen corner mode affects the merge: "Fill" removes or reduces parts, "Touch" extends parts, and "None" does both. Try different modes to get the effect you want.

-   Clean up small parts after merge 🧹: Removes unneeded tiny parts left after Magic Merge. These can appear when "Fill" or "None" corner modes are selected.

### Placement Mode

Choose how the plugin places your model as you add points:

-   None: Places a single model per click.
-   Copy: Places repeated copies of the current template up to the current mouse position from the previous point.
-   Template: Uses Start/End Segment % to create start/end caps and repeats/extends the middle segment between points (best for modular fences, walls, and roads).

![Model Template Settings](/img/model/model-template-settings.png)

When Template mode is active:

-   Start/End Segment % split your template along its primary axis into 1–3 segments:
    -   0/0 (default): single segment is used as‑is.
    -   Only Start or only End is set: two segments (a cap at one side and the middle).
    -   Both Start and End are set: three segments (start cap, middle, end cap).
-   The Start segment's parts are placed at each point start; the middle segment contains extendable and/or repeating parts between points; the End segment's parts finish the run.
-   Valid range is 0–49% for both. The preview shows a color legend (start/end: blue; middle: green) and a studs readout for the selected percentages.
-   Extend to mouse position: Controls how the template extends between points:
    -   Enabled: The template extends exactly to your mouse position, allowing for any length.
    -   Disabled: The template snaps to fixed segment widths based on your model size, creating consistent repeating patterns. Good if there are repeating parts that need to be Magic Merged together

Using model with start segment defined

![Model with start segment](/img/model/model-placer-template-start-segment.gif)

Using similar model without start segment (0%)

![Model with start no segment](/img/model/model-placer-template-no-start-segment.gif)

Spacing:

-   Spacing (studs) applies in None and Copy placement modes. It leaves that amount of space between placed templates. In Template mode, spacing is governed by the segmenting logic.

## Settings persistence

Some settings are saved to the template model/part as attributes instead of plugin storage. This makes switching templates easier — you do not have to reconfigure each time.

Settings saved to template attributes:

-   `StartSegmentPercent`
-   `EndSegmentPercent`
-   `PrimaryAxis`
-   `MagicMergeEnabled`

Note: These attributes are stored on the template only. The plugin does not keep them on finalized placed results.

## Related 🔗

-   See [Common Settings](/docs/reference-common-settings) for shared options across builders
-   See [Shortcuts](/docs/reference-shortcuts) for shared options across builders

#### Showcasing different corner modes and Magic Merge

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/T2cPGHspSiQ"
  title="Corner modes and Magic Merge demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

#### Use any model. Add custom PrimaryPart for better placement

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/2MOjwisyKzU"
  title="Add custom PrimaryPart and placement demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

#### Create a model with structure builder. Use Model Placer to place instances in row

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/c5E-w9b4Bc0"
  title="Create model with Structure Builder and place in row"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
