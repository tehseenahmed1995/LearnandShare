import Header from './Header';
import React, {useState, useEffect} from 'react'
import { Table} from 'react-bootstrap'
function ProductList(){
    const [data,setData] = useState([])
    useEffect(async ()=>{
        let result = await fetch("http://localhost:8000/api/product");
        result = await result.json();
        setData(result)
    },[])
    return(
        <div>
            <Header/>
            <h1>Product List</h1>
        <Table>
        <thead>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Image</th>
        </tr>
        </thead>
        <tbody>
        
        {
            data.map((item)=>
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td><img style={{width:50}} src={'http://localhost:8000/'+item.file_path}/></td>
            </tr>
            )
        }
        </tbody>
        </Table>
        </div>
    )
}
export default ProductList;