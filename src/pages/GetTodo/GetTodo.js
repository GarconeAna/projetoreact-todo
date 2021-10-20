import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../api/api';


const GetTodo = (props) => {
  const _id = props.match.params.id;
  const [todo, setTodo] = useState({});


  useEffect(() => {
    getTodoById();
  }, []);

  const getTodoById = async () => {
    const response = await Api.fetchGetById(_id);
    if(response.status === 404) {
      alert('Tarefa não encontrada');
    }
    if(response.status === 403) {
      alert('Id Inválido');
    }
    const result = await response.json();
    setTodo(result);
  }

  return (
    <div className="container flex-grow-1">
      <div className="row">
        <div className="col">
          <h1 className="text-center mt-4">{todo.titulo}</h1>
          <h2 className="text-center">{todo.descricao}</h2>
          <h4 className="text-center">{todo.prioridade}</h4>
          <h5 className="text-center">{todo.status}</h5>
          <h6 className="text-center">{todo.prazo}</h6>
          <div className="btn-group mt-3 w-100 d-flex align-items-center justify-content-center">
            <Link to={`/edit/${todo._id}`}  className="btn btn-outline-info">Editar</Link>
            <Link to={`/delete/${todo._id}`}  className="btn btn-outline-danger">Excluir</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetTodo;