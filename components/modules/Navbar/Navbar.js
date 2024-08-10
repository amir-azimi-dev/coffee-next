import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import NavLink from "../NavLink/NavLink";
import styles from "@/styles/Navbar.module.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

function Navbar() {
  const [searchValue, setSearchValue] = useState("")

  const router = useRouter()

  useEffect(() => {
    const urlSearchValue = router.query?.word;
    if (urlSearchValue) {
      setSearchValue(urlSearchValue)
    }
  }, [])

  const searchHandler = event => {
    event.preventDefault()

    if (searchValue.trim()) {
      router.push(`/search?word=${searchValue}`)
    }
  }

  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <Link href="/" className={`${styles.navbar_brand} px-lg-4 m-0`}>
          <h1 className="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
        </Link>
        <form className={styles.global_search_form} onSubmit={searchHandler}>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            className={styles.navbar_search}
            placeholder="search ..."
          />
          <FontAwesomeIcon onClick={searchHandler} icon={faSearch} className={styles.navbar_search_icon} />
        </form>
        <button
          type="button"
          className={`${styles.navbar_toggler}`}
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className={`${styles.navbar_toggler_icon}`}></span>
        </button>
        <div
          className={`collapse ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div className={`${styles.navbar_nav} ml-auto p-4`}>
            <NavLink
              href="/">
              Home
            </NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/menu">Menu</NavLink>
            <div className={`${styles.dropdown}`}>
              <Link href="/" className={styles.nav_link} data-toggle="dropdown">Pages</Link>
              <div className={`${styles.dropdown_menu} ${styles.text_capitalize}`}>
                <NavLink href="/reservation" className="dropdown_item text-black-50">
                  Reservation
                </NavLink>
                <NavLink href="/testimonial" className="dropdown_item text-black-50">
                  Testimonial
                </NavLink>
              </div>
            </div>
            <NavLink href="/contactus" className={`${styles.nav_link}`}>
              Contactus
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;