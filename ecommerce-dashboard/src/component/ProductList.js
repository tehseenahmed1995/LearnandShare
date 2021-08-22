import Header from './Header';
import React, {useState, useEffect} from 'react'
import { Table} from 'react-bootstrap'
import { Link} from 'react-router-dom'
function ProductList(){
    const [data,setData] = useState([])
    useEffect(()=>{
        getData();
    },[])

    async function getData(){
        let result = await fetch("http://localhost:8000/api/product");
        result = await result.json();
        setData(result)
    }

    async function deleteItem(id){
        let result = await fetch("http://localhost:8000/api/product/"+id,{
            method : 'delete'
        });

        result = await result.json();
        getData();
    }
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
        <th>Delete</th>
        <th>Update</th>


        </tr>
        </thead>
        <tbody>
        
        {
            data.map((item)=>
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td><img style={{width:50}} src={'http://localhost:8000/'+item.file_path}/></td>
                <td><button onClick={(e)=>deleteItem(item.id)} className="btn btn-danger">Delete</button></td>
                <td>
                <Link to={'/update/'+item.id}>
                <button className="btn btn-success">Update</button>
                </Link>
                </td>

                </tr>
            )
        }
        </tbody>
        </Table>
        </div>
    )
}
export default ProductList;