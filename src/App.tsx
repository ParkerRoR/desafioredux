import React, { Component } from 'react'
import autobind from 'class-autobind'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import { initialState } from './redux/data/initialState'

import { TextField } from './components/Fields/TextField'

import 'bootstrap/scss/bootstrap.scss'


const mapStateToProps = ({data: {initialState,forms},dispatch}) => {
  return{
      initialState,
      forms,
      dispatch,
  }
}
export interface AppProps{
  dispatch : (Object) => void
  initialState : string[]
  name : string
  email : string
  password : string
  passwordConfirmation : string
  birthday : string
  forms : any
  ph : string
  type : string
  history : any
}

class app extends Component<AppProps>{
  public state = {
    name : undefined,
    email : undefined,
    password : undefined,
    passwordConfirmation: undefined,
    birthday: undefined,
    userType: undefined,
  }

  constructor(props){
    super(props)
    autobind(this)
  }

  componentDidMount(){
    if(!this.props.initialState){

      this.props.dispatch({
        type: 'data/SET_STATE',
        payload: {
          initialState: initialState
        }
      })
    }

  }//end componentDidMount

  public handleChange(name, value){
    this.setState({[name]:value})
    this.props.dispatch({type: 'data/SET_STATE', payload:{
      forms : {...this.props.forms, [name]:value
      }
    }})
  }

  public saveUser(){
    const currentForm = this.props.forms
    currentForm.id = (Math.round(Math.random()*100)).toString()
    this.props.dispatch({type: 'data/SET_STATE', payload:{
      initialState : [...this.props.initialState, currentForm]
    }})
  }

  private validateFields() {
    const arrState = Object.values(this.state)
    function isUndefined(element, index, array) {
      return element === undefined;
    }
    return arrState.some(isUndefined)
  }

  private goList(){
    this.props.history.push('list')
  }

  render(){
    return(
      <>
        <Button onClick={() => console.log(this.props)}>Log redux</Button>
        <TextField onChange={v => this.handleChange('name',v)} value={this.state.name} ph={'Nome'} type={'text'} />
        <TextField onChange={v => this.handleChange('email',v)} value={this.state.email} ph={'Email'} type={'text'}/>
        <TextField onChange={v => this.handleChange('password',v)} value={this.state.password} ph={'Senha'} type={'password'} />
        <TextField onChange={v => this.handleChange('passwordConfirmation',v)} value={this.state.passwordConfirmation} ph={'Confirme sua senha'} type={'password'} />
        <TextField onChange={v => this.handleChange('birthday',v)} value={this.state.birthday} ph={'Data de Nascimento'} type={'text'} />
        <TextField onChange={v => this.handleChange('userType',v)} value={this.state.userType} ph={'Tipo de usuario'} type={'text'} />

        {!this.validateFields() ?
          <Button onClick={() => this.saveUser()}>Cadastrar</Button>
          :
          <Button disabled onClick={() => this.saveUser()}>Cadastrar</Button>
      
        }

        <Button onClick={() => this.validateFields()}>log state</Button>
        <Button onClick={() => console.log(this.state)}>log state</Button>


        <Button onClick={() => this.goList()}>Go to listUsers</Button>

      </>
    )
  }
}
export const App = (connect(mapStateToProps)(app))

export default App