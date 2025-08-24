import { Analytics } from "@vercel/analytics/react";
import type { ReactNode } from "react";

export default function Root({ children }: { children: ReactNode }): JSX.Element {
	return (
		<>
			{children}
			{typeof window !== "undefined" && <Analytics />}
		</>
	);
}
