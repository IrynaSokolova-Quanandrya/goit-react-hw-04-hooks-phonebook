import React from "react";
import PropTypes from 'prop-types';
import "../styles/input.css";
import "../styles/button.css";

 function Filter ({value, onChange}) {
    return (
      <label className="label filter__label">
        Find contacts by name
        <input
          className="input"
          value={value}
          onChange={onChange}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    );
 }
Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}


 export default Filter
