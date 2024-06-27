export async function loader() {
  const data = await fetch(
    "https://raw.githubusercontent.com/2077-Collective/blog/master/index.json"
  );
  return { data };
}
