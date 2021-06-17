<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class StudentController extends Controller
{
    public function getAll(){
        $user = Auth::user();
        
        if($user->profile == 'Admin') {
            return Student::with('user')->get();
        }else{
            $students = Student::with('user')
            ->select('students.*')
            ->join('users', 'users.id', '=', 'students.user_id')
            ->where('students.user_id', '=', $user->id)
            ->get();
            return $students;
        }
    }

    public function get($id){
        $user = Auth::user();
        
        if($user->profile == 'Admin') {
            return Student::with('user')->find($id);
        }else{
            $students = Student::with('user')
            ->select('students.*')
            ->join('users', 'users.id', '=', 'students.user_id')
            ->where('students.user_id', '=', $user->id)
            ->where('students.id', '=', $id)
            ->get();
            return $students;
        }
    }

    public function create(Request $request) {
        $responseViaCep = Http::get('viacep.com.br/ws/'.$request->zipcode.'/json/');
        
        if($responseViaCep->ok()) {
            $request['zipcode'] = $responseViaCep->json()['cep'];
            $request['street'] = $responseViaCep->json()['logradouro'];
            $request['neighborhood'] = $responseViaCep->json()['bairro'];
            $request['city'] = $responseViaCep->json()['localidade'];
            $request['state'] = $responseViaCep->json()['uf'];
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'profile' => 'User',
            'api_token' => '1'
        ]);
        
        $request['user_id'] = $user->id;
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
