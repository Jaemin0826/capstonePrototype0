import styled from "styled-components";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const GenFieldWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const FixedTop = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  width: 402px;
  z-index: 1;
`;

const FieldContentsWrap = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: var(--Primary);
`;

function GenField() {
  const location = useLocation();
  const pathData = location.state?.path || [];
  const [convertedPoints, setConvertedPoints] = useState([]);

  useEffect(() => {
    console.log("genField로넘어온 pathData:", pathData);
  }, [pathData]);

  useEffect(() => {
    if (!window.simplify || pathData.length === 0) return;

    const points = pathData.map((p) => ({
      x: p.lng || p._lng,
      y: p.lat || p._lat,
    }));

    const simplified = window.simplify(points, 0.0001, true);
    console.log("단순화된 path:", simplified);

    let sumX = 0,
      sumY = 0;
    simplified.forEach((p) => {
      sumX += p.x;
      sumY += p.y;
    });
    const centerX = sumX / simplified.length;
    const centerY = sumY / simplified.length;

    const converted = [];
    simplified.forEach((p) => {
      converted.push((p.x - centerX) * 10000);
      converted.push((centerY - p.y) * 10000);
    });

    setConvertedPoints(converted);
  }, [pathData]);

  useEffect(() => {
    if (!window.AFRAME || convertedPoints.length === 0) return;

    AFRAME.registerComponent("shape", {
      schema: {
        points: { type: "array", default: convertedPoints },
        depth: { type: "number", default: 1 },
      },
      init: function () {
        const pts = this.data.points;
        const vectors = [];

        for (let i = 0; i < pts.length; i += 2) {
          vectors.push(new THREE.Vector2(pts[i], pts[i + 1]));
        }

        const shape = new THREE.Shape(vectors);

        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth: this.data.depth,
          bevelEnabled: true,
          bevelThickness: 1,
          bevelSize: 1,
          bevelSegments: 4,
        });

        const material = new THREE.MeshStandardMaterial({ color: "#5E66FF" });
        const mesh = new THREE.Mesh(geometry, material);

        this.el.setObject3D("mesh", mesh);
      },
    });

    const shapeEntity = document.querySelector("#generatedField");
    if (shapeEntity) {
      shapeEntity.setAttribute("shape", {
        points: convertedPoints,
        depth: 1,
      });
    }
  }, [convertedPoints]);

  return (
    <GenFieldWrap>
      <FixedTop>
        <Header title="필드 생성" showBackButton={true} />
      </FixedTop>
      <FieldContentsWrap>
        <a-scene
          embedded
          vr-mode-ui="enabled: false"
          post-processing="effect: bloom"
          bloom="threshold: -2; strength: 0.4; radius: 0.5"
          renderer="toneMapping: ACESFilmic;"
        >
          <a-entity
            id="generatedField"
            position="0 -7 -7"
            rotation="90 0 45"
            shape
          ></a-entity>
          <a-entity
            id="ambient"
            light="type: ambient; intensity: 0.48; color: #ffffff"
          >
            {" "}
          </a-entity>
          <a-entity
            id="ambient"
            light="type: ambient; intensity: 1; color: #ffffff"
          >
            {" "}
          </a-entity>
          <a-sky color="#A5D1F2"></a-sky>
          <a-entity position="0 1.6 0">
            <a-camera
              wasd-controls-enabled="true"
              look-controls-enabled="true"
              position="0 3 20"
            ></a-camera>
          </a-entity>
        </a-scene>
      </FieldContentsWrap>
    </GenFieldWrap>
  );
}

export default GenField;
