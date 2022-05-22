import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const FormComponent = styled.form`
  background: #ffffff;
  box-shadow: 0px 13px 15px rgb(36 37 38 / 3%);
  border-radius: 10px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  min-height: 135px;
  position: relative;
  padding: 5vh 30vh;
  padding-bottom: 50px;
`;
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
const Head = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: var(--fs-20);
  line-height: 24px;
  text-align: center;
  margin: 0;
  margin-bottom: 35px;
  position: relative;
`;

const SubHead = styled.p`
  font-style: italic;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 17px;
  text-align: center;
  margin-bottom: 60px;
  color: #6b6c6f;
  padding-top: 10px;
`;

const FormItem = styled.input`
  background: #ffffff;
  border: 1px solid #dfe2e6;
  box-sizing: border-box;
  box-shadow: 0px 0px 3px rgb(0 0 0 / 5%);
  border-radius: 20px;
  padding: 0 15px;
  height: 50px;
  width: 100%;
  min-width: 300px;
  color: #6b6c6f;
  margin: 0px;
  font-weight: 500;
  font-style: italic;
`;

const FormButtom = styled.button`
  margin-top: 20px;
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #d25656;
  border: 2px solid #d25656;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const Reports = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log('Sended:', data);

  return (
    <InfoContainer onSubmit={handleSubmit(onSubmit)}>
      <InfoContant>
        <FormComponent onSubmit={handleSubmit(onSubmit)}>
          <Head>
            Повідомити про проблему на території студмістечка
            <SubHead>
              На цій сторінці ви можете повідомити про знайдену проблему на території студмістечка
            </SubHead>
          </Head>

          <FormItem
            {...register('title', { required: "Ця форма обов'язкова для заповнення" })}
            placeholder="Заголовок повідомлення"
          />
          {errors?.title && <div style={{ color: 'red' }}>{errors.title.message}</div>}
          <FormButtom>Відправити</FormButtom>
        </FormComponent>
      </InfoContant>
    </InfoContainer>
  );
};

export default Reports;