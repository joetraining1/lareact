<?php

namespace App\Http\Controllers;

use App\Models\document;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;
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
        $types = document::all();
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

    public function create($user_id)
    {
        $asd = date('ym');
        $id = IdGenerator::generate([
            'table' => 'documents',
            'field' => 'document_id',
            'length' => 10,
            'prefix' => "DCS$asd",
        ]);

        $doc = document::create([
            'document_id' => $id,
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
