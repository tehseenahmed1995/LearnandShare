import Header from './Header';
import { useState} from 'react';
function AddProduct()
{
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [filepath, setFilepath] = useState("")

    async function addProduct(){
        const formData = new FormData();
        formData.append('name',name);
        formData.append('description',description);
        formData.append('price',price);
        formData.append('file_path',filepath);
        let result = await fetch('http://127.0.0.1:8000/api/addproduct',{
            method: "POST",
            body: formData
        });
        alert("product added successfully")
    }
    return(
        <>
        <Header/>
        <div>
            <h1>Add Product</h1>
            <div className="col-sm-6 offset-sm-3">
            <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" name="name" placeholder="Name" ></input>
            <br/>
            <input type="text" onChange={(e)=>setDescription(e.target.value)}  className="form-control" name="description" placeholder="Description" ></input>
            <br/>
            <input type="number" onChange={(e)=>setPrice(e.target.value)}  className="form-control" name="price" placeholder="Price" ></input>
            <br/>
            <input type="file" onChange={(e)=>setFilepath(e.target.files[0])}  className="form-control" name="file_path" placeholder="File" ></input>
            <br/>
            <button onClick={addProduct} className="btn btn-primary">Add Product</button>
            </div>
        </div>
        </>
    )

}

export default AddProduct;