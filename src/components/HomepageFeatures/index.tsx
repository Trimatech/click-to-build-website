import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	image: string;
	description: ReactNode;
	to: string;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Seamless Models",
		image: require("@site/static/img/home/seamless-models.png").default,
		to: "/docs/model-placer",
		description: (
			<>
				Place models sequentially in a row without gaps. Magic Merge and alternating offsets reduce seams and
				z-fighting.
			</>
		),
	},
	{
		title: "Simple Shapes",
		image: require("@site/static/img/home/simple-shapes4.png").default,
		to: "/docs/shape-builder",
		description: <>Draw blocks, cylinders, wedges, spheres, polygons, triangles and more—fast.</>,
	},
	{
		title: "Any Surface",
		image: require("@site/static/img/home/any-surface.png").default,
		to: "/docs/reference-common-settings#surface-settings",
		description: <>Snap to grid or surfaces with offsets. Rotate grid to part for exact alignment.</>,
	},

	{
		title: "Corner Modes",
		image: require("@site/static/img/home/corner-modes.png").default,
		to: "/docs/structure-builder#corner-settings",
		description: <>Round, Bevel, Fill, Touch or None — clean corners without manual fixes.</>,
	},
	{
		title: "Puncher",
		image: require("@site/static/img/home/puncher.png").default,
		to: "/docs/reference-common-settings#punch-settings",
		description: (
			<>
				Use any shape as a cutter to punch holes or slice parts. Keep cutouts, limit scope, or use boolean
				subtract.
			</>
		),
	},
	{
		title: "Edit Polygons",
		image: require("@site/static/img/home/edit-polygon3.png").default,
		to: "/docs/shape-builder#edit-mode",
		description: (
			<>Move/add/delete points with live previews. Convert selection to boundary/exact polygons and refine.</>
		),
	},

	{
		title: "Full History",
		image: require("@site/static/img/home/history.png").default,
		to: "/docs/intro",
		description: <>Non-destructive previews with undo/redo. Explore ideas and revert instantly.</>,
	},
	{
		title: "Templates",
		image: require("@site/static/img/home/templates2.png").default,
		to: "/docs/reference-common-settings#template-settings",
		description: <>Copy materials and properties from a template to keep a consistent style.</>,
	},
	{
		title: "Click & Build",
		image: require("@site/static/img/home/click-build2.png").default,
		to: "/docs/quick-start",
		description: <>Place points; the plugin builds between them with live previews. Finish with one click.</>,
	},
];

function Feature({ title, image, description, to }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<Link to={to} className={styles.featureLink}>
				<div className={styles.featureImage} style={{ backgroundImage: `url(${image})` }} />

				<div className="text--center padding-horiz--md padding-top--md">
					<Heading as="h3">{title}</Heading>
					<p>{description}</p>
				</div>
			</Link>
		</div>
	);
}

export default function HomepageFeatures(): ReactNode {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
