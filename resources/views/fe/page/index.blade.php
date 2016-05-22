@extends('fe.layout.master')

@section('content')

    <h1>Pages</h1>

    @foreach ($pages as $page)
        <article>
            <h1>{{ $page->title }}</h1>
            <div>{{ nl2br($page->body) }}</div>
        </article>
    @endforeach

@endsection
