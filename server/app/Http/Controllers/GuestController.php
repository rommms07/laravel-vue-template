<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GuestController extends Controller
{
    public function authenticate(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
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
