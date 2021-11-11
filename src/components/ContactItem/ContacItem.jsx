import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.scss';

const ContactItem = ({ contact: { id, name, number }, onRemoveContact }) => {
    return (
        <li className={s.listItem}>
            <p className={s.listItemText}>
                {name} : {number}
            </p>
            <button
                className={s.listItemButton}
                type="button"
                onClick={() => onRemoveContact(id)}
            >
                Delete
            </button>
        </li>
    );
};

ContactItem.propTypes = {
    contact: PropTypes.object,
    onRemoveContact: PropTypes.func.isRequired,
};

export default ContactItem;
