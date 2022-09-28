import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/index.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Button, TextField, Card } from '@mui/material/';
import Script from 'next/script';


export default function Home() {
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const [cnaes, setCnaes] = useState([]);

  const onSubmit = (e) => {
    // console.log(e);
  };

  const checkCNPJ = (e) => {
    if (!e.target.value) {
      return;
    }
    const cnpj = e.target.value.replace(/[^\d]+/g, "");
    fetch(`https://encontrarcnpj.com.br/api/cnpj?cnpj=${cnpj}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setValue("name", res.nome);
        setValue("address", res.logradouro);
        setValue("addressNumber", res.numero);
        setValue("addressAdditionalInfo", res.complemento);
        setValue("neighborhood", res.bairro);
        setValue("city", res.municipio);
        setValue("uf", res.uf);
        setValue("cep", res.cep);
        setValue("situation", res.situacao);
        setValue("capitalSocial", res.capital_social);
        setValue("dataSituacao", res.data_situacao);
        setValue("type", res.tipo);
        setValue("porte", res.porte);
        const _cnaes = [
          ...res.atividade_principal,
          ...res.atividades_secundarias,
        ];
        setCnaes(_cnaes);
      });
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          CNPJ:
          <TextField id="standard-basic" type="text" {...register("cnpj")} onBlur={checkCNPJ} />
        </label>
        <label>
          Razão Social:
          <TextField
            id="standard-basic"
            type="text" {...register("name")}
          />
        </label>
        <label>
          Capital Social:
          <TextField
            id="standard-basic"
            type="text" {...register("capitalSocial")}
          />
        </label>
        <label>
          Data de abertura:
          <TextField
            id="standard-basic"
            type="text" {...register("dataSituacao")}
          />
        </label>
        <label>
          Tipo de Empresa:
          <TextField
            id="standard-basic"
            type="text" {...register("type")}
          />
        </label>
        <label>
          Porte:
          <TextField
            id="standard-basic"
            type="text" {...register("porte")}
          />
        </label>
        <label>
          Rua:
          <TextField
            id="standard-basic"
            type="text" {...register("address")}
          />
        </label>
        <label>
          Número:
          <TextField
            id="standard-basic"
            type="text" {...register("addressNumber")}
          />
        </label>
        <label>
          Complemento:
          <TextField
            id="standard-basic"
            type="text" {...register("addressAdditionalInfo")}
          />
        </label>
        <label>
          Bairro:
          <TextField
            id="standard-basic"
            type="text" {...register("neighborhood")}
          />
        </label>
        <label>
          Cidade:
          <TextField
            id="standard-basic"
            type="text" {...register("city")}
          />
        </label>
        <label>
          Estado:
          <TextField
            id="standard-basic"
            type="text" {...register("uf")}
          />
        </label>
        <label>
          CEP:
          <TextField
            id="standard-basic"
            type="text" {...register("cep")}
          />
        </label>
        <label>
          Situação:
          <TextField
            id="standard-basic"
            type="text" {...register("situation")}
          />
        </label>
        <label>
          CNAEs:

          <div>

            {cnaes.length > 0
              ? cnaes.map((cnae, index) => (
                <div key={index}>
                  {cnae.code} | {cnae.text}

                </div>
              ))
              : "-"}


          </div>

        </label>
        <Button variant="contained" type="submit">Consultar</Button>
      </form>
    </Card>
  );
}

<Script 
async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6613975280720158"
crossOrigin="anonymous"
// data-checked-head="true"
/>


