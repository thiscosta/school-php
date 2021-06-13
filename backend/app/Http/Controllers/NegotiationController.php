<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Negotiation;

class NegotiationController extends Controller
{
    public function getAll(){
        return Negotiation::with('student', 'debt')->get();
    }

    public function get($id){
        return Negotiation::with('student', 'debt')->find($id);
    }

    public function create(Request $request) {
        $negotiation = Negotiation::create($request->all());

        return response()->json($negotiation, 201);
    }

    public function update(Request $request, $id) {
        $negotiation = Negotiation::findOrFail($id);
        $negotiation->update($request->all());

        return response()->json($negotiation, 200);
    }

    public function delete(Request $request, $id) {
        $negotiation = Negotiation::findOrFail($id);
        $negotiation->delete();

        return response()->json(null, 204);
    }
}
