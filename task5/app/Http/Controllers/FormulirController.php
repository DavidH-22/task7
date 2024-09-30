<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Formulir;


class FormulirController extends Controller
{
    //membuat opsi provinsi dan membuat 
    public function create()
    {
        $provinsi = [
            'Jawa Tengah' => 'Jawa Tengah',
            'Jawa Timur ' => 'Jawa Timur',
            'Jawa Barat' => 'Jawa Barat',
            // Add more provinces as needed
        ];
        // Cari data berdasarkan ID
       
        $formulirs = Formulir::all();
        return view('index', compact('provinsi','formulirs'));
    }
    
    //menyimpan data yang di submit ke dalam database
    public function store()
    {
            Formulir::create([
                'namaD' => request('namaD'),
                'namaB' => request('namaB'),
                'notelp' => request('notelp'),
                'provinsi' => request('provinsi'),
                'pesan' => request('pesan'),
                ]);
                return redirect()->back()->with('success', 'Data successfully saved');
        
       
        
    }

    //mengambil data untuk di hapus/koneksi ke formulir delete
    public function formdestroy($id)
    {
        
        $formulirs = Formulir::find($id);
        return view('formulir-delete', compact('formulirs'));
    }

    //melakukan hapus data
    public function destroy($id){
        $formulir= Formulir::find($id);
        $formulir->delete();

        return redirect()->back()->with('success', 'Data berhasil dihapus');
    }

   //mengambil data untuk di edit/koneksi ke formulir edit
    public function edit($id)
    {
        
        $record = Formulir::find($id);
        
       return view('formulir-edit', compact('record'));
    }

        //melakukan update
    public function update( $id, Request $request)
    {

        // Validasi data jika diperlukan
        $request->validate([
            'namaD' => 'required|string|max:255',
            'namaB' => 'required|string|max:255',
            'notelp' => 'required|string|max:15',
            'provinsi' => 'required|string',
            'pesan' => 'nullable|string'
        ]);
        // Temukan data yang akan di-update
        $record = Formulir::find($id);
    
        // Update data
        $record->namaD = $request->namaD;
        $record->namaB = $request->namaB;
        $record->notelp = $request->notelp;
        $record->provinsi = $request->provinsi;
        $record->pesan = $request->pesan;
        
        // Simpan perubahan
        $record->save();
    
        // Redirect ke halaman yang diinginkan, misalnya kembali ke daftar data
        return redirect()->route('formulir.create')->with('success', 'Data berhasil diupdate');
    }
}



