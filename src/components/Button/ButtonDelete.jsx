import PropTypes from 'prop-types';
import css from 'components/Button/button.module.css'

export const ButtonDelete = ({ type = 'button', children, actionHandler }) => {
  return (
    <button type={type} onClick={actionHandler} className={css.buttonDelete}>
      {children}
    </button>
  );
};

ButtonDelete.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  actionHandler: PropTypes.func.isRequired,
};