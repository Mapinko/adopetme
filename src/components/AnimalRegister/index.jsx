import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ColumnContainer,
  ColumnForm,
  Container,
  FolderContainer,
  FormContainer,
  HeaderFormContainer,
} from "./style";
import { Button } from "../Button";

export const AnimalRegister = () => {
  const formSchema = yup.object().shape({
    petName: yup.string().required("Nome Obrigatório"),
    img: yup.string().required("URL Da imagem obrigatória"),
    breed: yup.string().required("Campo Obrigatório"),
    species: yup.string().required("Campo Obrigatório"),
    color: yup.string().required("Campo Obrigatório"),
    gender: yup.string().required("Campo Obrigatório"),
    age: yup.number().required("Campo Obrigatório"),
    porte: yup.string().required("Campo Obrigatório"),
    ong: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
    situation: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function onSubmitFunction(animalData) {
    const newData = { ...animalData, idOwner: 2, address: "adff" };

    console.log(newData);
  }

  return (
    <FolderContainer>
      <HeaderFormContainer>
        <button className="registerBtn">Cadastro</button>
        <button className="editBtn disable">Editar</button>
      </HeaderFormContainer>
      <FormContainer>
        <Container>
          <h2>Cadastrar Animais</h2>
          <div className="separator"> </div>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <ColumnContainer>
              <ColumnForm>
                <label htmlFor="">Nome:</label>
                <input
                  type="text"
                  placeholder="Nome"
                  {...register("petName")}
                />
                <label htmlFor="">Foto Do Pet:</label>
                <input
                  type="text"
                  placeholder="url Imagem"
                  {...register("img")}
                />
                <label htmlFor="">Raça:</label>
                <input type="text" placeholder="Raça" {...register("breed")} />
                <label htmlFor="">Espécie:</label>
                <select name="" {...register("species")}>
                  <option value="Cachorro">Cachorro</option>
                  <option value="Gato">Gato</option>
                  <option value="Roedor">Roedor</option>
                </select>
                <label htmlFor="">Cor:</label>
                <input type="text" placeholder="Cor" {...register("color")} />
                <label htmlFor="">Genero:</label>
                <select name="" {...register("gender")}>
                  <option value="male">Macho</option>
                  <option value="female">Femea</option>
                </select>
              </ColumnForm>
              <ColumnForm>
                <label htmlFor="">Idade:</label>
                <input type="text" placeholder="Idade" {...register("age")} />
                <label htmlFor="">Porte:</label>
                <input type="text" placeholder="Porte" {...register("porte")} />
                <label htmlFor="">Ong:</label>
                <input type="text" placeholder="Ong" {...register("ong")} />
                <label htmlFor="">Descrição:</label>
                <input
                  type="text"
                  placeholder="Descrição"
                  {...register("description")}
                />
                <label htmlFor="">Situação:</label>
                <input
                  type="text"
                  placeholder="Situação"
                  {...register("situation")}
                />
              </ColumnForm>
            </ColumnContainer>
            <Button blackSchema type="submit">
              Enviar
            </Button>
          </form>
        </Container>
      </FormContainer>
    </FolderContainer>
  );
};
