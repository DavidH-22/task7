<?php
Route::get('/', function () {
    return view('index'); 
});

use App\Http\Controllers\FormulirController;
Route::get('/', [FormulirController::class, 'create'])->name('formulir.create');



//mendapatkan data dari server untuk di edit
Route::get('formulir/delete/{id}', [FormulirController::class, 'formdestroy'])->name('formulir.delete');
//mendapatkan data dari server untuk di edit
Route::get('formulir/{id}', [FormulirController::class, 'edit'])->name('formulir.edit');
//menyimpan data saat submit
Route::post('formulir', [FormulirController::class, 'store'])->name('formulir.save');
//melakukan delete pada database
Route::delete('formulir/delete/{id}', [FormulirController::class, 'destroy'])->name('formulir.destroy');
//melakkukan update pada database
route::patch('formulir/{id}',[FormulirController::class,'update'])->name('formulir.update');



