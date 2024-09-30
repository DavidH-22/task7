<html>
    <style>
            table, td, th {
            border: 1px solid black;
            }

            table {
            width: 100%;
            border-collapse: collapse;
            }
    </style>
    <body>
    <div class="delete">
       
       <table cellpadding="5" cellspacing="0">
           <thead>
               <tr>
                   <th>Nama Depan</th>
                   <th>Nama Belakang</th>
                   <th>Nomor Telefon</th>
                   <th>Provinsi</th>
                   <th>Pesan</th>
                   <th>Hapus</th>
                   <th>Edit</th>
               </tr>
           </th>
                <tbody>
                @foreach ($formulirs as $formulir) 
                               <form action="{{ route('formulir.destroy', $formulir->id) }}" method="post">
                                @csrf
                               @method('DELETE')
                    <tr>
                           <td>{{ $formulir->namaD}}</td> 
                           <td>{{ $formulir->namaB }}</td>
                           <td>{{ $formulir->notelp}}</td>
                           <td>{{ $formulir->provinsi }}</td>
                           <td>{{ $formulir->pesan }}</td>
                           <td><button type="submit" onclick="return confirm('Apakah anda yakin untuk menghapus?')">Delete</button></td>
                           <td><a href="{{ route('formulir.edit', $formulir->id) }}">edit</a></td>
                       </tr>
                       
                   @endforeach
               </tbody>
           </table>
       </div>
    </body>
</html>