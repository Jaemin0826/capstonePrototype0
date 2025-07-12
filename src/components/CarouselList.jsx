import styled from "styled-components";
import AssetInfoCarousel from "./AssetInfoCarousel";

const CarouselListWrap = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-y: visible;

  gap: 20px;
  padding: 92px 36px 0px 36px;

  & > * {
    scroll-snap-align: center;
    flex-shrink: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

function CarouselList() {
  const data = [
    {
      name: "벚꽃나무",
      level: 2,
      current: 52,
      total: 100,
      desc: "벚꽃나무가 성장 중이에요.\n“봄날처럼 부드럽게”",
      img: "sakura",
    },
    {
      name: "소나무",
      level: 1,
      current: 30,
      total: 100,
      desc: "소나무가 막 심어졌어요.\n“푸르게 자라나는 중”",
      img: "pinetree",
    },
    {
      name: "비둘기",
      level: 3,
      current: 78,
      total: 100,
      desc: "귀여운 비둘기가 서성이네요.\n“멍청하게 생겼어”",
      img: "googoo",
    },
    {
      name: "오리",
      level: 2,
      current: 12,
      total: 100,
      desc: "개킹받는 오리에요.\n“개귀엽네”",
      img: "duck",
    },
  ];

  return (
    <CarouselListWrap>
      {data.map((item, index) => (
        <AssetInfoCarousel key={index} data={item} />
      ))}
    </CarouselListWrap>
  );
}

export default CarouselList;
