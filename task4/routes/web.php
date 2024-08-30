<?php


use App\Http\Controllers\FormulirController;
//mendapatkan data dari database untuk memasukan data
Route::get('formulir', [FormulirController::class, 'create'])->name('formulir.create');
//mendapatkan data dari server untuk di edit
Route::get('formulir/delete/{id}', [FormulirController::class, 'formdestroy'])->name('formulir.delete');
//mendapatkan data dari server untuk di edit
Route::get('formulir/{id}', [FormulirController::class, 'edit'])->name('formulir.edit');
//menyimpan data saat submit
Route::post('formulir', [FormulirController::class, 'store']);
//melakukan delete pada database
Route::delete('formulir/delete/{id}', [FormulirController::class, 'destroy'])->name('formulir.destroy');
//melakkukan update pada database
route::patch('formulir/{id}',[FormulirController::class,'update'])->name('formulir.update');



