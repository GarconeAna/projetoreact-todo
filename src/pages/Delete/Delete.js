import React, { useState, useEffect } from 'react'
import Api from '../../api/api';


const Delete = (props) => {
  const _id = props.match.params.id;
  const history = props.history;
  const [todo, setTodo] = useState({});
  

  useEffect(() => {
    getTodoById();
  }, []);

  const getTodoById = async () => {
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    setTodo(result);
  }

  const handleDelete = async (evento) => {
    evento.preventDefault();

    try {
      const response = await Api.fetchDelete(_id);
      const result = await response.json();
      alert(result.message);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
    
  };


  return (
    <div className="container flex-grow-1">
      <div className="row">
        <div className="col">
          <h2>Deseja realmente Excluir</h2>
          <button className="btn btn-danger">Não</button>
          <button className="btn btn-success" onClick={handleDelete}>Sim</button>
        </div>
      </div>
    </div>
  );
}

export default Delete;