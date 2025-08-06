import Header from './Navigation';
import Footer from './NavigationFooter';

export default function Layout({ headerData, footerData, children }) {
  return (
    <>
      <Header data={headerData} />
      <main>{children}</main>
      <Footer data={footerData} />
    </>
  );
}