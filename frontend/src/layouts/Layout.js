import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from 'next/router'

const Layout = ({
  children
}) => {
  const router = useRouter();
  return (
    <Fragment>
      <Header
        transparent={router.route === '/' ? true : false}
        whiteMenu={router.route === '/' ? true : false}
        extraTransparentClass={"transparent-header-2"}
      />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
