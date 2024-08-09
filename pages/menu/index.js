import React from "react";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import MenuComponent from "@/components/templates/Index/Menu";

function Menu({ menu }) {

  return (
    <>
      <PageHeader route="Menu" />
      <MenuComponent data={menu} />
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:8080/menu")
  const menu = await response.json()

  return {
    props: {
      menu
    },
    revalidate: 12 * 60 * 60  // 12 hours
  }
}

export default Menu;
