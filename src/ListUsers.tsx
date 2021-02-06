import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'class-autobind'
import { Button } from 'reactstrap'
import { initialState } from './redux/data/initialState'

export interface ListUserProps{
    initialState : any
    dispatch : (Object) => void

}

const mapStateToProps = ({data: {initialState,forms},dispatch}) => {
    return{
        initialState,
        forms,
        dispatch,
    }
  }

  
class listUsers extends Component<ListUserProps>{

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

      private deleteUser(i){
          let is = this.props.initialState
          is.splice(i,1)
          this.props.dispatch({type:'data/SET_STATE', payload:{
              initialState: is
          }})
          

      }

    private generateUsers(){
        let items = []
        if(this.props.initialState){
            console.log(this.props.initialState)
            this.props.initialState.map((is, i) => 
                    items.push(
                        <>
                            nome: {is.id} <br/>
                            email: {is.email} <br/>
                            Data de Nascimento: {is.birthday} <br/>
                            Tipo de usuario: {is.userType} <br/>
                            <Button onClick={() => this.deleteUser(i)}>Delete</Button>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </>
                    )
                )
            }
        return items
    }
    render(){
        return(
            <>
                {this.generateUsers()}
            </>
        )
    }

}

export const ListUsers = (connect(mapStateToProps)(listUsers))

export default ListUsers