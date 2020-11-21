import React from 'react';

function Row(props) {
  return (
	  <tr>
	  	<td><input value={props.name} onChange={(e) => props.updateValue(props.id, 'name', e.target.value)} /></td>
		  <td><input value={props.count} onChange={(e) => props.updateValue(props.id, 'count', e.target.value)} /></td>
		  <td><input value={props.price} onChange={(e) => props.updateValue(props.id, 'price', e.target.value)} /></td>
		  <td style={{textAlign: 'center'}}>{props.count * props.price}</td>
	  </tr>
	);
}

export default Row;
