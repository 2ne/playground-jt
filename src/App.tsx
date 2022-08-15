import { Browser } from "./Browser";

import PrimeReact from "primereact/api";

const App = () => {
  PrimeReact.ripple = true;
  return (
    <div className="min-h-screen bg-white font-sans text-base text-gray-700">
      <Browser />
    </div>
  );
};

export default App;
