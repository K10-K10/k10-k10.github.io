import type { ReactNode } from "react";
import styles from "./index.module.css";

type ContentProps = {
  title?: string;
  children: ReactNode;
};

export default function Content({ title, children }: ContentProps) {
  return (
    <main className={styles.content}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </main>
  );
}
