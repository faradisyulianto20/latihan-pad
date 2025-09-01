<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pendaftaran extends Model
{
    protected $fillable = [
        'username',
        'nim',
        'alamat',
        'orangtua',
        'jenis_kelamin'
    ];
}
