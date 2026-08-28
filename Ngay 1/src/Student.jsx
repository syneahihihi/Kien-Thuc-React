import React from 'react'
import PropTypes from 'prop-types'


function Student(props) {
  return (
    <div className="student-card">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
    </div>
  )
}
    Student.defaultProps = {
        name: 'Guest',
        age: 0,
        isStudent: false
    }
    Student.propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        isStudent: PropTypes.bool,
    }

export default Student
