import "./App.scss";

import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import RouterInformation from "./routerInforamtion/RouterInformation";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <RouterInformation />
      <Footer />
    </Fragment>
  );
}

export default App;
