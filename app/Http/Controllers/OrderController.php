<?php

namespace App\Http\Controllers;

use App\Models\order;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $types = DB::select('SELECT *, departemens.departemen_name, documents.document_url, user_profiles.nama from orders left join departemens on orders.departemen_id = departemens.departemen_id left join documents on orders.document_id = documents.document_id left join app_users on orders.requester = app_users.user_id left join user_profiles on app_users.user_id = user_profiles.user_id');

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
            'departmen_id' => 'required|string|max:255',
            'document_id' => 'string|max:255',
            'requester' => 'required|string|max:255',
            'purpose' => 'required|string|max:255',
            'expense' => 'required|integer|max:20',
            'user_id' => 'required|string|max:255',
        ]);

        $asd = date('ym');
        $id = IdGenerator::generate([
            'table' => 'orders',
            'field' => 'order_id',
            'length' => 10,
            'prefix' => "ORD$asd",
        ]);

        $data = [
            'order_id' => $id,
            'departemen_id' => $request->departemen_id,
            'requester' => $request->requester,
            'purpose' => $request->purpose,
            'expense' => $request->expense,
            'modified_by' => $request->user_id,
        ];

        if ($request->document_id) {
            $data = [
                ...$data,
                'document_id' => $request->document_id,
            ];
        }

        $type = order::create($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Order registered successfully',
            'data' => $type,
        ]);
    }

    public function show($id)
    {
        $type = order::find($id);
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
            'departmen_id' => 'required|string|max:255',
            'document_id' => 'string|max:255',
            'requester' => 'required|string|max:255',
            'purpose' => 'required|string|max:255',
            'expense' => 'required|integer|max:20',
            'user_id' => 'required|string|max:255',
        ]);

        $type = order::find($id);
        if ($type) {
            $type->order_id = $type->order_id;
            $type->departemen_id = $request->departemen_id;
            $type->document_id = $request->document_id ? $request->document_id : $type->document_id;
            $type->requester = $request->requester;
            $type->purpose = $request->purpose;
            $type->expense = $request->expense;
            $type->modified_by = $request->user_id;
            $type->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Order updated successfully',
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
        $type = order::find($id);
        if ($type) {

            $type->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Order removed successfully',
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }
}
