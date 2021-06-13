<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\School;
use DB;

class SchoolsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        School::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    
        $faker = \Faker\Factory::create();
        $usersIds = DB::table('users')->pluck('id');

        for ($i = 0; $i < 5; $i++) {
            School::create([
                'name' => $faker->name,
                'user_id' => $faker->unique()->randomElement($usersIds)
            ]);
        }
    }
}
