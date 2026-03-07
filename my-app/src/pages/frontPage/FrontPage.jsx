import Header from "./components/header";
import Herosection from "./components/Herosection";

function FrontPage() {
  return (
    <container className="flex flex-col items-center pt-5 justify-center gap-15">
      {" "}
      <Header />
      <Herosection />
    </container>
  );
}

export default FrontPage;
