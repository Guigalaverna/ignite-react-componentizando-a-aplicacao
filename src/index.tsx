import { render } from "react-dom";

import { App } from "./App";
import { MovieProvider } from "./contexts/MovieContext";

render(
  <MovieProvider>
    <App />
  </MovieProvider>,
  document.getElementById("root")
);
