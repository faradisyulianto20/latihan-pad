<?php

namespace App\Http\Controllers;

use App\Models\Pendaftaran;
use Illuminate\Http\Request;

class PendaftaranController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|string|min:2',
            'nim' => 'required|string|min:2',
            'alamat' => 'required|string|min:2',
            'orangtua' => 'required|string|min:2',
            'jenis_kelamin' => 'required|string|min:2',
        ]);

        Pendaftaran::create($validated);

        return redirect()->back()->with("success", "Pendaftaran berhasil dibuat");
    }
}
