import PropTypes from 'prop-types';
import css from 'components/Button/button.module.css'

export const Button = ({ type = 'submit', children, actionHandler }) => {
  return (
    <button type={type} onClick={actionHandler} className={css.button}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  actionHandler: PropTypes.func,
};