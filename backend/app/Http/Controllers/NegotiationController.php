<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Negotiation;
use Illuminate\Support\Facades\Auth;

class NegotiationController extends Controller
{
    public function getAll(){
        $user = Auth::user();
        
        if($user->profile == 'Admin') {
            return Negotiation::with('student', 'debt')->get();
        }else{
            $negotiations = Negotiation::with('student', 'debt')
            ->select('negotiations.*')
            ->join('students', 'students.id', '=', 'negotiations.student_id')
            ->join('debts', 'debts.id', '=', 'negotiations.debt_id')
            ->where('students.user_id', '=', $user->id)
            ->get();
            return $negotiations;
        }
    }

    public function get($id){
        $user = Auth::user();
        
        if($user->profile == 'Admin') {
            return Negotiation::with('student', 'debt')->find($id);
        }else{
            $negotiations = Negotiation::with('student', 'debt')
            ->select('negotiations.*')
            ->join('students', 'students.id', '=', 'negotiations.student_id')
            ->join('debts', 'debts.id', '=', 'negotiations.debt_id')
            ->where('students.id', '=', $id)
            ->get();
            return $negotiations;
        }
    }

    public function create(Request $request) {
        $negotiation = Negotiation::with('student', 'debt')->create($request->all());

        return response()->json(Negotiation::with('student', 'debt')->findOrFail($negotiation->id), 201);
    }

    public function update(Request $request, $id) {
        $negotiation = Negotiation::with('student', 'debt')->findOrFail($id);
        $negotiation->update($request->all());

        return response()->json($negotiation, 200);
    }

    public function delete(Request $request, $id) {
        $negotiation = Negotiation::with('student', 'debt')->findOrFail($id);
        $negotiation->delete();

        return response()->json(null, 204);
    }
}
