import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Typography } from "@mui/material";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Dashboard from "./dashboard/page";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Staking DApp</title>
        <meta
          content="Staking DApp for AaveV3"
          name="Staking DApp for AaveV3"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Dashboard />
      </main>

      <footer>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            textAlign: "center",
          }}
        >
          Made with ❤️ by your frens at &nbsp;
          <Link
            href="https://github.com/0xhaz"
            passHref={true}
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            github.com/0xhaz
          </Link>
        </Typography>
      </footer>
    </div>
  );
};

export default Home;
