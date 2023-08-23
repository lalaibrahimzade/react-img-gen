import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter} from 'reactstrap'
import { v4 as uuidv4 } from 'uuid';

class FormModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: null,
            img: '',
            text:'',
        }
    }

    onSubmit(){
        this.props.addDatas(
          this.state.img, 
          this.state.text
          );
        this.props.hide();
    }

    UpdateDatas(){
      this.props.editDatas(
        this.state.id,
        this.state.img,
        this.state.text,
      );
      this.props.hide();
    }

    componentDidMount(){
      this.setState({
        id: this.props.datas.id,
        img: this.props.datas.img,
        text: this.props.datas.text,
      })
    }


  render() {
    return (
      <div>
         <Modal fade={false} isOpen={this.props.visible}>
        <ModalBody>
        <Form>
          <FormGroup>
            <Label for="img">image</Label>
            <Input 
            value={this.state.img}
            onChange={(e) => this.setState({img: e.target.value})} id="img" name="img" type="text"/>
         </FormGroup>
         <FormGroup>
            <Label for="text">text</Label>
            <Input 
            value={this.state.text}
            onChange={(e) => this.setState({text: e.target.value})} id="text" name="text" type="text"/>
         </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
          {
            this.props.datas.id ? (<Button className='btn btn-success' onClick={()=>this.UpdateDatas()}>Update</Button>) : (<Button className='btn btn-success' onClick={()=>this.onSubmit()}>Submit</Button>) 
          }
          <Button className='btn btn-warning' onClick={()=>{this.props.hide()}}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </div>
    )
  }
}

export default FormModal