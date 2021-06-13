<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Sponsor;
use DB;

class SponsorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Sponsor::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    
        $faker = \Faker\Factory::create();
        $usersIds = DB::table('users')->pluck('id');

        for ($i = 0; $i < 20; $i++) {
            Sponsor::create([
                'name' => $faker->name,
                'user_id' => $faker->unique()->randomElement($usersIds)
            ]);
        }
    }
}
