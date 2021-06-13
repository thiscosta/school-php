<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Debt;

class DebtController extends Controller
{
    public function getAll(){
        return Debt::with('student', 'school')->get();
    }

    public function get($id){
        return Debt::with('student', 'school')->find($id);
    }

    public function create(Request $request) {
        $debt = Debt::create($request->all());

        return response()->json($debt, 201);
    }

    public function update(Request $request, $id) {
        $debt = Debt::findOrFail($id);
        $debt->update($request->all());

        return response()->json($debt, 200);
    }

    public function delete(Request $request, $id) {
        $debt = Debt::findOrFail($id);
        $debt->delete();

        return response()->json(null, 204);
    }
}
