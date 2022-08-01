import { useState } from "react";
import styled from "styled-components";
import {
  availableSettings,
  unavailableSettings,
  selectedSettings,
} from "./Seats";

export function Seat({
  name,
  isAvailable,
  id,
  seatIds,
  setSeatIds,
  seatNames,
  setSeatNames,
}) {
  const [settings, setSettings] = useState(
    isAvailable ? availableSettings : unavailableSettings
  );

  function selectSeat() {
    if (isAvailable) {
      if (settings.type === 0) {
        setSettings(selectedSettings);
        setSeatIds([...seatIds, id]);
        setSeatNames([...seatNames, name]);
      } else if (settings.type === 1) {
        setSettings(availableSettings);
        setSeatIds((selected) => selected.filter((seatIds) => seatIds !== id));
        setSeatNames((selected) =>
          selected.filter((seatNames) => seatNames !== name)
        );
      }
    } else {
      alert("Esse assento não está disponível");
    }
  }

  return (
    <SeatCard {...settings} hover={isAvailable} onClick={selectSeat}>
      <p>{name.padStart(2, "0")}</p>
    </SeatCard>
  );
}

export const SeatCard = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 46%;
  p {
    font-size: 11px;
    line-height: 13px;
  }
  :hover {
    cursor: ${(props) => (props.hover ? props.cursor : "initial")};
    transform: scale(${(props) => (props.hover ? 0.95 : 1)});
  }
`;
