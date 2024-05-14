<?php

namespace App\Http\Controllers;

use App\Models\departemen;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DepartemenController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $types = departemen::all();
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
            'departemen_name' => 'required|string|max:255',
            'lokasi' => 'required|string|max:255',
        ]);

        $asd = date('ym');
        $id = IdGenerator::generate([
            'table' => 'suppliers',
            'field' => 'supplier_id',
            'length' => 10,
            'prefix' => "SPL$asd",
        ]);

        $type = departemen::create([
            'departemen_id' => $id,
            'departemen_name' => $request->departemen_name,
            'lokasi' => $request->lokasi,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Departemen registered successfully',
            'data' => $type,
        ]);
    }

    public function SearchQuery(Request $request)
    {
        $keyword = $request->keyword;

        $query = DB::select("SELECT * from departemens where departemens.departemen_name like %$keyword%");

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

    public function show($id)
    {
        $type = departemen::find($id);
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
            'departemen_name' => 'required|string|max:255',
            'lokasi' => 'required|string|max:255',
        ]);

        $type = departemen::find($id);
        if ($type) {
            $type->departemen_name = $request->departemen_name;
            $type->lokasi = $request->lokasi;
            $type->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Departemen updated successfully',
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
        $type = departemen::find($id);
        if ($type) {

            $type->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Departemen removed successfully',
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }
}
