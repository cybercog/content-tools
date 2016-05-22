<?php

Route::get('/', function () {
    return redirect()->route('page.index');
});
Route::get('page', ['as' => 'page.index', 'uses' => 'PageController@index']);
Route::get('page/{id}', ['as' => 'page.show', 'uses' => 'PageController@index']);
Route::post('page', ['as' => 'page.store', 'uses' => 'PageController@store']);
Route::put('page/{id}', ['as' => 'page.update', 'uses' => 'PageController@update']);
