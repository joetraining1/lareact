<?php

namespace App\Http\Controllers;

use App\Models\supplier;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SupplierController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $types = supplier::all();

        if ($types->count() > 0) {
            return response()->json([
                'status' => 'success',
                'data' => $types,
            ]);
        }

        return response()->json([
            'status' => 'no data.',
            'message' => 'there are no data to be found.',
        ]);
    }

    public function SearchQuery(Request $request)
    {
        $keyword = $request->keyword;

        $query = DB::select('SELECT * from suppliers where suppliers.supplier_name like "%'.$keyword.'%"');

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
            'supplier_name' => 'required|string|max:255',
            'supplier_kontak' => 'required|string|max:255',
            'supplier_alamat' => 'required|string|max:255',
        ]);

        $asd = date('ym');
        $id = IdGenerator::generate([
            'table' => 'suppliers',
            'field' => 'supplier_id',
            'length' => 10,
            'prefix' => "SPL$asd",
        ]);

        $type = supplier::create([
            'supplier_id' => $id,
            'supplier_name' => $request->supplier_name,
            'supplier_kontak' => $request->supplier_kontak,
            'supplier_alamat' => $request->supplier_alamat,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Supplier registered successfully',
            'data' => $type,
        ]);
    }

    public function show($id)
    {
        $type = supplier::find($id);
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
            'supplier_name' => 'required|string|max:255',
            'supplier_kontak' => 'required|string|max:255',
            'supplier_alamat' => 'required|string|max:255',
        ]);

        $typeZero = supplier::where('supplier_id', $id)->get();
        $type = $typeZero[0];
        if ($type) {
            $type->supplier_id = $type->supplier_id;
            $type->supplier_name = $request->supplier_name;
            $type->supplier_kontak = $request->supplier_kontak;
            $type->supplier_alamat = $request->supplier_alamat;
            $type->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Supplier updated successfully',
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
        $typeZero = supplier::where('supplier_id', $id)->get();
        $type = $typeZero[0];
        if ($type) {

            $type->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Supplier removed successfully',
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }
}
