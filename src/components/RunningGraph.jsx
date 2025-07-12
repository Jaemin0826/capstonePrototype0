import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import RunningGraphModal from "./RunningGraphModal";
import { useNavigate } from "react-router-dom";

const RunningGraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  background-color: var(--White);
  position: relative;
`;

const UpperWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 4px;
`;

const DataTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.45px;
`;

const Data = styled.div`
  font-family: "Paperlogy";
  font-size: 20px;
  font-weight: 700;
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0px 16px;
  gap: auto;
`;

const DayLabel = styled.div`
  width: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.35px;
  color: var(--Gray7);
`;

const GraphWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 120px;
  display: flex;
  padding: 0px 16px;
  justify-content: space-between;
  align-items: flex-end;
  gap: auto;
`;

const Graph = styled.div`
  width: 20px;
  height: ${({ heightAnim, runningData }) =>
    heightAnim ? `${runningData / 60}%` : "0%"};
  /* background-color: var(--Gray1); */
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--Primary)" : "var(--Gray1)"};

  border-radius: 2px 2px 0px 0px;
  cursor: pointer;
  z-index: 50;

  transition: height 0.6s ease-in-out;
`;

const LineWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Line = styled.div`
  width: 362px;
  height: 1px;
  z-index: 1;
  background-color: #f3f3f8;
`;

const GraphBox = styled.div`
  z-index: 51;
  position: absolute;
  top: ${({ $top }) => `${$top}px`};
  left: ${({ $left }) => `${$left}px`};
`;

function RunningGraph({ title, data }) {
  const [selectedData, setSelectedData] = useState(null);
  const [modalPos, setModalPos] = useState(null);
  const containerRef = useRef(null);
  const graphRefs = useRef([]);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const [heightAnim, setheightAnim] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setheightAnim(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const runningData = [
    { day: "7월 1일", distance: 2422 },
    { day: "7월 2일", distance: 4444 },
    { day: "7월 3일", distance: 3112 },
    { day: "7월 4일", distance: 4444 },
    { day: "7월 5일", distance: 2865 },
    { day: "7월 6일", distance: 2011 },
    { day: "7월 7일", distance: 1600 },
  ];

  const handleGraphClick = (item, index) => {
    const graphEl = graphRefs.current[index];
    const containerEl = containerRef.current;

    if (graphEl && containerEl) {
      const graphRect = graphEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();

      const offsetTop = graphRect.top - containerRect.top;
      const offsetLeft = graphRect.left - containerRect.left;

      let top = offsetTop - 130;
      let left;

      if (index >= 4) {
        left = offsetLeft - 142;
      } else {
        left = offsetLeft - 10;
      }
      setModalPos({
        top,
        left,
      });

      setSelectedData(item);
    }
  };

  const dayData = ["월", "화", "수", "목", "금", "토", "일"];

  //ㄸㅣㅂㅏ useEffect내부는 그 그래프 바깥부분 클릭시 그래프 안보이게 하는건데 너무 어려워서 지피띠해써~

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !graphRefs.current.some((ref) => ref && ref.contains(event.target))
      ) {
        setSelectedData(null);
        setModalPos(null);
      }
    }

    if (selectedData) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [selectedData]);

  //ㄸㅣㅂㅏ useEffect내부는 그 그래프 바깥부분 클릭시 그래프 안보이게 하는건데 너무 어려워서 지피띠해써~

  return (
    <RunningGraphWrapper ref={containerRef}>
      <UpperWrapper>
        <DataTitle>{title}</DataTitle>
        <Data>{data}</Data>
      </UpperWrapper>

      {selectedData && modalPos && (
        <GraphBox ref={modalRef} $top={modalPos.top} $left={modalPos.left}>
          <RunningGraphModal
            dayData={selectedData.day}
            distanceData={selectedData.distance}
            onClick={() => navigate("/history/record")}
          />
        </GraphBox>
      )}

      <GraphWrapper>
        {runningData.map((item, index) => (
          <Graph
            key={index}
            runningData={item.distance}
            heightAnim={heightAnim}
            isSelected={selectedData?.day === item.day}
            ref={(el) => (graphRefs.current[index] = el)}
            onClick={() => handleGraphClick(item, index)}
          />
        ))}
        <LineWrapper>
          <Line />
          <Line />
          <Line />
          <Line />
        </LineWrapper>
      </GraphWrapper>

      <LabelWrapper>
        {dayData.map((day, index) => (
          <DayLabel key={index}>{day}</DayLabel>
        ))}
      </LabelWrapper>
    </RunningGraphWrapper>
  );
}

export default RunningGraph;
