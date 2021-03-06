<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(StudentsTableSeeder::class);
        $this->call(SchoolsTableSeeder::class);
        $this->call(SponsorsTableSeeder::class);
        $this->call(DebtsTableSeeder::class);
        $this->call(NegotiationsTableSeeder::class);
    }
}
