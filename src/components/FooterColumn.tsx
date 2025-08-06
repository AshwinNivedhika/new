"use client";
import * as React from "react";
import styles from './FooterColumn.module.css';

interface FooterColumnProps {
  topic: string;
  pages: string[];
}

export const FooterColumn: React.FC<FooterColumnProps> = ({ topic, pages }) => {
  return (
    <nav className={styles.column}>
      <h3 className={styles.heading}>{topic}</h3>
      {pages.map((page, index) => (
        <a
          key={index}
          href="#"
          className={styles.link}
        >
          {page}
        </a>
      ))}
    </nav>
  );
};

export default FooterColumn;