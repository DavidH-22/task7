<!DOCTYPE html>
<html>
    <head>
        <title>Form </title>
        <link rel="icon" type="image/x-icon" href="https://accessibilityspark.com/wp-content/uploads/2021/06/153-1534140_apple-accessibility-icon-aka-vito-white-humanoid-help.jpg.webp">   

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
           
            
            .container {
                border-radius: 5px;
                background-color: #f2f2f2;
                padding: 20px;
            }

            table, td, th {
            border: 1px solid black;
            }

            table {
            width: 100%;
            border-collapse: collapse;
            }
            
        </style>
    </head>
    <body>
        <h3>Formulir </h3>
        
        <!--menghapus data-->
            <div class="destroy">
            @foreach ($formulirs as $formulir)
            <a href="{{ route('formulir.delete', ['id' => $formulir->id]) }}" class="btn btn-warning">Buka Formulir Hapus</a>
                    @csrf
                    @method('DELETE')
                    
                </form>
            @endforeach
            </div>

        <div class="delete">
       
        <table cellpadding="5" cellspacing="0">
            <thead>
                <tr>
                    <th>Nama Depan</th> <!--memberi nama tabel-->
                    <th>Nama Belakang</th>
                    <th>Nomor Telefon</th>
                    <th>Provinsi</th>
                    <th>Pesan</th>
                    <th>Hapus</th>
                    <th>Edit</th>
                </tr>
            </th>
                 <tbody>
                 @foreach ($formulirs as $formulir) <!-- Assuming $records is the data passed from the controller -->
                               <form action="{{ route('formulir.destroy', $formulir->id) }}" method="POST">
                                 @csrf
                                @method('DELETE')
                     <tr>
                            <td>{{ $formulir->namaD}}</td> <!-- mengambil data dari database -->
                            <td>{{ $formulir->namaB }}</td>
                            <td>{{ $formulir->notelp}}</td>
                            <td>{{ $formulir->provinsi }}</td>
                            <td>{{ $formulir->pesan }}</td>
                            <td><button type="delete" onclick="return confirm('Are you sure you want to delete this record?')">Delete</button></td>
                            <td><a href="{{ route('formulir.edit', $formulir->id) }}">edit</a></td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

       
       
           
            
        
    </body>
</html>
