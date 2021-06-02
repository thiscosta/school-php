<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function getAll(){
        return Student::with('user')->get();
    }

    public function get($id){
        return Student::with('user')->find($id);
    }

    public function create(Request $request) {
        $student = Student::create($request->all());

        return response()->json($student, 201);
    }

    public function update(Request $request, $id) {
        $student = Student::findOrFail($id);
        $student->update($request->all());

        return response()->json($student, 200);
    }

    public function delete(Request $request, $id) {
        $student = Student::findOrFail($id);
        $student->delete();

        return response()->json(null, 204);
    }
}
