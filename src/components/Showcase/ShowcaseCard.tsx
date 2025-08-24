import type { ShowcaseItem } from "@site/src/data/showcases";
import Heading from "@theme/Heading";
import type { ReactNode } from "react";
import YouTubeEmbed from "./YouTubeEmbed";

interface ShowcaseCardProps {
	item: ShowcaseItem;
}

export default function ShowcaseCard({ item }: ShowcaseCardProps): ReactNode {
	return (
		<article
			id={item.id}
			style={{
				border: "1px solid var(--ifm-toc-border-color)",
				borderRadius: 12,
				padding: "1rem",
				display: "flex",
				flexDirection: "column",
				gap: "0.75rem",
				background: "var(--ifm-background-surface-color)",
			}}
		>
			<YouTubeEmbed videoId={item.videoId} title={item.title} widthPercent={100} height={300} />
			<div>
				<Heading as="h3" style={{ marginTop: 0, marginBottom: "0.25rem" }}>
					{item.title}
				</Heading>
				<p style={{ margin: 0 }}>{item.description}</p>
				{item.gameUrl && (
					<p style={{ marginTop: "0.5rem" }}>
						<a href={item.gameUrl} target="_blank" rel="noreferrer">
							Play the game
						</a>
					</p>
				)}
				<div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
					{item.tags.map((tag) => (
						<span
							key={tag}
							style={{
								fontSize: "0.75rem",
								padding: "0.1rem 0.5rem",
								borderRadius: 999,
								background: "var(--ifm-badge-background-color)",
								border: "1px solid var(--ifm-color-emphasis-200)",
							}}
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</article>
	);
}
