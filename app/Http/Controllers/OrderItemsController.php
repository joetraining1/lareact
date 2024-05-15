<?php

namespace App\Http\Controllers;

use App\Models\order_items;
use Illuminate\Http\Request;

class OrderItemsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $types = order_items::all();
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
            'order_id' => 'required|string|max:255',
            'product_id' => 'required|string|max:255',
            'order_qty' => 'required|integer|max:20',
            'order_cost' => 'required|integer|max:20',
        ]);

        $type = order_items::create([
            'order_id' => $request->order_id,
            'product_id' => $request->product_id,
            'order_qty' => $request->order_qty,
            'order_cost' => $request->order_cost,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Order item registered successfully',
            'data' => $type,
        ]);
    }

    public function show($id)
    {
        $type = order_items::find($id);
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
            'product_id' => 'required|string|max:255',
            'order_qty' => 'required|integer|max:20',
            'order_cost' => 'required|integer|max:20',
        ]);

        $type = order_items::find($id);
        if ($type) {
            $type->product_id = $request->product_id;
            $type->order_qty = $request->order_qty;
            $type->order_cost = $request->order_cost;
            $type->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Order item updated successfully',
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
        $type = order_items::find($id);
        if ($type) {

            $type->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Item removed successfully',
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }
}
