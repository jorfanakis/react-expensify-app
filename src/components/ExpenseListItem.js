import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({amount, createdAt, description, id, note}) => (
  <div>
    <ul>
      <Link to={`/edit/${id}`}>
        <li>{description}</li>
      </Link>
      <p>
        {numeral(amount / 100).format('$0,0.00')}
        -
        {moment(createdAt).format('MMMM Do, YYYY')}
        -
        {note}
      </p>
    </ul>
 </div>
);

export default ExpenseListItem;
