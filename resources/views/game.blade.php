<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Deviget - Minesweeper</title>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div id="app"></div>
            </div>
        </div>
        <script src="{{asset('app.js')}}"></script>
    </body>
</html>
