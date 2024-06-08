export default async function sitemap() {

  let routes = ["", "/posts", "/about", "/stack", "/work"].map((route) => ({
    url: `https://tom.so${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
