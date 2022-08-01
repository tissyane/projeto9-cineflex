import { Link } from "react-router-dom";

import styled from "styled-components";
import { Button } from "../../commons/Button";

import Loading from "../../commons/Loading";
import { Page } from "../../commons/Page";

export default function Session({ sessions, index }) {
  window.scrollTo(0, 0);
  const check = Object.keys(sessions).length === 0;
  return (
    <SessionWrapper>
      {check ? (
        <Page>
          {" "}
          <Loading />
        </Page>
      ) : (
        <>
          {sessions.days.map((session) => (
            <>
              <Sessions key={index}>
                {session.weekday} - {session.date}
                <div>
                  {session.showtimes.map((time) => (
                    <Link
                      key={time.id}
                      style={{ textDecoration: "none" }}
                      to={`/assentos/${time.id}`}
                    >
                      <SmallButton key={index}>{time.name}</SmallButton>
                    </Link>
                  ))}
                </div>
              </Sessions>
            </>
          ))}
        </>
      )}
    </SessionWrapper>
  );
}

const SessionWrapper = styled.div`
  margin-bottom: 150px;
`;

const Sessions = styled.div`
  margin-bottom: 22px;
  font-size: 20px;
  line-height: 23.44px;
  color: #293845;

  div {
    display: flex;
    gap: 20px;
    margin-top: 22px;
  }
`;

const SmallButton = styled(Button)`
  width: 83px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    filter: brightness(120%);
  }
`;
