import CardList from "@/app/components/cardList/CardList";
import Menu from "@/app/components/Menu/Menu";
import React from "react";
import styles from "./blogpage.module.scss";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
