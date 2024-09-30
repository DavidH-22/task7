<?php

namespace Database\Factories;

use App\Models\Formulir;
use Illuminate\Database\Eloquent\Factories\Factory;

class FormulirFactory extends Factory
{
    protected $model = Formulir::class;

    public function definition()
    {
        return [
            'namaD' => $this->faker->name(),
            'namaB' => $this->faker->name(),
            'notelp' => 112233,
            'provinsi' => $this->faker->randomElement(['Jawa Tengah', 'Jawa Timur', 'Jawa Barat']),
            'pesan' => $this->faker->sentence(),
        ];
    }
}