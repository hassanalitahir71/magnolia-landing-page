import Header from "./components/header";
import Herosection from "./components/Herosection";
import OurServices from "./components/OurServices";

function FrontPage() {
  return (
    <container className="flex flex-col items-center bg-backColor pt-5  justify-center gap-15">
      {" "}
      <Header />
      <Herosection />
      <OurServices />
    </container>
  );
}

export default FrontPage;
