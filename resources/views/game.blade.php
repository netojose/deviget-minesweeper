<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('style.css')}}">
        <meta name="url" content="{{ url('') }}">
        <title>Deviget - Minesweeper</title>
    </head>
    <body>
        <div id="app"></div>
        <script src="{{asset('app.js')}}"></script>
    </body>
</html>
