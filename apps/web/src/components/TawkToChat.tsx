import { useEffect } from "react";

export function TawkToChat() {
  useEffect(() => {
    // const Tawk_API = window.Tawk_API || {};
    // const Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/67188d782480f5b4f591f791/1iaruh7ra";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    const s0 = document.getElementsByTagName("script")[0];
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    }

    return () => {
      s1.remove();
    };
  }, []);

  return null;
}
