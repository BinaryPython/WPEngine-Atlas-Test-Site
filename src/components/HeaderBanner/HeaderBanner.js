import * as MENUS from "constants/menus";

import { classNames as cn } from 'utils';
import { useState } from 'react';
import Link from 'next/link';

import styles from "./HeaderBanner.module.scss";


export default function HeaderBanner({ className }) {
	const bannerClass = "header-banner";

	return (
		<div className="{bannerClass}">
			<Link href="/">
				<a>Go Home</a>
			</Link>
		</div>

	);
}