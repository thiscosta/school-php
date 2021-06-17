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
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Student::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    
        $faker = \Faker\Factory::create();
        $usersIds = DB::table('users')->pluck('id');

        for ($i = 0; $i < 20; $i++) {
            Student::create([
                'name' => $faker->name,
                'email' => $faker->unique()->safeEmail,
                'course' => 'Sistemas',
                'semester' => '7',
                'zipcode' => $faker->postcode,
                'street' => $faker->streetName,
                'number' => $faker->buildingNumber,
                'neighborhood' => $faker->city,
                'city' => $faker->city,
                'state' => $faker->state,
                'responsible' => $faker->name,
                'user_id' => $faker->unique()->randomElement($usersIds)
            ]);
        }
    }
}
