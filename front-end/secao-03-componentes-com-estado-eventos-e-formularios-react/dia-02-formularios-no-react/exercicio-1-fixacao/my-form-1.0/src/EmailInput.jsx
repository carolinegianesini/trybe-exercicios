import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EmailInput extends Component {
  render() {
    const { handleChange, email } = this.props;

    return (
      <div>
        <label htmlFor="email">E-mail:
          <input name="email" type="email" id="email" onChange={handleChange} value={email} />
        </label>
      </div>
    )
  }
}

EmailInput.propTypes = {
  email: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EmailInput;