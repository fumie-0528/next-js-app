import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";  
import iphoneImage from "../img/iphone.jpg"; 
import macImage from "../img/mac.jpg"; 
import headset from "../img/quest3.jpg"; 

export default function ProductsList() {
    return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1 >My Favorite Gadget</h1>
        </div>
        <main className={styles.body}>
            <Link href="/products/smartphone"> 
                <div className={styles.gadget}>
                    <button className={styles.button}>Smartphone</button>
                    <Image src={iphoneImage} alt="iPhone" width={220} height={300} />
                </div>
            </Link>
         
            <Link href="/products/laptop"> 
                <div className={styles.gadget}>
                    <button className={styles.button}>Laptop</button>
                    <Image src={macImage} alt="Mac book" width={220} height={300} />
                </div>
            </Link>

            <Link href="/products/headset"> 
            <div className={styles.gadget}>
                <button className={styles.button}>Headset</button>
                <Image src={headset} alt="Meta Quest 3" width={220} height={300} />
                </div>
            </Link>
        </main>

        <footer className={styles.productFooter}>
            <Link href="/">
                Go back to home
            </Link>
        </footer>
    </div>
    );
} 

