<?php

namespace App\Http\Controllers;

use App\Models\transaksi;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TransaksiController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index($id)
    {
        $types = DB::select('SELECT transaksis.id, transaksis.document_id, transaksis.supplier_id, transaksis.transaksi_cost, transaksis.transaksi_date, transaksis.transaksi_ref, transaksis.transaksi_id, suppliers.supplier_name, documents.document_file, documents.document_url, user_profiles.nama from transaksis left join suppliers on transaksis.supplier_id = suppliers.supplier_id left join documents on transaksis.document_id = documents.document_id left join app_users on transaksis.modified_by = app_users.user_id left join user_profiles on app_users.user_id = user_profiles.user_id where transaksis.order_id = "'.$id.'"');
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
            'transaksi_ref' => 'required|string|max:255',
            'order_id' => 'required|string|max:255',
            'supplier_id' => 'required|string|max:255',
            'document_id' => 'string|max:255',
            'transaksi_cost' => 'required|numeric|digits_between:1,20',
            'transaksi_date' => 'required|string|max:255',
            'user_id' => 'required|string|max:255',
        ]);

        $asd = date('ym');
        $id = IdGenerator::generate([
            'table' => 'transaksis',
            'field' => 'transaksi_id',
            'length' => 10,
            'prefix' => "TRD$asd",
        ]);

        $data = [
            'transaksi_id' => $id,
            'transaksi_ref' => $request->transaksi_ref,
            'order_id' => $request->order_id,
            'supplier_id' => $request->supplier_id,
            'transaksi_cost' => $request->transaksi_cost,
            'transaksi_date' => $request->transaksi_date,
            'modified_by' => $request->user_id,
        ];

        if ($request->document_id) {
            $data = [
                ...$data,
                'document_id' => $request->document_id,
            ];
        }

        $type = transaksi::create($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Transaksi registered successfully',
            'data' => $type,
        ]);
    }

    public function show($id)
    {
        $type = transaksi::find($id);
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

    public function SearchQuery(Request $request)
    {
        $keyword = $request->keyword;

        $query = DB::select('SELECT * from transaksis where transaksis.transaksi_id like "%'.$keyword.'%"');

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

    public function update(Request $request, $id)
    {
        $request->validate([
            'transaksi_ref' => 'required|string|max:255',
            'order_id' => 'required|string|max:255',
            'supplier_id' => 'required|string|max:255',
            'document_id' => 'string|max:255',
            'transaksi_cost' => 'required|numeric|digits_between:1,20',
            'transaksi_date' => 'required|string|max:255',
            'user_id' => 'required|string|max:255',
        ]);

        $typeZero = transaksi::where('transaksi_id', $id)->get();
        $type = $typeZero[0];
        if ($type) {
            $type->transaksi_id = $type->transaksi_id;
            $type->transaksi_ref = $request->transaksi_ref;
            $type->supplier_id = $request->supplier_id;
            $type->document_id = $request->document_id ? $request->document_id : $type->document_id;
            $type->transaksi_cost = $request->transaksi_cost;
            $type->transaksi_date = $request->transaksi_date;
            $type->modified_by = $request->user_id;
            $type->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Transaksi updated successfully',
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
        $typeZero = transaksi::where('transaksi_id', $id)->get();
        $type = $typeZero[0];
        if ($type) {

            $type->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Transaksi removed successfully',
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }
}
