import * as MENUS from "constants/menus";

import { classNames as cn } from 'utils';
import { useState } from 'react';
import Link from 'next/link';

import styles from "./HeaderBanner.module.scss";


export default function HeaderBanner({ className }) {
	const class = "header-banner";

	return (
		<div class="header-banner">
			<Link href="/">
				<a>Go Home</a>
			</Link>
		</div>

	);
}