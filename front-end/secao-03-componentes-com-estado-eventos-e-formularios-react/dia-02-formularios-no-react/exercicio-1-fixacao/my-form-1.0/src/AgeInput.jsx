import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AgeInput extends Component {
    render() {
      const { handleChange, age } = this.props;

        return (
            <div>
                <label htmlFor="age">Idade:
                    <input type="number" name="age" id="age" onChange={handleChange} value={age} />
                </label>
            </div>
        )
    }
}

AgeInput.propTypes = {
  age: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AgeInput;