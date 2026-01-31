import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";

import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	const docsHeaderImageUrl = useBaseUrl("/img/home/docs-header-image.png");
	return (
		<header
			className={clsx("hero hero--primary", styles.heroBanner)}
			style={{
				backgroundImage: `url(${docsHeaderImageUrl})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="container">
				<Heading as="h1" className="hero__title">
					Build big worlds in fewer clicks
				</Heading>

				<p className="hero__subtitle">Making building fun again 😊</p>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/docs/quick-start">
						Start Building 🚀
					</Link>
					<Link
						className="button button--secondary button--lg"
						href="https://www.roblox.com/games/111890734008547/Click-to-Build-Demo"
						target="_blank"
						rel="noopener noreferrer"
					>
						Try Demo 🎮
					</Link>
				</div>

				<div className={styles.pluginBadge} title="Roblox Studio plugin">
					Roblox Studio plugin
				</div>
			</div>
		</header>
	);
}

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={`${siteConfig.title} - Roblox Studio plugin`} description={siteConfig.tagline}>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
				<div className={styles.bottomLinks}>
					<Link
						className="button button--secondary button--lg"
						href="https://www.roblox.com/games/111890734008547/Click-to-Build-Demo"
						target="_blank"
						rel="noopener noreferrer"
					>
						Try Demo
					</Link>
					<Link
						className="button button--secondary button--lg"
						href="https://create.roblox.com/store/asset/125786968176382/Click-To-Build-Plugin"
						target="_blank"
						rel="noopener noreferrer"
					>
						Get on Roblox Store
					</Link>
					<Link
						className="button button--secondary button--lg"
						href="https://devforum.roblox.com/t/click-and-build-easily-create-walls-paths-and-more/3633000"
						target="_blank"
						rel="noopener noreferrer"
					>
						DevForum
					</Link>
				</div>
			</main>
		</Layout>
	);
}
