import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { FormMap } from '../problems/FormMap';

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
  max-width: 1240px;
  margin-right: auto;
  margin-left: auto;
  z-index: 1;
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
  min-width: 240px;
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
`;

const TwoInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin-top: 20px;
  min-width: 240px;
`;

const TextArea = styled.textarea`
  margin-top: 20px;
  background: #ffffff;
  border: 1px solid #dfe2e6;
  box-sizing: border-box;
  box-shadow: 0px 0px 3px rgb(0 0 0 / 5%);
  border-radius: 20px;
  padding: 15px;
  width: 100%;
  font-size: var(--fs-16);
  height: 260px;
  font-weight: 500;
  font-style: italic;
`;

const MapContainer = styled.div`
  margin-top: 20px;
`;

const Reports = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    console.log('Sended:', data);
    reset();
  };

  return (
    <InfoContainer>
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <Head>
          Повідомити про проблему на території студмістечка
          <SubHead>
            На цій сторінці ви можете повідомити про знайдену проблему на території студмістечка
          </SubHead>
        </Head>
        <div>
          <FormItem
            {...register('title', {
              required: "Ця форма обов'язкова для заповнення",
              maxLength: {
                value: 100,
                message: 'Занадто багато символів',
              },
              pattern: {
                value: /^[А-Яа-я]+$/i,
                message: 'Недопустимі символи',
              },
            })}
            placeholder="Заголовок повідомлення"
          />
          {errors?.title && <div style={{ color: 'red' }}>{errors.title.message}</div>}
        </div>
        <TwoInputs>
          <div>
            <FormItem
              {...register('name', {
                required: "Ця форма обов'язкова для заповнення",
                maxLength: {
                  value: 15,
                  message: 'Занадто багато символів',
                },
                pattern: {
                  value: /^[А-Яа-я]+$/i,
                  message: "Неправильно вказано ім'я",
                },
              })}
              placeholder="ім'я"
            />
            {errors?.name && <div style={{ color: 'red' }}>{errors.name.message}</div>}
          </div>
          <div>
            <FormItem
              {...register('email', {
                required: "Ця форма обов'язкова для заповнення",
                pattern: {
                  value: /^([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})+$/,
                  message: 'Неправильно вказаний Email',
                },
              })}
              placeholder="email"
            />
            {errors?.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}
          </div>
        </TwoInputs>
        <TextArea
          {...register('textAreaID', {
            required: "Ця форма обов'язкова для заповнення",
            pattern: {
              value: /^[А-Яа-я]+$/i,
              message: "Неправильно вказано ім'я",
            },
          })}
          placeholder="Опишіть вашу проблему"
        />
        {errors?.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}
        <MapContainer>
          <FormMap />
        </MapContainer>
        <TwoInputs>
          <div>
            <FormItem {...register('Lat')} />
            {errors?.name && <div style={{ color: 'red' }}>{errors.name.message}</div>}
          </div>
          <div>
            <FormItem {...register('Lng')} />
            {errors?.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}
          </div>
        </TwoInputs>
        <FormButtom>Відправити</FormButtom>
      </FormComponent>
    </InfoContainer>
  );
};

export default Reports;
