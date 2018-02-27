import React from 'react';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({amount, createdAt, description, id, note}) => (
  <div>
    <ul>
      <Link to={`/edit/${id}`}>
        <li>{description}</li>
      </Link>
      <li>{amount}</li>
      <li>{createdAt}</li>
      <li>{note}</li>
    </ul>
 </div>
);

export default ExpenseListItem;
