<?php

namespace App\Http\Controllers;

use App\Models\document_info;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DocumentInfoController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $types = document_info::all();
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
            'document_id' => 'required|string|max:255',
            'document_ref' => 'required|string|max:255',
            'document_judul' => 'required|string|max:255',
            'document_agenda' => 'required|string|max:255',
            'document_date' => 'required|string|max:255',
            'kategori_id' => 'required|string|max:255',
            'departemen_id' => 'required|string|max:255',
            'user_id' => 'required|string|max:255',
        ]);

        $type = document_info::create([
            'document_id' => $request->document_id,
            'document_ref' => $request->document_ref,
            'document_judul' => $request->document_judul,
            'document_agenda' => $request->document_agenda,
            'document_date' => $request->document_date,
            'kategori_id' => $request->kategori_id,
            'departemen_id' => $request->departemen_id,
            'modified_by' => $request->user_id,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Document info registered successfully',
            'data' => $type,
        ]);
    }

    public function show($id)
    {
        // $typeZero = document_info::where('document_id', $id)->get();
        $typeZero = DB::select('SELECT document_infos.id, document_infos.document_ref, document_infos.document_judul, document_infos.document_agenda, document_infos.document_date, document_infos.kategori_id, document_infos.document_id, document_infos.departemen_id, departemens.departemen_name, kategoris.kategori_name from document_infos left join departemens on document_infos.departemen_id = departemens.departemen_id left join kategoris on document_infos.kategori_id = kategoris.kategori_id where document_infos.document_id = "'.$id.'"');
        $type = $typeZero[0];
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
            'document_ref' => 'required|string|max:255',
            'document_judul' => 'required|string|max:255',
            'document_agenda' => 'required|string|max:255',
            'document_date' => 'required|string|max:255',
            'kategori_id' => 'string|max:255',
            'departemen_id' => 'string|max:255',
            'user_id' => 'required|string|max:255',
        ]);

        $typeZero = document_info::where('document_id', $id)->get();
        $type = $typeZero[0];
        if ($type) {
            $type->document_id = $type->document_id;
            $type->document_ref = $request->document_ref;
            $type->document_judul = $request->document_judul;
            $type->document_agenda = $request->document_agenda;
            $type->document_date = $request->document_date;
            $type->kategori_id = $request->kategori_id ? $request->kategori_id : null;
            $type->departemen_id = $request->departemen_id ? $request->departemen_id : null;
            $type->modified_by = $request->user_id;
            $type->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Document info updated successfully',
                'date' => $type,
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
        $typeZero = document_info::where('document_id', $id)->get();
        $type = $typeZero[0];
        if ($type) {

            $type->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Document info removed successfully',
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }
}
