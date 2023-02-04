import { Component } from "react";

class Form extends Component {
    state={
        name: '',
        number: '',

    }

    handleChangeName = event => {
        this.setState({ name: event.currentTarget.value })

    }

    handleChangeNumber = event => {
        this.setState({ number:event.currentTarget.value })

    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.name,this.state.number);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({ name: '', number: ''});
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChangeName}
                    />
                </label>
                <label htmlFor="number">Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChangeNumber}
                        />
                </label>
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

export default Form;