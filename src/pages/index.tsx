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
	const heroBgUrl = useBaseUrl("/img/home/hero-bg.jpg");
	return (
		<header
			className={clsx("hero hero--primary", styles.heroBanner)}
			style={{
				backgroundImage: `url(${heroBgUrl})`,
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
			</main>
		</Layout>
	);
}
