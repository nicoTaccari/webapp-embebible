import React, { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../services/mockedApi";
import useCache from "../hooks/useCache";

const EmbeddableWidget: React.FC = () => {
  // Our widget items
  const [items, setItems] = useState<string[]>([]);

  // Config object for theming and sizing
  const [config, setConfig] = useState<{
    theme: string;
    width: number;
    height: number;
  }>({
    theme: "light",
    width: 300,
    height: 200,
  });

  const { getCacheData, setCacheData } = useCache();

  // Attempt to load items from cache on mount, or fetch from API if not cached
  useEffect(() => {
    const cachedItems = getCacheData("api-items");
    if (cachedItems) {
      setItems(cachedItems);
      notifyDataReady(cachedItems);
    } else {
      fetchDataFromAPI()
        .then((data) => {
          setItems(data);
          setCacheData("api-items", data);
          notifyDataReady(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  // Listen for messages from the host (iframe container)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Optionally validate the event.origin if you only trust certain domains
      // if (event.origin !== "http://localhost:5173") return;

      if (event.data?.type === "SET_THEME") {
        // Merge new theme/width/height from the host
        setConfig((prev) => ({
          ...prev,
          theme: event.data.theme || prev.theme,
          width: event.data.width || prev.width,
          height: event.data.height || prev.height,
        }));
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Notifies the host that data is ready (items loaded)
  const notifyDataReady = (data: string[]) => {
    window.parent.postMessage({ type: "DATA_READY", data: data }, "*");
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        width: config.width,
        height: config.height,
        overflow: "auto",
        backgroundColor: config.theme === "light" ? "#fff" : "#333",
        color: config.theme === "light" ? "#000" : "#fff",
        padding: "1rem",
      }}
    >
      <h3>Embeddable Widget</h3>
      {items.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmbeddableWidget;
