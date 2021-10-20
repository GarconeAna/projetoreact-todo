import React from 'react'
import './Add.css';
import Api from '../../api/api';

const Add = (props) => {
  const history = props.history;
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    
    const titulo = evento.target.titulo.value; 
    const descricao = evento.target.descricao.value;
    const prioridade = evento.target.prioridade.value;
    const status = evento.target.status.value;
    const prazo = evento.target.prazo.value;

    const todo = {
      titulo,
      descricao,
      prioridade,
      status,
      prazo
    }
    
    try {
      const response = await Api.fetchPost(todo)
      const result = await response.json();
      alert(result.message);
      
      history.push('/');

    } catch(error) {
      console.log(error);
    }
    
  }

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Cadastrar Tarefa</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="titulo" id="floatingInput" required/>
                  <label htmlFor="floatingInput">Título</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="descricao" id="floatingInput" required/>
                  <label htmlFor="floatingInput">Descrição</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating">
                  <select className="form-control" name="prioridade" id="floatingprioridade" required>
                    <option value="Alta">Alta</option>
                    <option value="Média">Média</option>
                    <option value="Baixa">Baixa</option>
                  </select>
                  <label htmlFor="floatingprioridade">Prioridade</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <select className="form-control" name="status" id="floatingstatus" required>
                    <option value="Fazer">Fazer</option>
                    <option value="Fazendo">Fazendo</option>
                    <option value="Feito">Feito</option>
                  </select>
                  <label htmlFor="floatingstatus">Status</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <select className="form-control" name="prazo" id="floatingprazo" required>
                    <option value="1 dia">1 dia</option>
                    <option value="2 dias">2 dias</option>
                    <option value="3 dias">3 dias</option>
                    <option value="4 dias">4 dias</option>
                    <option value="5 dias">5 dias</option>
                    <option value="6 dias">6 dias</option>
                    <option value="1 semana">1 semana</option>
                    <option value="2 semanas">2 semanas</option>
                    <option value="3 semanas">3 semanas</option>
                    <option value="1 mês">1 mês</option>
                    <option value="Sem prazo">Sem prazo</option>
                  </select>
                  <label htmlFor="floatingprazo">Prazo</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">Enviar</button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Add;