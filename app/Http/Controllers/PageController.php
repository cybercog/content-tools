<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;

use App\Http\Requests;

class PageController extends Controller
{
    public function index()
    {
        $pages = Page::all();

        return view('fe.page.index', compact('pages'));
    }

    public function show($id)
    {
        $page = Page::firstOrFail($id);

        return view('fe.page.show', compact('page'));
    }

    public function store(Request $request)
    {
        $page = Page::create($request->all());

        return redirect()->route('fe.page.show', $page->id);
    }

    public function update(Request $request, $id)
    {
        $page = Page::firstOrFail($id);
        $page->update($request->all());

        return redirect()->route('fe.page.show', $page->id);
    }
}
