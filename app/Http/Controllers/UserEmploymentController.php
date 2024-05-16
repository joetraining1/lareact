<?php

namespace App\Http\Controllers;

use App\Models\user_employment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserEmploymentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $types = user_employment::all();
        if ($types->count() > 0) {
            return response()->json([
                'status' => 'success',
                'types' => $types,
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
            'user_id' => 'required|string|max:255',
            'departemen_id' => 'required|string|max:255',
            'jabatan' => 'required|string|max:255',
            'posisi' => 'required|string|max:255',
        ]);

        $type = user_employment::create([
            'user_id' => $request->user_id,
            'departemen_id' => $request->departemen_id,
            'jabatan' => $request->jabatan,
            'posisi' => $request->posisi,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'User employment registered successfully',
            'data' => $type,
        ]);
    }

    public function show($id)
    {
        $type = user_employment::where('user_id', $id);
        $user = DB::table('app_users')
            ->where('user_id', '=', $id)
            ->get();

        if ($type) {
            return response()->json([
                'status' => 'success',
                'data' => $type,
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
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
        ]);

        $type = user_employment::find($id);
        if ($type) {
            $type->user_id = $type->user_id;
            $type->departemen_id = $type->departemen_id;
            $type->jabatan = $request->jabatan;
            $type->posisi = $request->posisi;
            $type->save();

            return response()->json([
                'status' => 'success',
                'message' => 'User employment updated successfully',
                'data' => $type,
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
        $type = user_employment::find($id);
        if ($type) {

            $type->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'User type removed successfully',
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }
}
