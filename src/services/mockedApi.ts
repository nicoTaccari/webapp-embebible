export async function fetchDataFromAPI(): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return ["Item A", "Item B", "Item C"];
}
