<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\User;

class GuestController extends Controller {

    public function store(Request $request) {
        $request->validate([
            'name' => 'required|min:8|max:64',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:6'
        ]);

        // Create
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        return $user;
    }

    public function authenticate(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);


        if (Auth::attempt($request->only(['email', 'password']))) {
            $request->session()->regenerate();
            return $request->user();
        }

        return response()->json([
            'message' => 'Invalid provided credentials.'
        ], 401);
    }
}
