import PropTypes from 'prop-types';
import css from 'components/Filter/filter.module.css'
export const Filter = ({ filter, onChange }) => {
  return (
    <label className={css.labelFilter}>
      <h2>Find contacts by name</h2>
      <input className={css.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};