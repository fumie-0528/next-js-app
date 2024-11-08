import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";  
import Link from "next/link";

export async function getStaticProps({ params }) {
    try {
        const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${params.id}.json`);
        if (!req.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await req.json();
 
        return {
            props: { product: data },
        };
    } catch (error) {
        console.error(error);
        return { notFound: true };
    }
 }


 export async function getStaticPaths() {
    const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products.json`);
    const data = await req.json();
    const paths = data.map(product => ({
        params: { id: product.id.toString() },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
}


const Product = ({ product }) => {
    const router = useRouter();
    const { id } = router.query;
    return (
    <div className={styles.container}>
        <main className={styles.products}>
            <h1>My favorite {id} is {product.name} </h1>

            <img src={product.image} width={600} height={400}/>
            <Link href="/products">Return to Product page</Link>
        </main>
    </div>
    )
};

export default Product;