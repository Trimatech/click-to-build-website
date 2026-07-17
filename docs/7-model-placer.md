---
id: model-placer
title: Model Placer
---

:::warning Deprecated

Model Placer is deprecated. Use the [Shape Builder's **Line** or **Curve** shape](/docs/shape-builder) with a model template instead — they offer the same placement modes, corner settings, and Magic Merge, plus point editing, spacing, extra corner types, and closable loops. Model Placer keeps working for now, but new features land in the Shape Builder.

:::

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
-   Reload Template button: Reloads the template. Useful if you make changes to your template model.
-   Reset Template button: Resets the template.

#### Axis

Controls the direction in which consecutive models are placed. The preview shows a neon blue guide along the primary axis. Saved per template — see Settings persistence below.

-   If axis detection behaves unexpectedly, add or adjust a `PrimaryPart` using "Add primary part 🧱" and try again.
-   **Flip Model**: Reverses the placement axis direction for templates that were authored facing the other way. The axis indicator and placement offset update to match, so the model lines up without re-authoring its `PrimaryPart`.

    ![Flip Model toggle - screenshot needed](/img/placeholder.svg)

### Corner Settings / Other Settings

![Model Corner Settings](/img/model/model-corner-settings.png)

#### Corner Alignment modes:

-   Outside: One outer corner always touches (inverse of Inside).

    ![Model Corner Outside](/img/model/model-corner-outside.gif)

    Using Magic Merge ✨:

    ![Magic Merge Outside](/img/model/magic-merge-outside.gif)

-   Inside: One inner corner always touches (inverse of Outside).

    ![Model Corner Inside](/img/model/model-corner-inside.gif)

    Using Magic Merge ✨:

    ![Magic Merge Inside](/img/model/magic-merge-inside.gif)

-   Fill: Moves the model so its corners connect and there is no gap.

    ![Model Corner Fill](/img/model/model-corner-fill.gif)

    Using Magic Merge ✨:

    ![Magic Merge Fill](/img/model/magic-merge-fill.gif)

-   Touch: Has the closest corner always touching (dynamic version of Outside/Inside).

    ![Model Corner Touch](/img/model/model-corner-touch.gif)

    Using Magic Merge ✨:

    ![Magic Merge Touch](/img/model/magic-merge-touch.gif)

-   None: The model’s center is touching.

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

### Template Mode

![Model Template Settings](/img/model/model-template-settings.png)

#### How it behaves

-   Uses Start/End Segment % to split the template into start cap, middle span, and end cap along the primary axis.
-   At each point, the start cap is placed; between points, the middle span repeats or extends; the end cap closes the run when configured.
-   Preview shows a color legend (start/end: blue; middle: green) and a readout in studs for the selected percentages.

#### Start/End segments

-   0/0 (default): single segment is used as‑is (no caps).
-   Only Start or only End is set: two segments (a cap at one side and the middle).
-   Both Start and End are set: three segments (start cap, middle, end cap).
-   Valid range is 0–49% for both.

#### Extend to mouse position

-   Enabled: The template extends exactly to your mouse position, allowing for any length.
-   Disabled: The template snaps to fixed segment widths based on your model size — ideal when repeating parts must line up for Magic Merge.

#### Cut parts at start/end segments

You can create your model as you like, without taking caps into account. Creating caps happens on the fly!

-   Enabled: Slices any parts of the template that cross the Start/End boundaries. The plugin creates two thin cutting planes at the selected percentages and trims intersecting parts so the start and end caps are clean and the middle can repeat seamlessly.
-   Disabled: Nothing is cut.
-   Your original template is never edited — the cutting happens on a temporary clone used to generate the start/middle/end prototypes.
-   A small preview appears below the toggle showing where the cuts happen (two translucent planes at the boundaries). It shows the cut start and end caps, with the repeatable middle section between them.
-   Note: On very dense templates, cutting may take a moment.

Using model with start segment defined

![Model with start segment](/img/model/model-placer-template-start-segment.gif)

Using a similar model without a start segment (0%).

![Model with start no segment](/img/model/model-placer-template-no-start-segment.gif)

Spacing:

-   Spacing (studs) applies in None and Copy placement modes. In Template mode, spacing is governed by the segmenting/segment widths.

### Copy Mode

#### How it behaves

-   Places multiple models in one click between the last point and your current mouse position.
-   With Spacing, each model after the first is placed after a full pre-gap; all gaps are equal (including first → second).
-   With Extend to mouse position enabled, the run ends exactly at your mouse position.

#### Extend to mouse position

-   Enabled: the next point recorded is your exact mouse position (not the clamped repeat end). This lets you finish runs precisely at arbitrary lengths.
-   Disabled: the path advances by whole model lengths (plus spacing) from the last point.

#### Spacing with Copy

-   Spacing is applied as a full pre-gap before each placed model (except the very first), so the first‑to‑second gap matches all other gaps.
-   This also applies in the live preview (after your first point, only the repeated preview copies are rendered, so the preview spacing matches the final result).

![Model with spacing](/img/model/model-placer-spacing.gif)

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

#### Create a model with structure builder. Use Model Placer to place instances in a row

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/c5E-w9b4Bc0"
  title="Create model with Structure Builder and place in row"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
