import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { EmployeesList } from "./components/EmployeesList";

import "./App.scss";

function App() {
  const userIsExternal = true;

  return (
    <>
      <Header />
      <EmployeesList userIsExternal={userIsExternal} />
      <Footer userIsExternal={userIsExternal} />
    </>
  );
}

export default App;
