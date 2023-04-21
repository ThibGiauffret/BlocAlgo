import GUI from "./gui";

declare global {
  interface Window {
    basthonLanguage: string;
    basthonRoot: string;
  }
}

// Global settings
const url = new URL(window.location.href);
const params = url.searchParams;
let kernel: string = params.get("kernel")?.toLowerCase() ?? "python3";
kernel =
  {
    // shortcuts
    py: "python3",
  }[kernel] ?? kernel;
window.basthonLanguage = kernel;
window.basthonRoot = "assets";

// Dynamically set subtitle
const languageName = {
  python3: "Python 3",
}[kernel];
const subtitle = document.getElementById("subtitle");
if (subtitle != null)
  subtitle.innerText = `Un bac à sable pour ${languageName}`;

const gui = new GUI({
  kernelOptions: {
    rootPath: window.basthonRoot,
    language: window.basthonLanguage,
  },
});
gui.init();
