import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DescriptionInput extends Component {
  render() {
    const { handleChange, description } = this.props;

    return (
      <div>
        <label htmlFor="profile">
          <textarea
            name="description"
            id="description"
            placeholder='Descreva-se em poucas palavras'
            onChange={handleChange}
            value={description}>
          </textarea>
        </label>
      </div>
    )
  }
}

DescriptionInput.propTypes = {
  age: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DescriptionInput;