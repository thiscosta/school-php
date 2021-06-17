<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Debt;
use DB;

class DebtsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Debt::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    
        $faker = \Faker\Factory::create();
        $schoolsIds = DB::table('schools')->pluck('id');
        
        $studentId = DB::table('students')
        ->select('students.*')
        ->join('users', 'users.id', '=', 'students.user_id')
        ->where('users.email', '=', 'user')
        ->pluck('id')
        ->first();

        for ($i = 0; $i < 10; $i++) {
            Debt::create([
                'course' => $faker->company,
                'semester' => $faker->numberBetween(1, 12),
                'month' => $faker->numberBetween(1, 12),
                'value' => $faker->randomDigit,
                'status' => $faker->randomElement(['Ativo', 'Pendente']),
                'student_id' => $studentId,
                'school_id' => $faker->randomElement($schoolsIds)
            ]);
        }
    }
}
