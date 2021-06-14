<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getAll(){
        $user = Auth::user();
        return User::with('students')->get();
    }

    public function get($id){
        return User::with('students')->find($id);
    }

    public function create(Request $request) {
        $user = User::create($request->all());

        return response()->json($user, 201);
    }

    public function update(Request $request, $id) {
        $user = User::findOrFail($id);
        $user->update($request->all());

        return response()->json($user, 200);
    }

    public function delete(Request $request, $id) {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json(null, 204);
    }
}
