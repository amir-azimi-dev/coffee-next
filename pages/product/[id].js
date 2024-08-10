import React from "react";
import ProductsDetails from "@/components/templates/Product/ProductDetails/ProductDetails";
import Comments from "@/components/templates/Product/ProductComments/ProductComments";

function Product({ product, comments }) {
  return (
    <>
      <ProductsDetails data={product} />
      <Comments data={comments} />
    </>
  )
}

export async function getStaticProps(context) {
  const { id } = context.params

  const productResponse = await fetch(`http://localhost:8080/menu/${id}`)
  const product = await productResponse.json()

  const commentResponse = await fetch(`http://localhost:8080/comments?productID=${id}`)
  const comments = await commentResponse.json()

  return {
    props: {
      product,
      comments
    },
    revalidate: 12 * 3600  // 12 hours
  }
}

export async function getStaticPaths() {
  const allProductResponse = await fetch("http://localhost:8080/menu")
  const allProductData = await allProductResponse.json()
  const paths = allProductData.map(product => ({ params: { id: product.id.toString() } }))

  return {
    paths,
    fallback: false
  }
}


export default Product;
