import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const todo = props.data;
  return (
    <Link to={`/view/${todo._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{ todo.titulo }</h3>
          <span className="badge bg-danger">{ todo.prioridade }</span>
          <span className="badge bg-light text-dark">{ todo.status }</span>
        </div>
      </div>
    </Link>
  )
}

export default Card;