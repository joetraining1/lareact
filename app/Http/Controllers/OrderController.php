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
        $types = DB::select("SELECT o.id, o.departemen_id, d.departemen_name, o.order_id, o.purpose, o.expense, o.requester, (SELECT user_profiles.nama from user_profiles WHERE user_profiles.user_id = o.requester) as 'proposer', o.modified_by, (SELECT user_profiles.nama from user_profiles WHERE user_profiles.user_id = o.modified_by) as 'modifier' from orders o left join departemens d on o.departemen_id = d.departemen_id");

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
            'departemen_id' => 'required|string|max:255',
            'requester' => 'required|string|max:255',
            'purpose' => 'required|string|max:255',
            'expense' => 'required|numeric|digits_between:1,20',
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

        $type = order::create($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Order registered successfully',
            'data' => $type,
        ]);
    }

    public function show($id)
    {
        $type = DB::select('SELECT o.id, o.order_id, o.departemen_id, o.requester, o.modified_by, o.expense, o.purpose, d.departemen_name, (SELECT user_profiles.nama from user_profiles WHERE user_profiles.user_id = o.requester) as "proposer" from orders o left join departemens d on o.departemen_id = d.departemen_id where o.order_id = "'.$id.'"');
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
            'requester' => 'required|string|max:255',
            'purpose' => 'required|string|max:255',
            'expense' => 'required|numeric|digits_between:1,20',
            'user_id' => 'required|string|max:255',
        ]);

        $typeZero = order::where('order_id', $id)->get();
        $type = $typeZero[0];
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
        $type = order::where('order_id', $id)->get();
        if ($type) {

            $type[0]->delete();

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
