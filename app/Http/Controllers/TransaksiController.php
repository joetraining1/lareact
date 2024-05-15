<?php

namespace App\Http\Controllers;

use App\Models\transaksi;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;

class TransaksiController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $types = transaksi::all();
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
            'transaksi_ref' => 'required|string|max:255',
            'order_id' => 'required|string|max:255',
            'supplier_id' => 'required|string|max:255',
            'document_id' => 'string|max:255',
            'transaksi_cost' => 'required|integer|max:20',
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

    public function update(Request $request, $id)
    {
        $request->validate([
            'transaksi_ref' => 'required|string|max:255',
            'order_id' => 'required|string|max:255',
            'supplier_id' => 'required|string|max:255',
            'document_id' => 'string|max:255',
            'transaksi_cost' => 'required|integer|max:20',
            'transaksi_date' => 'required|string|max:255',
            'user_id' => 'required|string|max:255',
        ]);

        $type = transaksi::find($id);
        if ($type) {
            $type->transaksi_id = $type->transaksi_id;
            $type->transaksi_ref = $request->transaksi_ref;
            $type->supplier_id = $request->supplier_id;
            $type->document_id = $request->document_id ? $request->document_id : $type->document_id;
            $type->transaksi_cost = $request->transaksi_cost;
            $type->transaksi_date = $request->transaksi_date;
            $type->user_id = $request->description;
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
        $type = transaksi::find($id);
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
