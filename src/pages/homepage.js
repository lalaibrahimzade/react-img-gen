import React, { Component } from 'react'
import UserListImg from '../components/userListImg'
import { Navbar, NavbarBrand } from 'reactstrap'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

export default class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
              {
                id:uuidv4(),
                img: 'https://picsum.photos/id/237/200/300',
                text: "Lorem ipsum.",
            },
            ]
        };

        this.addDatas = this.addDatas.bind(this);
        this.deleteDatas = this.deleteDatas.bind(this);
        this.editDatas = this.editDatas.bind(this);
    }

    addDatas=(img, text)=>{
      if(img, text) {
        const data = [...this.state.data];
        data.push({
          id: uuidv4(),
          img:img,
          text:text,
        })
        this.setState({data});
        toast('Yeni kart elave edildi ✔️')
      } else{
        alert('Bos xanalari doldurun ✏️')
      }
    };

    deleteDatas=(card)=>{
      const data = this.state.data.filter(datas=>{
        return datas.id !== card.id;
      })
      this.setState({data});
      toast('Kart silindi 🗑️')
    }

    editDatas=(id, img, text)=>{
      if((id, img, text)){
        const data = [...this.state.data];
        let updatedDatas = data.map(datas=>{
          if(datas.id===id){
            datas = {
              id: id,
              img: img,
              text: text,
            };
          }
          return datas;
        });
        this.setState(
         {
          data: updatedDatas,
         }
        )
      }
      toast('Kartin melumatlari yenilendi 🔃')
    }


  render() {
    return (
      <div>
        <ToastContainer />
        <Navbar color="dark" dark expand="md">
                <div  className="container">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                </div>
            </Navbar>
          
              <UserListImg data={this.state.data} addDatas={this.addDatas} deleteDatas={this.deleteDatas} editDatas={this.editDatas}/>
           
      </div>
    )
  }
}
