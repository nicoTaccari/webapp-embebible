export default function useCache() {
  const getCacheData = (key: string): string[] | null => {
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        return JSON.parse(stored);
      }
      return null;
    } catch (err) {
      console.error("Error reading cache:", err);
      return null;
    }
  };

  const setCacheData = (key: string, data: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      console.error("Error saving to cache:", err);
    }
  };

  return { getCacheData, setCacheData };
}
