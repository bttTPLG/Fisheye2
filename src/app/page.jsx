import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Card from "@/components/Card/Card";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={styles.gallerie}>
          <Card />
        </section>
        
      </main>
    </div>
  );
}
