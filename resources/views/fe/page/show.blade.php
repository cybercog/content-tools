@extends('fe.layout.master')

@section('content')

    <h1>Page №{{ $page->id }}</h1>

    <article>
        <h1>{{ $page->title }}</h1>
        <div data-editable data-name="body">
            {{ nl2br($page->body) }}
        </div>
    </article>

@endsection
