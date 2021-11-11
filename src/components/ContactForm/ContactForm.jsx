import React, { Component } from 'react';
import s from './ContactForm.module.scss';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    formHandler = e => {
        e.preventDefault();
        const { name, number } = this.state;
        this.props.onSubmit(name, number);
        this.setState({
            name: '',
            number: '',
        });
    };
    inputHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    render() {
        return (
            <form
                className={s.form}
                autoComplete="off"
                onSubmit={this.formHandler}
            >
                <span className={s.formLabel}>
                    Name
                    <br />
                    <input
                        className={s.formInput}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        value={this.state.name}
                        required
                        onChange={this.inputHandler}
                    />
                </span>
                <br />
                <span className={s.formLabel}>
                    Number
                    <br />
                    <input
                        className={s.formInput}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        value={this.state.number}
                        onChange={this.inputHandler}
                        required
                    />
                </span>
                <br />
                <button type="submit" className={s.formBtn}>
                    Add contact
                </button>
            </form>
        );
    }
}
