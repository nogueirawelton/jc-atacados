import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JC Atacados",
    short_name: "JC ",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/desktop/screenshot.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/desktop/screenshot.png",
        sizes: "1280x720",
        type: "image/png",
      },
    ],
  };
}
