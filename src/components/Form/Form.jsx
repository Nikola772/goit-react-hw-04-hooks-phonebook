import React from "react";
import style from './Form.module.css';

class Form extends React.Component {
    state={
        name: '',
        number: '',
    }

   

    handleChange = e => {
        const { name, value } = e.currentTarget;

        this.setState({[name]: value});
    };

    handleSubmit = e => {
        e.preventDefault();
    
         

        this.props.onSubmit(this.state.name, this.state.number);

        this.reset();
      };

      reset = () => {
          this.setState({name: '', number: ''})
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={style.form}>
         <label>
          Им'я: <input className={style.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              />
          </label>
          <label>
          Тел: <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              placeholder="412-32-44"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              required
              />
          </label>
          <button type="submit" className={style.button}>Додати контакт</button>
       </form>
        )
    }
}

export default Form;