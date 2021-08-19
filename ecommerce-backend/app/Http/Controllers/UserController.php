<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $req)
    {
        $user = new User;
        $user->name = $req->name;
        $user->email = $req->email;
        $user->password = Hash::make($req->password);
        $user->save();
        return $user;
    }

    public function login(Request $req)
    {
        $user = User::where('email',$req->email)->first();
        if(!$user || !Hash::check($req->password,$user->password))
        {
            return ["error" => "email or password not match"];
        }
        return $user;
    }
}
