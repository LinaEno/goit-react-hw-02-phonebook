import { Component } from "react";

class Form extends Component {
    state={
        name: '',

    }

    handleChange = event => {
        this.setState({ name: event.currentTarget.value})

    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.name);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({ name: '', });
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
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

export default Form;