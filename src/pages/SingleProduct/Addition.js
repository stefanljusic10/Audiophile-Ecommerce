import React from 'react'

function Addition({ content }) {
  const productIncludes = content.includes.map((item) => (
    <tr className='single__table-row' key={item.item}>
      <td className='single__table-cell'>{item.quantity}x</td>
      <td className='single__table-cell'>{item.item}</td>
    </tr>
  ))

  return (
    <div className='addition'>
      <div className='addition__features'>
        <div className='addition__features-heading heading-smaller'>Features</div>
        <div className='single-text text margin-top-small'>{content.features}</div>
      </div>
      <div className='addition__includes'>
        <div className='addition__includes-heading heading-smaller'>In the box</div>
        <table className='addition__includes-table text margin-top-small'>
          <tbody>
            {productIncludes}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Addition
