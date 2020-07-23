import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, Content } from './styles';

export default class Listar extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    cadastros: [],
  };

  async componentDidMount() {
    const repository = localStorage.getItem('repository');

    if (repository) {
      this.setState({ cadastros: JSON.parse(repository) });
    } else {
      const response = await api.get('users');
      localStorage.setItem('repository', JSON.stringify(response.data));
    }
  }

  componentDidUpdate(_, prevState) {
    const { cadastros } = this.state;

    if (prevState.cadastros !== cadastros) {
      localStorage.setItem('repository', JSON.stringify(cadastros));
    }
  }

  handleDelete = (cpf) => {
    this.setState({
      cadastros: this.state.cadastros.filter((c) => c.cpf !== cpf),
    });
  };

  render() {
    const { cadastros } = this.state;
    return (
      <Container>
        <Content>
          {cadastros.map((cadastro) => (
            <li key={cadastro.cpf}>
              <aside>
                <h1>Nome: {cadastro.name}</h1>
                <span>CPF: {cadastro.cpf}</span>
                <span>Telefone: {cadastro.phone}</span>
                <span>Email: {cadastro.email}</span>
              </aside>
              <button
                onClick={() => this.handleDelete(cadastro.cpf)}
                type="button"
              >
                Remover
              </button>
            </li>
          ))}
        </Content>
        <Link to="/">Cadastrar</Link>
      </Container>
    );
  }
}
