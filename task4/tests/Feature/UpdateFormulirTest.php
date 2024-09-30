<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Formulir;

class UpdateFormulirTest extends TestCase
{
    use RefreshDatabase;

    
    public function test_update_formulir_data()
    {
        // Create a record in the database
        $formulir = Formulir::create([
            'namaD' => 'John',
            'namaB' => 'Doe',
            'notelp' => '1234567890',
            'provinsi' => 'Jawa Tengah',
            'pesan' => 'Hello World!',
        ]);

        // Prepare updated data for submission
        $updatedData = [
            'namaD' => 'Jane',
            'namaB' => 'Smith',
            'notelp' => '0987654321',
            'provinsi' => 'Jawa Barat',
            'pesan' => 'Updated Message!',
        ];

        // Send PATCH request to update the data
        $response = $this->patch(route('formulir.update', $formulir->id), $updatedData);

        // Assert the response status is a redirect (successful update)
        $response->assertRedirect();

        // Assert the data is updated in the database
        $this->assertDatabaseHas('formulir', [
            'id' => $formulir->id,
            'namaD' => 'Jane',
            'namaB' => 'Smith',
            'notelp' => '0987654321',
            'provinsi' => 'Jawa Barat',
            'pesan' => 'Updated Message!',
        ]);
    }
}
