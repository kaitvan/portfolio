import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import styles from "./Root.module.css";

const RootLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </>
  );
};

export default RootLayout;
