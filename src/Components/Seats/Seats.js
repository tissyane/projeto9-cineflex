import styled from "styled-components";
import { Seat, SeatCard } from "./SelectSeat";

export const availableSettings = {
  color: "#C3CFD9",
  borderColor: "#7B8B99",
  cursor: "pointer",
  type: 0,
};
export const unavailableSettings = {
  color: "#FBE192",
  borderColor: "#F7C52B",
  cursor: "initial",
};
export const selectedSettings = {
  color: "#8DD7CF",
  borderColor: "#1AAE9E",
  cursor: "pointer",
  type: 1,
};

export default function Seats({
  seats,
  seatIds,
  setSeatIds,
  seatNames,
  setSeatNames,
}) {
  const settings = [
    { setting: selectedSettings, text: "Selecionado" },
    { setting: availableSettings, text: "Disponível" },
    { setting: unavailableSettings, text: "Indisponível" },
  ];

  return (
    <>
      <SeatsContainer>
        {seats.map((seat) => (
          <Seat
            {...seat}
            key={seat.id}
            seatIds={seatIds}
            setSeatIds={setSeatIds}
            seatNames={seatNames}
            setSeatNames={setSeatNames}
          />
        ))}
      </SeatsContainer>
      <WrapperSubtitle>
        {settings.map((setting, index) => (
          <div key={index}>
            <SeatCard {...setting.setting} />
            <p>{setting.text}</p>
          </div>
        ))}
      </WrapperSubtitle>
    </>
  );
}

const SeatsContainer = styled.section`
  margin: -20px auto 0;
  max-width: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px 8px;
`;

const WrapperSubtitle = styled.div`
  margin: 0 auto;
  margin-top: 20px;

  max-width: 500px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  p {
    font-size: 13px;
  }
`;
