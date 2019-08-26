import React from 'react';

const Item = ({item}) => {
  return (
    <tr key={item.id}>
      <td>
        {item.name}
      </td>
      <td>
        {item.icon}
      </td>
    </tr>
  );
 }

export default Item;
