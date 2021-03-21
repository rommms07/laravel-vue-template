<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller {

    public function logout(Request $request) {
        $request->session()->invalidate();

        return response()->json([ 'message' => 'Invalidated the user session.' ]);
    }

}
