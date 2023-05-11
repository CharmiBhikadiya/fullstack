import { useRouter } from "next/router";

import { Button } from "@mui/material";

import styles from "../styles/Home.module.css";

export default function Home({ name, summary }) {
  const router = useRouter();

  return (
    <section className={styles.Home}>
      <h1 className={styles.Name}>{name}</h1>
      <div className={styles.Summary}>{summary}</div>
      <div>
        <Button
          variant="contained"
          size="large"
          onClick={() => router.push("/projects")}
        >
          Projects
        </Button>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  //get data from an api
  return {
    props: {
    name: "Charmi Bhikadia",
    summary: 'Experienced full-stack developer with a track record of delivering high-quality software solutions. Expertise in designing and implementing user-friendly interfaces, optimizing database performance, and ensuring code maintainability and scalability.'
    }, 
 }
}