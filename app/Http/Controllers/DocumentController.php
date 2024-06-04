<?php

namespace App\Http\Controllers;

use App\Models\document;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class DocumentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $types = DB::select('SELECT document_infos.id, document_infos.document_id, document_infos.document_ref, document_infos.document_judul, document_infos.document_agenda, document_infos.kategori_id, document_infos.departemen_id, document_infos.document_date, document_infos.modified_by, documents.document_url, documents.created_by, kategoris.kategori_name,departemens.departemen_name from document_infos left join documents on document_infos.document_id = documents.document_id left join kategoris on document_infos.kategori_id = kategoris.kategori_id left join departemens on document_infos.departemen_id = departemens.departemen_id');
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

    public function create($f)
    {
        $asd = date('ym');
        $id = IdGenerator::generate([
            'table' => 'documents',
            'field' => 'document_id',
            'length' => 10,
            'prefix' => "DCS$asd",
        ]);

        $file_path = $f->file('file_pdf')->store('files', 'public');
        $file_url = "http://localhost:8000/storage/$file_path";
        $file_name = Str::of($file_path)->remove('files/');

        $doc = document::create([
            'document_id' => $id,
            'document_path' => $file_path,
            'document_file' => $file_name,
            'document_url' => $file_url,
            'created_by' => $user_id,
            'modified_by' => $user_id,
        ]);

        return $doc->document_id;
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|string|max:255',
            'file_pdf' => 'required|mimes:pdf|max:2048',
        ]);

        $asd = date('ym');
        $id = IdGenerator::generate([
            'table' => 'documents',
            'field' => 'document_id',
            'length' => 10,
            'prefix' => "DCS$asd",
        ]);

        $file_path = $request->file('file_pdf')->store('files', 'public');
        $file_url = "http://localhost:8000/storage/$file_path";
        $file_name = Str::of($file_path)->remove('files/');

        $type = document::create([
            'document_id' => $id,
            'document_path' => $file_path,
            'document_file' => $file_name,
            'document_url' => $file_url,
            'created_by' => $request->user_id,
            'modified_by' => $request->user_id,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Document registered successfully',
            'data' => $type,
        ]);
    }

    public function show($id)
    {
        $type = document::find($id);
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
            'user_id' => 'required|string|max:255',
            'file_pdf' => 'required|mimes:pdf|max:2048',
        ]);

        $type = document::find($id);
        if ($type) {
            $del_file = File::delete('storage/'.$type->document_path);

            $file_path = $request->file('file_pdf')->store('files', 'public');
            $file_url = "http://localhost:8000/storage/$file_path";
            $file_name = Str::of($file_path)->remove('files/');

            $type->document_id = $type->document_id;
            $type->document_path = $file_path;
            $type->document_file = $file_name;
            $type->document_url = $file_url;
            $type->modified_by = $request->user_id;
            $type->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Document updated successfully',
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
        $type = document::find($id);
        if ($type) {

            $type->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Document removed successfully',
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }
}
