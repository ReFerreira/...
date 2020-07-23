import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../services/api';

import { Container, Content } from './styles';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Campo deve conter 3 caracteres ou mais')
    .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  cpf: Yup.number()
    .required('O cpf é obrigatório (apenas numeros)')
    .typeError('O cpf é obrigatório (apenas numeros)')
    .positive('Campo deve conter apenas numeros')
    .min(8),
  phone: Yup.number()
    .required('O telefone é obrigatório (apenas numeros)')
    .typeError('O telefone é obrigatório (apenas numeros)')
    .positive('Campo deve conter apenas numeros')
    .min(8),
});

export default class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    cadastros: [],
  };

  // Carregar os dados do localStorage
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

  handleSubmit = (data) => {
    // this.setState({ loading: true });
    console.log(data);

    this.setState({
      cadastros: [...this.state.cadastros, data],
    });
  };

  render() {
    return (
      <Container>
        <Content>
          <Form schema={schema} onSubmit={this.handleSubmit}>
            <Input
              name="name"
              type="text"
              placeholder="Nome completo (sem abreviações)"
            />
            <Input name="cpf" type="text" placeholder="Digite o seu CPF" />
            <Input
              name="phone"
              type="text"
              placeholder="Digite o seu Telefone"
            />
            <Input name="email" type="text" placeholder="Digite o seu E-mail" />
            <button type="submit"> Cadastrar </button>
            <Link to="/listar">Listar Cadastros</Link>
          </Form>
        </Content>
      </Container>
    );
  }
}
