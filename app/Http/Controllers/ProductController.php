<?php

namespace App\Http\Controllers;

use App\Models\product;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        // $types = DB::select('SELECT *, kategoris.kategori_name from products left join kategoris on products.kategori_id = kategoris.kategori_id');

        $products = DB::select('SELECT products.id, products.product_id, products.kategori_id, products.product_name, products.product_harga, products.product_deskripsi, kategoris.kategori_name from products left join kategoris on products.kategori_id = kategoris.kategori_id');
        if ($products) {
            return response()->json([
                'status' => 'success',
                'data' => $products,
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
            'kategori_id' => 'required|string|max:255',
            'product_name' => 'required|string|max:255',
            'product_harga' => 'required|string|max:255',
            'product_deskripsi' => 'required|string|max:255',
        ]);

        $asd = date('ym');
        $id = IdGenerator::generate([
            'table' => 'products',
            'field' => 'product_id',
            'length' => 10,
            'prefix' => "PRD$asd",
        ]);

        $type = product::create([
            'product_id' => $id,
            'kategori_id' => $request->kategori_id,
            'product_name' => $request->product_name,
            'product_harga' => $request->product_harga,
            'product_deskripsi' => $request->product_deskripsi,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Product registered successfully',
            'data' => $type,
        ]);
    }

    public function SearchQuery(Request $request)
    {
        $keyword = $request->keyword;

        $query = DB::select('SELECT * from products where products.product_name like "%'.$keyword.'%"');

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
        $type = DB::select('SELECT products.id, products.product_name, products.kategori_id, kategoris.kategori_name, products.product_harga, products.product_deskripsi from products left join kategoris on products.kategori_id = kategoris.kategori_id where products.product_id = "'.$id.'"');
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
            'kategori_id' => 'string|max:255',
            'product_name' => 'string|max:255',
            'product_harga' => 'string|max:255',
            'product_deskripsi' => 'string|max:255',
        ]);

        $type = product::where('product_id', $id)->get();
        if ($type) {
            $type[0]->product_id = $type[0]->product_id;
            $type[0]->kategori_id = $request->kategori_id ? $request->kategori_id : $type[0]->kategori_id;
            $type[0]->product_name = $request->product_name ? $request->product_name : $type[0]->product_name;
            $type[0]->product_harga = $request->product_harga ? $request->product_harga : $type[0]->product_harga;
            $type[0]->product_deskripsi = $request->product_deskripsi ? $request->product_deskripsi : $type[0]->product_deskripsi;
            $type[0]->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Product updated successfully',
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
        $type = product::find($id);
        if ($type) {

            $type->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Product removed successfully',
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }
}
