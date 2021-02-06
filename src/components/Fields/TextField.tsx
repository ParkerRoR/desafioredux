import React,{Component} from 'react'
import autobind  from 'class-autobind'
import { Input } from 'reactstrap'


export interface TextFieldProps {
  onChange : (params) => void
  value : string
  ph : string
  type : string
}

export class TextField extends Component<TextFieldProps>{
  constructor(props){
    super(props)
    autobind(this)
  }
  public state = {
    value: this.props.value
  }


  public componentWillReceiveProps(p){
    if(p.value !== this.state.value){
      this.setState({value: p.value})
    }

  }
  private onChange({target:{value}}){

    this.setState({value})
    this.props.onChange(value)
  }


  render(){

    return(
      <>
        <Input onChange={this.onChange} value={this.state.value} placeholder={this.props.ph} type={this.props.type}/>
      </>
    )

  }
}
