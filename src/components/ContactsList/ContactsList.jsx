import PropTypes from 'prop-types';
import { ButtonDelete } from 'components/Button/ButtonDelete';
import css from 'components/ContactsList/contactList.module.css'
export const ContactsList = ({ contacts, onDeleteButton }) => {
  return (
    <div className={css.contacts}>
      {contacts.map(({ id, name, number }) => {
        return (
          <div key={id} className={css.marker}>
            <div className={css.contactItem}>
              {`${name}: ${number}`}
              <ButtonDelete actionHandler={() => onDeleteButton(id)}>
                X
              </ButtonDelete>
            </div>
          </div>
        );
      })}
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.node.isRequired,
    }).isRequired
  ),
  onDeleteButton: PropTypes.func.isRequired,
};