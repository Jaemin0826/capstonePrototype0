import { useEffect, useRef } from "react";

const SketchfabViewer = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js";
    script.onload = () => {
      const client = new window.Sketchfab("1.12.1", iframeRef.current);
      const modelUID = "8bb6749a0a214cbb952b6e3a185d7765";

      client.init(modelUID, {
        autostart: 1,
        preload: 1,
        ui_controls: 0,
        ui_infos: 0,
        ui_hint: 0,
        ui_watermark: 0,
        success: function (api) {
          api.start();
          api.addEventListener("viewerready", function () {
            console.log("✅ Sketchfab Viewer 준비 완료!");
          });
        },
        error: function () {
          console.error("❌ Sketchfab API 초기화 실패");
        },
      });
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <iframe
        id="api-frame"
        ref={iframeRef}
        title="Sketchfab Viewer"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        style={{
          width: "402px",
          height: "874px",
          border: "none",
          position: "relative",
          zIndex: 1,
        }}
      ></iframe>
    </div>
  );
};

export default SketchfabViewer;
