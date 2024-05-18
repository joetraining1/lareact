<?php

namespace App\Http\Controllers;

use App\Models\app_user;
use App\Models\user_employment;
use App\Models\user_profile;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AppUserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $types = DB::select('SELECT app_users.id, app_users.user_id, app_users.email, user_profiles.nama, user_profiles.kontak, user_profiles.alamat from app_users left join user_profiles on app_users.user_id = user_profiles.user_id order by app_users.user_id asc');
        if ($types) {
            return response()->json([
                'status' => 'success',
                'data' => $types,
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|string|max:255',
            'password' => 'required|string|max:255',
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

        return response()->json([
            'status' => 'success',
            'message' => 'User registered successfully',
            'data' => $user,
        ]);
    }

    public function show($id)
    {
        $type = app_user::find($id);
        if ($type) {
            return response()->json([
                'status' => 'success',
                'type' => $type,
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }

    public function showProfile($id)
    {
        // $profile = DB::select('select * from user_profiles where user_profiles.user_id = "'.$id.'"');
        $profile = DB::table('user_profiles')->where('user_id', '=', $id)->get();
        $employment = DB::table('user_employments')->where('user_id', '=', $id)->get();

        if ($profile && $employment) {
            return response()->json([
                'status' => 'success',
                'profile' => $profile,
                'employment' => $employment,
            ]);
        }

        return response()->json([
            'status' => 'no data.',
            'message' => 'there are no data to be found.',
        ]);
    }

    public function showUserById($id)
    {
        $type = app_user::find($id);
        if ($type) {
            return $type;
        }

        return [
            'status' => 'no data.',
            'message' => "there are no $id data to be found.",
        ];
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
        ]);

        $type = app_user::find($id);
        if ($type) {
            $type->title = $request->title;
            $type->description = $request->description;
            $type->save();

            return response()->json([
                'status' => 'success',
                'message' => 'User type updated successfully',
                'type' => $type,
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }

    public function destroy($id)
    {
        $type = app_user::find($id);
        if ($type) {
            $return = [
                'id' => $type->id,
                'title' => $type->title,
                'description' => $type->description,
            ];
            $type->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'User type removed successfully',
                'type' => $return,
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }
}
