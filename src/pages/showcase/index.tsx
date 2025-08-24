import ShowcaseCard from "@site/src/components/Showcase/ShowcaseCard";
import { getAllTags, showcases } from "@site/src/data/showcases";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";

export default function ShowcaseOverview(): ReactNode {
	const [query, setQuery] = useState("");
	const [activeTag, setActiveTag] = useState<string | null>(null);

	const allTags = useMemo(() => getAllTags(showcases), []);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		return showcases.filter((item) => {
			const matchesQuery =
				!q ||
				item.title.toLowerCase().includes(q) ||
				item.description.toLowerCase().includes(q) ||
				item.tags.some((t) => t.toLowerCase().includes(q));
			const matchesTag = !activeTag || item.tags.includes(activeTag);
			return matchesQuery && matchesTag;
		});
	}, [query, activeTag]);

	return (
		<Layout title="Showcase" description="Real games using Click to Build plugin">
			<main style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem" }}>
				<Heading as="h1" style={{ marginBottom: "0.5rem" }}>
					Showcase
				</Heading>
				<p style={{ marginBottom: "1.25rem" }}>
					Explore projects and demos built with the Click to Build plugin. Use search and tags to filter.
				</p>

				<div
					style={{
						display: "flex",
						gap: "0.75rem",
						flexWrap: "wrap",
						alignItems: "center",
						marginBottom: "1rem",
					}}
				>
					<input
						type="search"
						placeholder="Search showcases..."
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						style={{
							flex: "1 1 240px",
							minWidth: 220,
							padding: "0.5rem 0.75rem",
							borderRadius: 8,
							border: "1px solid var(--ifm-color-emphasis-300)",
							background: "var(--ifm-background-surface-color)",
							color: "var(--ifm-font-color-base)",
						}}
					/>

					<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
						<button
							onClick={() => setActiveTag(null)}
							style={{
								padding: "0.35rem 0.75rem",
								borderRadius: 999,
								border: "1px solid var(--ifm-color-emphasis-300)",
								background: activeTag === null ? "var(--ifm-color-primary)" : "transparent",
								color: activeTag === null ? "white" : "var(--ifm-font-color-base)",
								cursor: "pointer",
							}}
						>
							All
						</button>
						{allTags.map((tag) => (
							<button
								key={tag}
								onClick={() => setActiveTag(tag === activeTag ? null : tag)}
								style={{
									padding: "0.35rem 0.75rem",
									borderRadius: 999,
									border: "1px solid var(--ifm-color-emphasis-300)",
									background: tag === activeTag ? "var(--ifm-color-primary)" : "transparent",
									color: tag === activeTag ? "white" : "var(--ifm-font-color-base)",
									cursor: "pointer",
								}}
							>
								{tag}
							</button>
						))}
					</div>
				</div>

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
						gap: "1rem",
					}}
				>
					{filtered.map((item) => (
						<ShowcaseCard key={item.id} item={item} />
					))}
				</div>
			</main>
		</Layout>
	);
}
