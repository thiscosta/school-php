<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        User::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    
        $faker = \Faker\Factory::create();

        User::create([
            'name' => $faker->name,
            'email' => 'admin',
            'password' => bcrypt('admin'),
            'profile' => 'Admin',
            'api_token' => ''
        ]);

        User::create([
            'name' => $faker->name,
            'email' => 'user',
            'password' => bcrypt('user'),
            'profile' => 'User',
            'api_token' => ''
        ]);

        for ($i = 0; $i < 18; $i++) {
            User::create([
                'name' => $faker->name,
                'email' => $faker->unique()->safeEmail,
                'password' => bcrypt($faker->password),
                'profile' => 'User',
                'api_token' => ''
            ]);
        }
    }
}
