<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\User;
use App\Models\Formulir;
use Database\Factories\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FormulirControllerTest extends TestCase
{

    use withFaker;


public function test_stores_data()
{
    //TODO: code inside here --Created by Kiddy
    
    //Membuat objek user yang otomatis menambahkannya ke database.
    $user = User::factory()->create();

    //Membuat objek category yang otomatis menambahkannya ke database.
    $category = Formulir::factory()->create();

    //Acting as berfungsi sebagai autentikasi, jika kita menghilangkannya maka akan error.
    $provinces = ['Jawa Tengah', 'Jawa Timur', 'Jawa Barat'];

    //$response = $this->actingAs($user);
    //Hit post ke method store, fungsinya ya akan lari ke fungsi store.
    
    
    $response = $this->actingAs($user)->post(route('formulir.save'), [

        //isi parameter sesuai kebutuhan request
        'namaD' => $this->faker->words(3, true),
        'namaB' => $this->faker->words(3, true),
        'notelp'  =>   fake()->unique()->numerify('628##########'),
        'provinsi'=> $this->faker->randomElement($provinces),
        'pesan' => $this->faker->words(3, true),
        'created_at' => $this->faker->words(3, true),

    ]);
    //dd($response);
    //Tuntutan status 302, yang berarti redirect status code.
    $response->assertStatus(302);

    //Tuntutan bahwa abis melakukan POST URL akan dialihkan ke URL product atau routenya adalah product.index
    $response->assertRedirect(route('formulir.create'));
}
}
