<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sponsor;

class SponsorController extends Controller
{
    public function getAll(){
        return Sponsor::with('user')->get();
    }

    public function get($id){
        return Sponsor::with('user')->find($id);
    }

    public function create(Request $request) {
        $sponsor = Sponsor::create($request->all());

        return response()->json($sponsor, 201);
    }

    public function update(Request $request, $id) {
        $sponsor = Sponsor::findOrFail($id);
        $sponsor->update($request->all());

        return response()->json($sponsor, 200);
    }

    public function delete(Request $request, $id) {
        $sponsor = Sponsor::findOrFail($id);
        $sponsor->delete();

        return response()->json(null, 204);
    }
}
