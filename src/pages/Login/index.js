import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, Alert, Row, Col } from 'reactstrap';


import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message : this.props.location.state?this.props.location.state.message: '',
        };
    }

    signIn = () => {
        const data = { email: this.email, password: this.password };
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };

    

        fetch('http://localhost:5000/login', requestInfo)
        .then(response => {
            if(response.ok) {
                return response.json()
            }
            throw new Error("Login inválido...");
        })
        .then(token => {
            localStorage.setItem('token', token);
            this.props.history.push("/admin");
            return;
        })
        .catch(e => {
            this.setState({ message: e.message });
        }); 
    }

    render() {
        
        return (
            <div className="col-md-6">
              <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}><Header /> </Col>
              </Row>
             
                <hr  className="my-3"/>
                {
                    this.state.message !== ''? (
                        <Alert color="danger" className="text-center"> {this.state.message} </Alert>
                    ) : ''
                }
                <Form>
                    <FormGroup>
                        <Label for="email">Login</Label>
                        <Input type="text" id="email" onChange={e => this.email = e.target.value} placeholder="Informe seu login" />
                    </FormGroup>
                    <FormGroup>                        
                        <Label for="password">Senha</Label>
                        <Input type="password" id="password" onChange={e => this.password = e.target.value} placeholder="Informe a senha" />
                    </FormGroup>
                    <Button color="success" block onClick={this.signIn}> Entrar </Button>                  
                    <p>Não tem cadastro? Para efetuar seu cadastro <Link to="/signup">clique aqui!</Link></p>
                </Form>
                <Footer />
            </div>
        );
    }
}