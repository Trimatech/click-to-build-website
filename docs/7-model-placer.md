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

Select a model to use as a template. Only models can be selected. If you want to use a `Part`, `UnionOperation`, `MeshPart`, etc., convert it to a `Model` first.
The selection box shows the currently selected model template.
It also shows the model name and size (X×Y×Z) and whether the size was taken from the `PrimaryPart` (if it exists) or from the bounding box.
You can change the template by selecting another model and clicking "Change to Model".

-   Add PrimaryPart button: Adds a `PrimaryPart` to the model in the current orientation. If you have problems with model orientation, create or adjust a `PrimaryPart` and try again.
-   Reload Template button: Reloads template. Useful if you make changes to your template model.
-   Reset Template button: Resets template

#### Axis

This is the direction where the next model will be placed. The preview also shows a blue line in that direction. If there are issues with axis detection, create a `PrimaryPart` with "Add primary part 🧱" and try again.

### Corner Settings / Other Settings

![Model Corner Settings](/img/model/model-corner-settings.png)

#### Corner Alignment modes:

-   Outside: Has one corner always touching (same as Inside, just opposite)

    ![Model Corner Outside](/img/model/model-corner-outside.gif)

    Using Magic Merge✨:

    ![Magic Merge Outside](/img/model/magic-merge-outside.gif)

-   Inside: Has one corner always touching (same as Outside, just opposite)

    ![Model Corner Inside](/img/model/model-corner-inside.gif)

    Using Magic Merge✨:

    ![Magic Merge Inside](/img/model/magic-merge-inside.gif)

-   Fill: Moves the model so its corners connect and there is no gap

    ![Model Corner Fill](/img/model/model-corner-fill.gif)

    Using Magic Merge✨:

    ![Magic Merge Fill](/img/model/magic-merge-fill.gif)

-   Touch: Has the closest corner always touching (dynamic version of Outside/Inside)

    ![Model Corner Touch](/img/model/model-corner-touch.gif)

    Using Magic Merge✨:

    ![Magic Merge Touch](/img/model/magic-merge-touch.gif)

-   None: Center of the model is touching

    ![Model Corner None](/img/model/model-corner-none.gif)

    Using Magic Merge✨:

    ![Magic Merge None](/img/model/magic-merge-none.gif)

-   Magic Merge ✨: Seamlessly merges connecting parts as you place models; helpful for walls/fences so segments look continuous. The chosen corner mode affects the merge: "Fill" removes or reduces parts, "Touch" extends parts, and "None" does both. Try different modes to get the effect you want.

-   Clean up small parts after merge 🧹: Removes unneeded tiny parts left after Magic Merge. These can appear when "Fill" or "None" corner modes are selected.

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
