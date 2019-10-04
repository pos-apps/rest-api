# Rest-API

<h2>Cara pakai POS API</h2>
<ul>
    <li>Harus sudah terinstall node js</li>
    <li>buka terminal, lalu arahkan ke folder project</li>
    <li>lalu ketik "nodemon app.js"</li>
    <li>silahkan jalankan postman untuk cek API nya</li>
</ul>

<h2>Field untuk registrasi</h2>
<ul>
    <li>nama_lengkap (varchar 100)</li>
    <li>nik (varchar 16)</li>
    <li>tempat_lahir (varchar 100)</li>
    <li>tgl_lahir (datetime)</li>
    <li>jk (int 1)</li>
    <li>gol_darah (varchar 3)</li>
    <li>alamat (varchar 100)</li>
    <li>agama (int 1)</li>
    <li>status_perkawinan (int 1)</li>
    <li>pengalaman_kerja (text)</li>
    <li>kewarganegaraan varchar(100)</li>
    <li>create_date (datetime)</li>
    <li>update_date (datetime)</li>
    <li>type_pengguna (int 1)</li>
    <li>parent (int 11)</li>
    <li>username (varchar 100)</li>
    <li>password (varchar 255)</li>
    <li>passwordConfirm</li>
</ul>

<h2>Field untuk login</h2>
<ul>
    <li>username</li>
    <li>password</li>
</ul>

<h2>Cek API menggunakan app postman</h2>
<ul>
    <li>Registrasi (POST) : <a href="http://localhost:3000/authentication/register">http://localhost:3000/authentication/register</a></li>
    <li>Login (POST) : <a href="http://localhost:3000/authentication/login">http://localhost:3000/authentication/login</a></li>
    <li>Cek autentikasi dengan token (GET) : <a href="http://localhost:3000/authentication/cek-auth">http://localhost:3000/authentication/cek-auth</a></li>
    <li>Logout (POST) : <a href="http://localhost:3000/authentication/logout">http://localhost:3000/authentication/logout</a></li>
    
</ul>

<h2>Registrasi</h2>
<p>method yang digunakan POST, lalu pada bagian body pilih bagian x-www-form-urlencoded. lalu masukkan field sesuai deskripsi registrasi</p>

![register](https://user-images.githubusercontent.com/43155964/65077431-1ecc4900-d9c5-11e9-8dbf-6d2474cf7a2b.png)
![register 2](https://user-images.githubusercontent.com/43155964/65078973-67d1cc80-d9c8-11e9-97cc-db5af62ed910.png)


<h2>Login</h2>
<p>method yang digunakan POST, lalu pada bagian body pilih bagian x-www-form-urlencoded. lalu masukkan field sesuai deskripsi login</p>

![login](https://user-images.githubusercontent.com/43155964/65077770-d7928800-d9c5-11e9-84dc-ba600a064a9e.png)

<h2>Cek autentikasi dengan token</h2>
<p>method yang digunakan GET. sebelumnya harus login terlebih dahulu untuk get token, lalu ke bagian header dan tambahkan key "Authorization" dengan value "Bearer [token]"</p>

![cek auth](https://user-images.githubusercontent.com/43155964/65078040-6901fa00-d9c6-11e9-86d8-f2a0db0aa0a0.png)

<h2>Logout</h2>
<p>method yang digunakan POST. sebelumnya harus login terlebih dahulu untuk dapatkan tokennya, lalu ke bagian header dan tambahkan key "Authorization" dengan value "Bearer [token]". untuk responnya, jika status true maka logout berhasil. jika token invalid, akan muncul response forbidden.</p>

![Logout](https://user-images.githubusercontent.com/43155964/66215563-01e68400-e6ee-11e9-9e92-775acfcea5f3.png)
