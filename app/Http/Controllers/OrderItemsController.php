<?php

namespace App\Http\Controllers;

use App\Models\order_items;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderItemsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index($id)
    {
        $types = DB::select('SELECT order_items.id, order_items.product_id, products.product_name, products.product_deskripsi, products.product_harga, products.kategori_id, kategoris.kategori_name, order_items.order_qty, order_items.order_cost from order_items left join products on order_items.product_id = products.product_id left join kategoris on products.kategori_id = kategoris.kategori_id where order_items.order_id = "'.$id.'"');
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
            'product_id' => 'required|string|max:255',
            'order_qty' => 'required|numeric|digits_between:1,10',
            'order_cost' => 'required|numeric|digits_between:1,20',
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
            'product_id' => 'required|string|max:255',
            'order_qty' => 'required|numeric|digits_between:1,10',
            'order_cost' => 'required|numeric|digits_between:1,20',
        ]);

        $typeZero = order_items::where('id', $id)->get();
        $type = $typeZero[0];
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
        $typeZero = order_items::where('id', $id)->get();
        $type = $typeZero[0];
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
