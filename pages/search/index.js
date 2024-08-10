import React from "react";
import { useRouter } from "next/router";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import SearchResult from "@/components/templates/Search/SearchResult";

function Search({items}) {
  const router = useRouter()
  const searchValue = router.query?.word;
  

  return (
    <>
      <PageHeader route="Search" />
      <SearchResult items={items} searchValue={searchValue} />
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:8080/menu")
  const items = await response.json()

  return {
    props: {
      items
    }
  }
}

export default Search;
