<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Student;
use DB;

class StudentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Student::truncate();
    
        $faker = \Faker\Factory::create();
        $usersIds = DB::table('users')->pluck('id');

        for ($i = 0; $i < 20; $i++) {
            Student::create([
                'name' => $faker->name,
                'email' => $faker->unique()->safeEmail,
                'course' => 'Sistemas',
                'semester' => '7',
                'responsible' => $faker->name,
                'user_id' => $faker->unique()->randomElement($usersIds)
            ]);
        }
    }
}
