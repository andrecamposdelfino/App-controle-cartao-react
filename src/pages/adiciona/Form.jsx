// config hooks
import { useState } from "react";

// config css
import "./form.css";

// config url
const url = "http://localhost:3000/lancamentos";

function Form() {
    const [data, setData] = useState("");
    const [credor, setCredor] = useState("");
    const [documento, setDocumento] = useState("");
    const [parcela, setParcela] = useState("");
    const [valor, setValor] = useState("");
    const [classificacao, setClassificacao] = useState("");
    const [centro, setCentro] = useState("");

    const handleForm = async (event) => {
        event.preventDefault();
        Number(valor)
        const obj = {
            data: data,
            credor: credor,
            documento: documento,
            parcela: parcela,
            valor: Number(valor),
            classificacao: classificacao,
            centro: centro,
        };

        console.log(typeof(valor));
        

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })

        alert("Lançamento concluido!");
        console.log(obj);
        

        setCredor("");
        setDocumento("");
        setParcela("");
        setValor("");
        setClassificacao("");
        setCentro("");
        setData("dd/mm/aaaa")
    };

  return (
    <div className="form-container">
      <h1>Novo lançamento</h1>
      <p>&nbsp;</p>
      <form onSubmit={handleForm} className="form-control">
        <div className="box-inputs">
          <div className="form-group">
            <label htmlFor="data da compra">Data do pagamento</label>
            <input
              type="date"
              name="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="credor">Credor</label>
            <input
              type="text"
              placeholder="Informe o credor"
              name="credor"
              value={credor}
              onChange={(e) => setCredor(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="documento">Documento</label>
            <input
              type="text"
              placeholder="Informe o numero do documento"
              name="documento"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="parcela">Parcela</label>
            <input
              type="text"
              placeholder="Informe o numero da parcela eX. 1/2"
              name="parcela"
              value={parcela}
              onChange={(e) => setParcela(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="valor">Valor</label>
            <input
              type="number"
              placeholder="Informe o valor da parcela"
              name="valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="classificacao">Classificacao</label>
            <input
              type="text"
              placeholder="Informe o classificacao da parcela"
              name="classificacao"
              value={classificacao}
              onChange={(e) => setClassificacao(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="centro">Centro de custo</label>
            <input
              type="text"
              placeholder="Informe o centro de custo"
              name="centro"
              value={centro}
              onChange={(e) => setCentro(e.target.value)}
              required
            />
          </div>

          <input type="submit" value="Adicionar" className="button" />
          {/* <input type="submit" value="Limpar" className="button" /> */}
        </div>

        <div className="box-img">
          <img src="./ets-quem-somos-1.webp" alt="imagem 1" />
          <h1>ETS Marques</h1>
          <br />
          <p>Há mais de 25 anos atuando em todo o territorio nacional<br></br>em diversas obras de terraplenagem.</p>
        </div>
      </form>
      
    </div>
  );
}

export default Form;
