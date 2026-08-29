import { Analytics } from "@vercel/analytics/react";
import Home from "./pages";

export default function App() {
  return (
    <>
      <Home />
      <Analytics />
    </>
  );
}
