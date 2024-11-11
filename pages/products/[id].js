import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";  
import Link from "next/link";

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`https://api.example.com/products/${params.id}`);
    if (!res.ok) {
      return { notFound: true };
    }
    const product = await res.json(); // Rename to product for consistency
    return { props: { product } }; // Pass product as prop
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  const res = await fetch("https://api.example.com/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

const Product = ({ product }) => {
  const router = useRouter();

  // Optional: Handle loading state if fallback is set to 'true'
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.products}>
        <h1>
          My favorite {product.id} is {product.name}
        </h1>
        <img src={product.image} width={600} height={400} alt={product.name} />
        <Link href="/products">Return to Product page</Link>
      </main>
    </div>
  );
};

export default Product;