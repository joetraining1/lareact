<?php

namespace App\Http\Controllers;

use App\Models\user_profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $types = user_profile::all();
        if ($types->count() > 0) {
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

    public function SearchQuery(Request $request)
    {
        $keyword = $request->keyword;

        $query = DB::select('SELECT * from user_profiles where user_profiles.nama like "%'.$keyword.'%"');

        if ($query) {
            return response()->json([
                'status' => 'success',
                'data' => $query,
            ]);
        }

        return response()->json([
            'status' => 'fail',
            'message' => 'There are no data to be found.',
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|string|max:255',
            'nama' => 'required|string|max:255',
            'kontak' => 'required|string|max:255',
            'alamat' => 'required|string|max:255',
        ]);

        $type = user_profile::create([
            'user_id' => $request->user_id,
            'nama' => $request->nama,
            'kontak' => $request->kontak,
            'alamat' => $request->alamat,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'User profile registered successfully',
            'type' => $type,
        ]);
    }

    public function show($id)
    {
        $type = user_profile::where('user_id', $id);

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

    public function update(Request $request, $id)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'kontak' => 'required|string|max:255',
            'alamat' => 'required|string|max:255',
        ]);

        // $type = DB::table('user_profiles')->where('user_id', '=', $id)->get();

        // $type = user_profile::find($id);
        $type = user_profile::where('user_id', $id)->get();
        if ($type) {
            $type[0]->user_id = $type[0]->user_id;
            $type[0]->nama = $request->nama;
            $type[0]->kontak = $request->kontak;
            $type[0]->alamat = $request->alamat;
            $type[0]->save();

            return response()->json([
                'status' => 'success',
                'message' => 'User profile updated successfully',
                'data' => $type[0],
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
        $type = user_profile::find($id);
        if ($type) {

            $type->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'User profile removed successfully',
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }
}
