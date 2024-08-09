import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Navbar.module.css";


export default function NavLink({ href, children, className }) {
    const router = useRouter();
    const isActive = router.pathname === href;
    

    return (
        <Link href={href} className={`${styles.nav_link} ${!isActive && className} ${isActive && styles.active_nav_link}`}>{children}</Link>
    );
}