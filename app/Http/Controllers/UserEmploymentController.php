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
        $types = DB::select('SELECT e.id, e.user_id, p.nama, e.departemen_id, d.departemen_name, d.lokasi, e.posisi, e.jabatan from user_employments e left join app_users a on e.user_id = a.user_id left join user_profiles p on a.user_id = p.user_id left join departemens d on e.departemen_id = d.departemen_id');
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

        if ($type) {
            return response()->json([
                'status' => 'success',
                'data' => $type[0],
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
            'departemen_id' => 'required|string|max:255',
            'jabatan' => 'required|string|max:255',
            'posisi' => 'required|string|max:255',
        ]);

        $type = user_employment::where('user_id', $id)->get();
        if ($type) {
            $type[0]->user_id = $type[0]->user_id;
            $type[0]->departemen_id = $request->departemen_id;
            $type[0]->jabatan = $request->jabatan;
            $type[0]->posisi = $request->posisi;
            $type[0]->save();

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
        $typeZero = user_employment::where('user_id', $id)->get();
        $type = $typeZero[0];
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
