export default function manifest() {
  return {
    name: "Scalic Digital",
    short_name: "Scalic",
    description: "Websites, marketing and local SEO for local businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f1b2d",
    theme_color: "#0f1b2d",
    icons: [
      { src: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
