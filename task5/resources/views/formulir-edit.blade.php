<html>
    <style>
         body {
                font-family: Arial, Helvetica, sans-serif;
                box-sizing: border-box;
            }
            input[type=text], select, textarea {
                width: 100%;
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
                margin-top: 6px;
                margin-bottom: 16px;
                resize: vertical;
            }
            input[type=submit] {
                background-color: #04AA6D;
                color: white;
                padding: 12px 20px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
            input[type=submit]:hover {
                background-color: #45a049;
            }

            .update {
                border-radius: 5px;
                background-color: #f2f2f2;
                padding: 20px;
            }
        </style>
    <body>
        <div class="update">
            <form action="{{ route('formulir.update', $record->id) }}" method="POST">
                @csrf
                @method("PATCH")
                <label for="nama_depan">Nama Depan</label>
                <input type="text" id="nama_depan" name="namaD" value="{{ $record->namaD }}" required><br>

                <label for="nama_belakang">Nama Belakang</label>
                <input type="text" id="nama_belakang" name="namaB" value="{{ $record->namaB }}" required><br>

                <label for="nomor_telefon">Nomor Telefon</label>
                <input type="text" id="nomor_telefon" name="notelp" value="{{ $record->notelp}}" required><br>

                <label for="provinsi">Provinsi</label>
                <input type="text" id="provinsi" name="provinsi" value="{{ $record->provinsi }}" required><br>

                <label for="pesan">Pesan</label>
                <textarea id="pesan" name="pesan" required>{{ $record->pesan }}</textarea><br>

                <input type="submit" value="Update">
            </form>
        </div>

        

    </body>

</html>
