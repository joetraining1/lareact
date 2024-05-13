<?php

namespace App\Http\Controllers;

use App\Models\app_user;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'testApi', 'refresh']]);
    }

    public function testApi(Request $request)
    {
        return response()->json([
            'message' => 'you are connected to this api.',
        ], 200);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials, ['exp' => Carbon::now()->addDays(7)->timestamp()]);

        if (! $token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        $userData = [
            'name' => $user->name,
            'type' => $userType->title,
            'id' => $user->id,
        ];

        return response()->json([
            'status' => 'success',
            'user' => $userData,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ],
        ], 200);
    }

    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = app_user::create([
            'user_id' => $request->department_id,
            'email' => $request->rank_id,
            'password' => $request->deployment_id,
            'type' => $request->bank_id,
        ]);

        $token = Auth::login($user);

        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ],
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ],
        ]);
    }

    public function logout()
    {
        Auth::logout();

        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out.',
        ]);
    }
}
