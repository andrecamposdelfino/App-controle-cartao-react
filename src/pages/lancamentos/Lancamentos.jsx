// config hooks

import { useState, useEffect } from "react";
import { Table } from "antd";
import { CarOutlined, HomeOutlined, LoginOutlined, SlackOutlined, SlackSquareFilled, SunOutlined, ToolOutlined, TruckOutlined } from "@ant-design/icons";

// config css
import "./lancamentos.css";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Codigo",
    dataIndex: "id",
  },
  {
    title: "Data da compra",
    dataIndex: "data",
  },
  {
    title: "Credor",
    dataIndex: "credor",
  },
  {
    title: "Documento",
    dataIndex: "documento",
  },
  {
    title: "Parcela",
    dataIndex: "parcela",
  },
  {
    title: "Valor",
    dataIndex: "valor",
  },
  {
    title: "Classificação",
    dataIndex: "classificacao",
  },
  {
    title: "Centro",
    dataIndex: "centro",
  },
];

// confi url
const url = "http://localhost:3000/lancamentos";
function Lancamentos() {
  const [lancamentos, setLancamentos] = useState([]);
  
  useEffect(() => {

    async function fetchData() {
      const res = await fetch(url)
      const dados = await res.json()
      setLancamentos(dados)
      
    }
    
    fetchData()

  }, [])
    
  // centro de custo alpha
  const centroAlpha = lancamentos.filter((centro) => centro.centro === "Ets - Alpha")
  const valorTotalAlpha = centroAlpha.reduce((valorAtual, novoValor) => valorAtual + novoValor.valor, 0) 
  const valorAlphaFormatado = formatValue(valorTotalAlpha);

  const centroAdm = lancamentos.filter((centro) => centro.centro === "Ets - Administrativo")
  const valorTotalAdministrativo = centroAdm.reduce((valorAtual, novoValor) => valorAtual + novoValor.valor, 0)
  const valorAdministrativoFormatado = formatValue(valorTotalAdministrativo)

  const centroOficina = lancamentos.filter((centro) => centro.centro === "Ets - Oficina")
  const valorTotalOficina = centroOficina.reduce((valorAtual, novoValor) => valorAtual + novoValor.valor, 0)
  const valorOficinaFormatado = formatValue(valorTotalOficina)

  const centroJeri = lancamentos.filter((centro) => centro.centro === "Ets - Jeri")
  const valorTotalJeri = centroJeri.reduce((valorAtual, novoValor) => valorAtual + novoValor.valor, 0)
  const valorJeriFormatado = formatValue(valorTotalJeri)

  const centroMaqEquip = lancamentos.filter((centro) => centro.centro === "Ets - Maq e Equip")
  const valorTotalMaqEquip = centroMaqEquip.reduce((valorAtual, novoValor) => valorAtual + novoValor.valor, 0)
  const valorMaqEquipFormatado = formatValue(valorTotalMaqEquip)

  const centroLocacoes = lancamentos.filter((centro) => centro.centro === "Ets - Locacoes")
  const valorTotalEtsLocacoes = centroLocacoes.reduce((valorAtual, novoValor) => valorAtual + novoValor.valor, 0)
  const valorTotalFormatado = formatValue(valorTotalEtsLocacoes)
  

  function formatValue(valor){
    valor = parseFloat(valor)
    return valor.toLocaleString(
      "pt-br",
      {
        style:"currency",
        currency:'BRL',
        maximuFractionDigits:2
      }
    )
  }



  return (
    <div className="ln-container">
      <h1>Lançamentos</h1>

      <br />

      <div className="box-valores">
        <div className="box">
          <h1>
            <SlackOutlined />
          </h1>
          <br />
          <p> Ets - Alpha</p>
          <p>
            <strong>{valorAlphaFormatado}</strong>
          </p>
          <p>&nbsp;</p>
        </div>

        <div className="box">
          <h1>
            <HomeOutlined />
          </h1>
          <br />
          <p> Ets - Administrativo</p>
          <p>
            <strong>{valorAdministrativoFormatado}</strong>
          </p>
          <p>&nbsp;</p>
        </div>

        <div className="box">
          <h1>
            <ToolOutlined />
          </h1>
          <br />
          <p> Ets - Oficina</p>
          <p>
            <strong>{valorOficinaFormatado}</strong>
          </p>
          <p>&nbsp;</p>
        </div>

        <div className="box">
          <h1>
            <SlackSquareFilled />
          </h1>
          <br />
          <p> Ets - Jeri</p>
          <p>
            <strong>{valorJeriFormatado}</strong>
          </p>
          <p>&nbsp;</p>
        </div>

        <div className="box">
          <h1>
            <TruckOutlined />
          </h1>
          <br />
          <p> Ets - Maq e Equip</p>
          <p>
            <strong>{valorMaqEquipFormatado}</strong>
          </p>
          <p>&nbsp;</p>
        </div>

        <div className="box">
          <h1>
            <TruckOutlined />
          </h1>
          <br />
          <p> Ets - Locações</p>
          <p>
            <strong>{valorTotalFormatado}</strong>
          </p>
          <p>&nbsp;</p>
        </div>

      </div>

      <div className="box-formulario">
        <button className="btnadicionar">
          <Link to="/adiciona">Adicionar lançamento</Link>
        </button>

        <form>
          <div className="form-group">
              <input type="text"  placeholder="Pesquisar centro de custo"/>
          </div>
        </form>
      </div>

      <p>&nbsp;</p>
      <Table
        columns={columns}
        dataSource={lancamentos}
        bordered
        title={() => "Lançamentos"}
        footer={() => "Footer"}
      />
    </div>
  );
}

export default Lancamentos;
