<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\School;

class SchoolController extends Controller
{
    public function getAll(){
        return School::with('user')->get();
    }

    public function get($id){
        return School::with('user')->find($id);
    }

    public function create(Request $request) {
        $school = School::create($request->all());

        return response()->json($school, 201);
    }

    public function update(Request $request, $id) {
        $school = School::findOrFail($id);
        $school->update($request->all());

        return response()->json($school, 200);
    }

    public function delete(Request $request, $id) {
        $school = School::findOrFail($id);
        $school->delete();

        return response()->json(null, 204);
    }
}
