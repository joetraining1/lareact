<?php

namespace App\Http\Controllers;

use App\Models\kategori;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class KategoriController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $types = kategori::all();
        if ($types->count() > 0) {
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
            'kategori_name' => 'required|string|max:255',
            'kategori_deskripsi' => 'required|string|max:255',
        ]);

        $asd = date('ym');
        $id = IdGenerator::generate([
            'table' => 'kategoris',
            'field' => 'kategori_id',
            'length' => 10,
            'prefix' => "KTG$asd",
        ]);

        $type = kategori::create([
            'kategori_id' => $id,
            'kategori_name' => $request->kategori_name,
            'kategori_deskripsi' => $request->kategori_deskripsi,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Kategori registered successfully',
            'data' => $type,
        ]);
    }

    public function show($id)
    {
        $type = kategori::find($id);
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

    public function SearchQuery(Request $request)
    {
        $keyword = $request->keyword;

        $query = DB::select('SELECT * from kategoris where kategoris.kategori_name like "%'.$keyword.'%"');

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
            'kategori_name' => 'required|string|max:255',
            'kategori_deskripsi' => 'required|string|max:255',
        ]);

        $type = kategori::where('kategori_id', $id)->get();
        if ($type) {
            $type[0]->kategori_id = $type[0]->kategori_id;
            $type[0]->kategori_name = $request->kategori_name;
            $type[0]->kategori_deskripsi = $request->kategori_deskripsi;
            $type[0]->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Kategori updated successfully',
                'data' => $type[0],
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
        $type = kategori::where('kategori_id', $id)->get();
        if ($type) {
            $type[0]->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Kategori removed successfully',
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }
}
