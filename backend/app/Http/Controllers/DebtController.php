<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Debt;
use Illuminate\Support\Facades\Auth;

class DebtController extends Controller
{
    public function getAll(){
        $user = Auth::user();
        
        if($user->profile == 'Admin') {
            return Debt::with('student', 'school')->get();
        }else{
            $debts = Debt::with('student', 'school')
            ->select('debts.*')
            ->join('students', 'students.id', '=', 'debts.student_id')
            ->join('schools', 'schools.id', '=', 'debts.school_id')
            ->where('students.user_id', '=', $user->id)
            ->get();
            return $debts;
        }
    }

    public function get($id){
        $user = Auth::user();
        
        if($user->profile == 'Admin') {
            return Debt::with('student', 'school')->find($id);
        }else{
            $debts = Debt::with('student', 'school')
            ->select('debts.*')
            ->join('students', 'students.id', '=', 'debts.student_id')
            ->join('schools', 'schools.id', '=', 'debts.school_id')
            ->where('debts.id', '=', $id)
            ->get();
            return $debts;
        }
        
    }

    public function create(Request $request) {
        $debt = Debt::create($request->all());

        $return = Debt::with('student', 'school')->find($debt->id);
        return response()->json($return, 201);
    }

    public function update(Request $request, $id) {
        $debt = Debt::findOrFail($id);
        $debt->update($request->all());

        $return = Debt::with('student', 'school')->find($debt->id);
        return response()->json($return, 201);
    }

    public function delete(Request $request, $id) {
        $debt = Debt::findOrFail($id);
        $debt->delete();

        return response()->json(null, 204);
    }
}
