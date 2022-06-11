import Link from 'next/link';

import styles from "./HeaderBanner.module.scss";


export default function HeaderBanner() {

	return (
		<div className={styles['header-banner']}>
			<Link href="/">
				<a>Go Home</a>
			</Link>
		</div>

	);
}