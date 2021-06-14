<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function doIt(Request $request) {
        $data = [
            'email' => $request -> email,
            'password' => $request -> password
        ];

        if (!Auth::attempt($data)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        } else {
            $user = Auth::user();
            $token = $user->createToken('LaravelAuthApp')->accessToken;
            $user->api_token = $token;
            $user->save();

            return response()->json(['token' => $token, 'user' => $user], 200);
        }
    }
}
