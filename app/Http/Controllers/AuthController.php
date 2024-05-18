<?php

namespace App\Http\Controllers;

use App\Models\app_user;
use App\Models\user_employment;
use App\Models\user_profile;
use Carbon\Carbon;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'logout', 'register', 'testApi', 'refresh', 'PostApi']]);
    }

    public function testApi(Request $request, $id)
    {
        // $dt = Carbon::parse('2012-9-5 23:26:11');

        $request->validate([
            'file_pdf' => 'required|mimes:png,pdf,jpeg,svg,jpg|max:2048',
        ]);

        $file_path = $request->file('file_pdf')->store('files', 'public');
        $file_url = "http://localhost:8000/storage/$file_path";
        $file_name = Str::of($file_path)->remove('files/');

        // $asd = date('ym');
        // $id = IdGenerator::generate([
        //     'table' => 'kategoris',
        //     'field' => 'kategori_id',
        //     'length' => 10,
        //     'prefix' => "KTG$asd",
        // ]);

        // $user = (new AppUserController)->showUserById('haidid');

        $str = 'welcome';

        $obj = [
            'test' => 'test',
        ];

        $obj2 = [
            'obj' => 'obj',
        ];

        $obj = [
            ...$obj,
            ...$obj2,
        ];

        return response()->json([
            'message' => "you are connected to this api. $str",
            // 'feature' => [
            //     'url' => $file_url,
            //     'path' => $file_path,
            //     'name' => $file_name,
            // ],
            'time' => $file_url,
        ], 200);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        auth()->shouldUse('api');

        $credentials = request(['email', 'password']);

        $token = auth()->attempt($credentials);

        if (! $token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized.',
            ], 401);
        }

        $access = $this->respondWithToken($token);

        $user = auth()->user();

        $userData = [
            'user_id' => $user->user_id,
            'type' => $user->type,
        ];

        return response()->json([
            'status' => 'success',
            'user' => $userData,
            'authorization' => $access->original,
        ], 200);
    }

    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email|max:255|unique:app_users',
            'password' => 'required|string|min:6',
        ]);

        $asd = date('ym');
        $id = IdGenerator::generate([
            'table' => 'app_users',
            'field' => 'user_id',
            'length' => 10,
            'prefix' => "USR$asd",
        ]);

        $user = app_user::create([
            'user_id' => $id,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'type' => 0,
        ]);
        $profile = user_profile::create([
            'user_id' => $id,
        ]);

        $employment = user_employment::create([
            'user_id' => $id,
        ]);

        $userData = [
            'user_id' => $user->user_id,
            'type' => $user->type,
        ];

        $credentials = request(['email', 'password']);

        $token = auth()->attempt($credentials);

        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $userData,
            'authorization' => $token,
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

    protected function respondWithToken($token)
    {
        return response()->json([
            'accessToken' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 600,
        ]);
    }
}
