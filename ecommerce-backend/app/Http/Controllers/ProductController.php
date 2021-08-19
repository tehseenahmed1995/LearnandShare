<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function addProduct(Request $request){

        $product = new Product();
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->file_path = $request->file('file_path')->store('products');
        $product->save();
        return $product;
    }

    public function list(){

        return Product::all();
    }

    public function delete($id){

        $result = Product::where('id', $id)->delete();
        if($result){
            return (["result" => "product has been deleted"]);
        }
        else{
            return (["result" => "operation failed"]);
        }
    }
 
}
