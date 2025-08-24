---
id: structure-builder
title: Structure Builder
---

## What it is ℹ️

Generate repeated or patterned structures like walls, fences, posts, or grids from simple inputs.

## Problems it solves 🧩

-   Spending too long laying out repeated parts one-by-one
-   Inconsistent spacing and misaligned endpoints on corners
-   Hand-building round or beveled corners for long runs
-   Gaps at corners when elements meet at odd angles
-   Rework from destructive edits when experimenting with layouts

## When to use 🧭

-   Laying out long runs of repeated parts (walls, fences, rails, curbs)
-   Building paths/roads/sidewalks with smooth round/bevel/touch/fill corners
-   Keeping exact spacing and clean endpoints without gaps or overlap
-   Placing rows or grids of posts, lights, tiles, or floor panels
-   Conforming placement to surfaces or offsetting above them
-   Reusing a template part to copy materials and properties across the run
-   Iterating quickly with non-destructive previews and undo/redo
-   Optionally unioning on finish to reduce part count

## Panels 🎛️

### Corner Settings ➰

![Structure Corner Settings](/img/structure/structure-settings.png)

Note: Corner Mode is applied when adding a new part. No live preview.

#### Corner Mode Round

-   Wedges: Uses wedges when generating a round corner
-   -   Segments: Number of segments to add. Default 60 for a full circle. For a 90° corner, it uses one quarter of that (15). Setting it to 1 behaves like Corner Mode Bevel.

    ![Structure Corner Round](/img/structure/corner-round-wedges.gif)

-   Cylinder: Uses a cylinder to add a round corner. Less accurate in some conditions, but corners are smoother.

    ![Structure Corner Round](/img/structure/corner-round-cylinder.gif)

#### Corner Mode Bevel

    ![Structure Corner Bevel](/img/structure/corner-bevel.gif)

#### Corner Mode Fill: Extends parts so the farthest corners connect

    ![Structure Corner Fill](/img/structure/corner-fill.gif)

#### Corner Mode Touch: Shrinks parts so the closest corners are touching.

    ![Structure Corner Touch](/img/structure/corner-touch.gif)

#### Corner Mode None: Centers are touching

     ![Structure Corner None](/img/structure/corner-none.gif)

#### Corner Mode Demo

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/EI39OVPx3Nw"
  title="Corner Mode Demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

## Tips 💡

-   Use "Alternating Offset" from [Finalization Settings](/docs/reference-common-settings#finalization-settings) to avoid texture Z‑fighting if not unioning the final result.

## Related 🔗

-   See [Common Settings](/docs/reference-common-settings) for shared options across builders
-   Use [Model Placer](/docs/model-placer) for final alignment and batch tweaks

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

#### Structure Builder in action - building paths in a real game

<iframe
  width="80%"
  height="420"
  src="https://www.youtube.com/embed/6Dd9B2cxGYY"
  title="Structure Builder paths in real game demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
