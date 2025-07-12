import styled from "styled-components";

const PaceDataWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background: var(--White);
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: var(--Gray7);
  letter-spacing: -0.45px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 4px 0 4px;
  gap: 16px;
`;

const TableHead = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  padding: 0 4px;
  gap: 16px;
  color: var(--Gray6);

  span:first-child {
    width: 40px;
  }
  span:last-child {
    width: fit-content;
  }
`;

const TableRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const KmCell = styled.div`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.4px;
  color: var(--Gray8);
  min-width: 40px;
`;

const PaceCell = styled.div`
  display: flex;
  align-items: flex-start;
  background: var(--Gray1);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  color: var(--Gray7, #565a61);
  padding: 9px 12px;
`;

function PaceData({
  data = [
    { km: 1, time: 340, pace: 5.67 },
    { km: 2, time: 351, pace: 5.85 },
    { km: 3, time: 351, pace: 6.0 },
    { km: 4, time: 351, pace: 6.2 },
    { km: 2.5, time: 180, pace: 6.7 },
  ],
}) {
  return (
    <PaceDataWrapper>
      <Title>구간별 페이스</Title>
      <Table>
        <TableHead>
          <span>km</span>
          <span>평균페이스</span>
        </TableHead>
        {data.map((pacedata, index) => (
          <TableRow key={index}>
            <KmCell>{pacedata.km}</KmCell>
            <PaceCell style={{ width: pacedata.time + "px" }}>
              {pacedata.pace}
            </PaceCell>
          </TableRow>
        ))}
      </Table>
    </PaceDataWrapper>
  );
}

export default PaceData;
