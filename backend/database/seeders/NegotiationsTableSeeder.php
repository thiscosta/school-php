<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Negotiation;
use DB;

class NegotiationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Negotiation::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    
        $faker = \Faker\Factory::create();
        $studentsIds = DB::table('students')->pluck('id');
        $debtsIds = DB::table('debts')->pluck('id');

        for ($i = 0; $i < 5; $i++) {
            Negotiation::create([
                'proposal' => $faker->randomDigit,
                'accepted' => $faker->boolean,
                'finished' => $faker->boolean,
                'student_id' => $faker->randomElement($studentsIds),
                'debt_id' => $faker->randomElement($debtsIds)
            ]);
        }
    }
}
