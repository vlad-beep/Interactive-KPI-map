import React from 'react';
import styled from 'styled-components';
import { MdPeopleAlt } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { FaHouseUser } from 'react-icons/fa';
import { FaUniversity } from 'react-icons/fa';
import { DiagramInfo } from '../infoblock/DiagramInfo';
import { MiddleMarks } from '../infoblock/MiddleMarks';

const InfoContainer = styled.div`
  padding: 0;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  z-index: 1;
`;
const InfoContant = styled.div`
  padding-top: 50px;
`;
const FirstInfoBlock = styled.div`
  display: grid;
  grid-template-columns: 620px 1fr;
  grid-gap: 30px;
  display: flex;
`;
const InfoCard = styled.div`
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 13px 15px rgb(36 37 38 / 3%);
  border-radius: 10px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  min-height: 135px;
  position: relative;
`;
const InfoCardText = styled.div`
  max-height: 225px;
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-15);
  line-height: 26px;
  color: #242424;
  margin-bottom: 15px;
  text-align: left;
`;
const FirstInfoBlockSecondElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  height: max-content;
  width: max-content;
`;

export function InfoBlock(props) {
  return (
    <InfoContainer>
      <InfoContant>
        <FirstInfoBlock>
          <InfoCard>
            <InfoCardText>
              <p>
                <h3>Київський Політехнічний Інститут</h3>
                КПІ ім. Ігоря Сікорського є одним з найбільших навчальних закладів Європи. У ньому
                навчається майже 25 тисяч студентів, аспірантів і докторантів, у тому числі й
                студенти-іноземці з країн близького та далекого зарубіжжя. Кожний шостий студент м.
                Києва здобуває освіту в КПІ, кожен двадцять п'ятий професор і доцент України –
                викладач КПІ, у технічних ВНЗ країни кожний п'ятий факультет і кафедра – це
                факультет або кафедра КПІ.
              </p>
            </InfoCardText>
          </InfoCard>
          <FirstInfoBlockSecondElement>
            <InfoCard>
              <h3>
                <MdPeopleAlt size={30} />
                12695
              </h3>
              <span>Загальна кількість студентів</span>
            </InfoCard>
            <InfoCard>
              <h3>
                <FaGraduationCap size={30} />
                26
              </h3>
              <span>Інститутів та факультетів</span>
            </InfoCard>
            <InfoCard>
              <h3>
                <FaUniversity size={30} />
                /31
              </h3>
              <span>Кількість корпусів</span>
            </InfoCard>
            <InfoCard>
              <h3>
                <FaHouseUser size={30} />
                /21
              </h3>
              <span>Кількість гуртожитків</span>
            </InfoCard>
          </FirstInfoBlockSecondElement>
        </FirstInfoBlock>
        <FirstInfoBlock>
          <FirstInfoBlockSecondElement>
            <InfoCard>
              <DiagramInfo />
            </InfoCard>
            <InfoCard>
              <MiddleMarks />
            </InfoCard>
          </FirstInfoBlockSecondElement>
        </FirstInfoBlock>
      </InfoContant>
    </InfoContainer>
  );
}
