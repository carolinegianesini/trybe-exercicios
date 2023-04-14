import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectInput extends Component {
  render() {
    const { children, handleChange } = this.props;

    return (
      <div>
        <label htmlFor="children">Filhos:
          <select name="children" id="children" onChange={handleChange} value={children}>
            <option value="">Selecione</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectInput.propTypes = {
  children: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectInput;