import PropTypes from 'prop-types';
import css from 'components/Section/section.module.css'

export const Section = ({ title = '', children }) => {
  return (
    <div className={css.sectionStyle}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};