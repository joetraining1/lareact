<?php

namespace App\Http\Controllers;

use App\Models\user_profile;
use Illuminate\Http\Request;

class UserProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $types = user_profile::all();
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
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
        ]);

        $type = user_profile::create([
            'title' => $request->title,
            'description' => $request->description,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'User type registered successfully',
            'type' => $type,
        ]);
    }

    public function show($id)
    {
        $type = user_profile::find($id);
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
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
        ]);

        $type = user_profile::find($id);
        if ($type) {
            $type->title = $request->title;
            $type->description = $request->description;
            $type->save();

            return response()->json([
                'status' => 'success',
                'message' => 'User type updated successfully',
                'type' => $type,
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
        $type = user_profile::find($id);
        if ($type) {
            $return = [
                'id' => $type->id,
                'title' => $type->title,
                'description' => $type->description,
            ];
            $type->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'User type removed successfully',
                'type' => $return,
            ]);
        } else {
            return response()->json([
                'status' => 'no data.',
                'message' => 'there are no data to be found.',
            ]);
        }
    }
}
