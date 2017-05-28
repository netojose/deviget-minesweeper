<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddGame extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $maxMines = floor($this->input('rows', 2) * $this->input('columns', 2) / 2);
        return [
            "user_id"   => "required|exists:users,id", 
            "rows"      => "required|numeric|min:2|max:10", 
            "columns"   => "required|numeric|min:2|max:10", 
            "mines"     => "required|numeric|min:1|max:" . $maxMines
        ];
    }
}
