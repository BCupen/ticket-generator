import Form from "./components/Form";
import { LogoFull } from "./components/SVGs";

function App() {
  return (
    <div className="bg-graphics">
      <main className="lg:max-w-[1440px] mx-auto flex flex-col items-center py-8 md:px-8 px-4 gap-8">
        <LogoFull />
        <Form />
      </main>
    </div>
  );
}

export default App;
