<?php

namespace App\Http\Controllers;

use App\Models\app_user;
use Carbon\Carbon;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'testApi', 'refresh', 'PostApi']]);
    }

    public function testApi(Request $request, $id)
    {
        // $dt = Carbon::parse('2012-9-5 23:26:11');

        // $asd = date('ym');
        // $id = IdGenerator::generate([
        //     'table' => 'kategoris',
        //     'field' => 'kategori_id',
        //     'length' => 10,
        //     'prefix' => "KTG$asd",
        // ]);

        // $user = (new AppUserController)->showUserById('haidid');

        $str = 'welcome';

        return response()->json([
            'message' => "you are connected to this api. $str",
            // 'feature' => $user,
            'time' => $id,
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
                'message' => 'Unauthorized.',
            ], 401);
        }

        $user = Auth::user();
        $userProfile = '';

        $userData = [
            'type' => $user->type,
            'user_id' => $user->user_id,
        ];

        return response()->json([
            'status' => 'success',
            'user' => $userData,
            'authorization' => [
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
