import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.scss';

const Filter = ({ value, onFilter }) => {
    return (
        <form>
            <span className={s.filterLabel}>
                Find contacts by name
                <br />
                <input
                    className={s.filterInput}
                    type="text"
                    value={value}
                    onChange={e => onFilter(e.target.value)}
                />
            </span>
        </form>
    );
};
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
};

export default Filter;
