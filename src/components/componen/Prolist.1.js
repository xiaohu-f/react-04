import React from 'react';
import {Link} from 'react-router-dom';

const Com = ({prolist}) => (
  <ul className = "prolist">
    {
      prolist.map((item, index) => (
        <li key = {index}>
          <Link to = {"/detail/" + item.id}>
            {item.title}
          </Link>
        </li>
      ))
   }
  </ul>
)


export default Com;