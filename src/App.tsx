import { useEffect } from "react";
import EmbeddableWidget from "./components/EmbeddableWidget";

export default function App() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin !== "http://localhost:5173" &&
        event.origin !== "https://tudominio.com"
      ) {
        return;
      }
      if (event.data?.type === "SET_THEME") {
        console.log("New theme received:", event.data.theme);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div style={{ margin: "1rem" }}>
      <EmbeddableWidget />
    </div>
  );
}
