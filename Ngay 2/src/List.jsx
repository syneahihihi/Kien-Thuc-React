import React from 'react'
import PropTypes from 'prop-types'

function List(props) {

    // const sortedFruits = fruits.sort((a, b) => a.calories - b.calories); sort calo từ thấp đến cao
    // const sortedFruits2=fruits.sort((a, b) => a.name.localeCompare(b.name)); sort name từ thấp đến cao
    //const lowCalorieFruits = fruits.filter(fruit => fruit.calories < 100); lọc ra những loại trái cây có calo < 100

    const sortedFruits = props.item.filter(item => item.category === 'Vegetable');
    const itemList= props.item;
    const category= props.category;
    const listItems = itemList.map((item) =>
        <li key={item.id}>
            {item.name}: <strong>{item.calories}</strong> calories
        </li>
    )
    List.defaultProps = {
    item: [],
    category: 'Item'
  };
    List.propTypes = {
    item: PropTypes.arrayOf(
      PropTypes.shape({id: PropTypes.number.isRequired, name: PropTypes.string.isRequired, calories: PropTypes.number.isRequired})
    ).isRequired,
    category: PropTypes.string.isRequired
  };

  return (
    <div>
        <h2>List of {category}s</h2>
      <ol>
        {listItems}
      </ol>
    </div>
  )
}

export default List
