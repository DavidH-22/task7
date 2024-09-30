<?php

namespace Tests\Feature\Http\Controllers;


use App\Models\Formulir;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class FormulirControllerTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_delete(): void
    {   
         // Create a record in the database
        $formulir = Formulir::create([
            'namaD' => 'John',
            'namaB' => 'Doe',
            'notelp' => '1234567890',
            'provinsi' => 'Jawa Tengah',
            'pesan' => 'Hello World!',
        ]);

           // Send DELETE request
           $response = $this->delete(route('formulir.delete', $formulir->id));

         // Assert that the response is a redirect
            $response->assertRedirect();  // Redirect should occur after delete

        // Optionally, assert the status code
         $response->assertStatus(302);  // If redirecting

        // Assert the database no longer contains the deleted record
        $this->assertDatabaseMissing('formulir', [
        'id' => $formulir->id,
        'namaD' => 'John',
        'namaB' => 'Doe',
    ]);
    }
}
