<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ asset('assets/css/fe-app.css') }}">
</head>
<body>

@yield('content')

<script src="{{ asset('assets/js/fe-app.js') }}"></script>

@stack('script-footer')

</body>
</html>
