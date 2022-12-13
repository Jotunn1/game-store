import { Header } from "./components/Header";
import { HomePage } from "./components/pages/HomePage";
import PrBackgroundVideo from "./components/primitives/PrBackgroundVideo";

function App() {
  return (
    <>
      <PrBackgroundVideo />
      <Header></Header>
      <HomePage />
    </>
  );
}

export default App;
