import Header from './Navigation';
import Footer from './NavigationFooter';
import styles from './Layout.module.css';


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </>
  );
}