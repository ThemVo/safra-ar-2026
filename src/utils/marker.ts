type MarkerWindow = Window & {
  markerConfig?: { project: string; source: string };
  __Marker?: Record<string, unknown>;
  Marker?: Record<string, unknown>;
};

export function initializeMarker() {
  const markerWindow = window as MarkerWindow;
  if (markerWindow.__Marker) return;

  markerWindow.markerConfig = {
    project: "6ad045290ea2c0fafd08f58a",
    source: "snippet",
  };
  markerWindow.__Marker = {};
  const queue: unknown[][] = [];
  const marker: Record<string, unknown> = { __cs: queue };
  [
    "show",
    "hide",
    "isVisible",
    "capture",
    "cancelCapture",
    "unload",
    "reload",
    "isExtensionInstalled",
    "setReporter",
    "clearReporter",
    "setCustomData",
    "on",
    "off",
  ].forEach((method) => {
    marker[method] = (...args: unknown[]) => queue.push([method, ...args]);
  });
  markerWindow.Marker = marker;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://edge.marker.io/latest/shim.js";
  document.head.appendChild(script);
}
