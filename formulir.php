

<?php 
    
        if($_POST['submit']=="submit"){
            $namaD = $_POST["namaD"];
            $namaB = $_POST["namaB"];
            $notelp = $_POST["notelp"];
            $Provinsi = $_POST["Provinsi"];
            $subject = $_POST["subject"];
        
        }
    
        else {
            $cek=mysql_num_rows(mysql_query("select Nomor_Telefon from data_pengunjung where Nomor_telefon='$_POST'"))}
            if($cek> 0){
                ?>
                <script Language="Java Script"> 
                alert('Nomor telefon sudah dipakai')
                </script>
                <?php
            }

            $input ="INSERT INTO data_pengunjung(Nama_Depan,Nama_Belakang,Nomor_telefon,Provinsi,Pesan)";
            $query_input=mysql_query($input);

            if($query_input){
                ?>
            <script language="Java Script">
            alert('input berhasil')
            <script>
            <?php
            }
            else{
                echo"input gagal";
            }

?>
    
            



