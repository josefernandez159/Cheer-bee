import React, { Component } from "react";
import Breweries from './BreweriesApi'
import './BreweriesList.css'
import {HiOutlineChartSquareBar, HiOutlineLocationMarker, HiOutlinePhone} from 'react-icons/hi'


class BreweriesApi extends Component{

state = {
  BreweriesList: [],
  newTag: "add more",
}

//when the component is assembled an asynchronous call is made to bring the data from the 'Api', 
//I left the 'get' pulling the breweries part of the 'Api', making it more dynamic

async componentDidMount(){
  const response = await Breweries.get('breweries');
  this.setState({BreweriesList: response.data})
}



//delete item

deleteItem(id){
    // copy current list of items
    const BreweriesList = [...this.state.BreweriesList];
    // filter out the item being deleted
    const updatedList = BreweriesList.filter(item => item.id !== id);
    this.setState({ BreweriesList: updatedList });

}


render(){
  const {BreweriesList} = this.state

  document.body.style.backgroundColor = '#E5E5E5'
  return (
    <>
    <main className="apiContents" id="apiContents">

  {/* 'map' - generates the tables with the data of the breweries */}

    {BreweriesList.map(BreweriesList => ( 
      


<section className="api" key={BreweriesList.id}>

<i className="fa fa-trash" onClick={() => this.deleteItem(BreweriesList.id)}></i>
<h1>{BreweriesList.name}</h1>
<p>{BreweriesList.street} </p>
<p>{BreweriesList.city}, {BreweriesList.state} - {BreweriesList.country}</p>
<div className="tagsFlex">
<div className="tagsDiv">
<div className="tag tag1"><HiOutlineChartSquareBar className="iconTag"/> {BreweriesList.brewery_type}</div>
<div className="tag tag2"><HiOutlineLocationMarker className="iconTag"/> {BreweriesList.postal_code}</div>
<div className="tag tag3"><HiOutlinePhone className="iconTag"/> {BreweriesList.phone}</div>
{/* <div className="tag tag4"><HiOutlinePlusCircle className="iconTag" />{newTag}</div> */}
</div>
</div>
</section>

    ))}

  </main>
    </>
  )
}


}

export default BreweriesApi;