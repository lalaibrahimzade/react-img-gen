import React, { Component } from 'react'
import { Alert, Button, Card, CardBody, CardText, CardTitle} from 'reactstrap'
import FormModal from './formmodal';


export default class UserListImg extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            datas: {},
        };
        
        this.hide=this.hide.bind(this)
    }

    hide(){
        this.setState({visible:false});
    }

    getElementById(value){
      this.setState({
        datas: value,
        visible: true,
      })
    }

  render() {
    return (
    <div className='container mt-5'>
        <button className='btn btn-secondary' onClick={()=>this.setState({datas:{},visible:true})}>Add</button>
        {this.state.visible ? (
            <FormModal 
        visible={this.state.visible} 
        hide={this.hide} 
        addDatas={this.props.addDatas}
        editDatas={this.props.editDatas} 
        datas={this.state.datas}
        />
          ) : null}
        <div className="row gap-3 mb-5 mt-1">
        {this.props.data.length > 0 ? (
        this.props.data.map((datas) => (
    <Card style={{ width: '18rem' }} className='mt-5 col-md-4 col-xl-3' key={datas.id}> 
      <img alt="Sample" src={datas.img}/>
      <CardBody>
        <CardTitle tag="h5" >
        {datas.text}
        </CardTitle>
        {/* <CardText className="mb-2 text-muted" >
        <p>id: <i>{datas.id}</i></p>
        </CardText> */}
        <Button className='btn btn-success' onClick={()=>this.getElementById(datas)}>
          Edit
        </Button>
        &nbsp; &nbsp;
        <Button className='btn btn-danger' onClick={()=>this.props.deleteDatas(datas)}>
         Delete
        </Button>
      </CardBody>
    </Card>
  ))
) : (<Alert className='mt-5' color='danger'>Hec bir data daxil edilmeyib.</Alert>)}
        </div>
        

       
    </div>
)
  }
}
