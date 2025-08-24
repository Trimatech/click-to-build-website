import type { ReactNode } from "react";

interface YouTubeEmbedProps {
	videoId: string;
	title: string;
	widthPercent?: number; // 0..100
	height?: number; // px
}

export default function YouTubeEmbed({
	videoId,
	title,
	widthPercent = 100,
	height = 420,
}: YouTubeEmbedProps): ReactNode {
	const width = `${Math.max(0, Math.min(100, widthPercent))}%`;
	const src = `https://www.youtube.com/embed/${videoId}`;
	return (
		<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
			<iframe
				width={width}
				height={height}
				src={src}
				title={title}
				frameBorder={0}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</div>
	);
}
