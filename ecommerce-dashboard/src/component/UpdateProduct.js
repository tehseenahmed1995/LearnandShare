import Header from './Header';
import { withRouter } from 'react-router-dom'
import { useState, useEffect} from 'react'
function UpdateProduct(props)
{
    const [data,setData] = useState([])
    useEffect(async () => {
        let result = await fetch("http://127.0.0.1:8000/api/product/"+ props.match.params.id)
        result = await result.json();
        setData(result)
    });

    return(
        <>
        <Header/>
        <div>
            <h1>Update Product</h1>
            <input type="text" name="name" defaultValue={data.name}></input> <br/>
            <input type="text" name="description" defaultValue={data.description}></input> <br/>
            <input type="number" name="price" defaultValue={data.price}></input> <br/>
            <input type="file" name="file_path" defaultValue={data.file_path}></input> <br/>
            <img style={{width:50}} src={"http://127.0.0.1:8000/"+data.file_path}></img> <br/>

        </div>
        </>
    )

}

export default withRouter(UpdateProduct)