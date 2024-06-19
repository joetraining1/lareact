<?php

namespace App\Http\Controllers;

use App\Models\shipment;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShipmentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index($id)
    {
        $types = DB::select('SELECT shipments.order_id, shipments.id, shipments.transaksi_id, shipments.shipment_id, shipments.shipment_ref, shipments.shipment_cost, shipments.shipment_start, shipments.shipment_estimated, shipments.document_id, shipments.modified_by, documents.document_url, documents.document_file, user_profiles.nama from shipments left join documents on shipments.document_id = documents.document_id left join app_users on shipments.modified_by = app_users.user_id left join user_profiles on app_users.user_id = user_profiles.user_id where shipments.order_id = "'.$id.'"');
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
            'order_id' => 'required|string|max:255',
            'transaksi_id' => 'required|string|max:255',
            'shipment_ref' => 'required|string|max:255',
            'document_id' => 'string|max:255',
            'shipment_cost' => 'required|numeric|digits_between:1,20',
            'shipment_start' => 'required|string|max:255',
            'shipment_estimated' => 'required|string|max:255',
            'user_id' => 'required|string|max:255',
        ]);

        $asd = date('ym');
        $id = IdGenerator::generate([
            'table' => 'shipments',
            'field' => 'shipment_id',
            'length' => 10,
            'prefix' => "SHP$asd",
        ]);

        $data = [
            'shipment_id' => $id,
            'order_id' => $request->order_id,
            'transaksi_id' => $request->transaksi_id,
            'shipment_ref' => $request->shipment_ref,
            'shipment_cost' => $request->shipment_cost,
            'shipment_start' => $request->shipment_start,
            'shipment_estimated' => $request->shipment_estimated,
            'modified_by' => $request->user_id,
        ];

        if ($request->document_id) {
            $data = [
                ...$data,
                'document_id' => $request->document_id,
            ];
        }

        $type = shipment::create($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Shipment registered successfully',
            'data' => $type,
        ]);
    }

    public function show($id)
    {
        $type = shipment::find($id);
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
            'order_id' => 'required|string|max:255',
            'transaksi_id' => 'required|string|max:255',
            'shipment_ref' => 'required|string|max:255',
            'document_id' => 'string|max:255',
            'shipment_cost' => 'required|numeric|digits_between:1,20',
            'shipment_start' => 'required|string|max:255',
            'shipment_estimated' => 'required|string|max:255',
            'user_id' => 'required|string|max:255',
        ]);

        $typeZero = shipment::where('shipment_id', $id)->get();
        $type = $typeZero[0];
        if ($type) {
            $type->shipment_id = $type->shipment_id;
            $type->shipment_ref = $request->shipment_ref;
            $type->order_id = $request->order_id;
            $type->transaksi_id = $request->transaksi_id;
            $type->document_id = $request->document_id ? $request->document_id : $type->document_id;
            $type->shipment_cost = $request->shipment_cost;
            $type->shipment_start = $request->shipment_start;
            $type->shipment_estimated = $request->shipment_estimated;
            $type->modified_by = $request->user_id;
            $type->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Shipment updated successfully',
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
        $typeZero = shipment::where('shipment_id', $id)->get();
        $type = $typeZero[0];
        if ($type) {

            $type->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Shipment removed successfully',
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }
}
