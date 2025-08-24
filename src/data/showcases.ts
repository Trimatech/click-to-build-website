export interface ShowcaseItem {
	id: string;
	title: string;
	videoId: string;
	description: string;
	tags: string[];
	gameUrl?: string;
}

export const showcases: ShowcaseItem[] = [
	{
		id: "structure-builder-paths",
		title: "Divide and Conquer (DEV)",
		videoId: "6Dd9B2cxGYY",
		description:
			"In this game, I used Structure Builder to create paths, a lot of them. Riverbed is built with Shape Builder's Polygon shape",
		tags: ["Structure Builder", "Shape Builder", "Game"],
		gameUrl: "https://www.roblox.com/games/78808835985573/Divide-and-Conquer-DEV",
	},
];

export function getAllTags(items: ShowcaseItem[]): string[] {
	const tagSet = new Set<string>();
	for (const item of items) {
		for (const tag of item.tags) tagSet.add(tag);
	}
	return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
}
