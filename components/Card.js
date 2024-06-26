import Link from "next/link";
import React from "react";

import { linkCard as linkCardStyles } from "@/styles/components.module.css";

export default function Card({
	link = "",
	action,
	children,
	newTab,
	disabled = false,
}) {
	if (disabled) {
		return (
			<div className={linkCardStyles} disabled={disabled}>
				{children}
			</div>
		);
	}
	if (action) {
		return (
			<div
				tabIndex={0}
				className={linkCardStyles}
				onClick={action}
				onKeyDown={action}
			>
				{children}
			</div>
		);
	}
	return (
		<div className={linkCardStyles}>
			<Link href={link} target={newTab ? "_blank" : ""}>
				{children}
			</Link>
		</div>
	);
}
