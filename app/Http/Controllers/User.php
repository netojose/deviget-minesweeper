<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddUser;
use App\Models\User as UserModel;

class User extends Controller
{
    /**
     * User Model
     * @var Illuminate\Database\Eloquent\Model
     */
    private $userModel;
    
    public function __construct(UserModel $userModel) {
        $this->userModel = $userModel;
    }
    
    public function postLogin(AddUser $request)
    {
        $user = $this->userModel->firstOrCreate($request->only("username"));
        return $user;
    }
}
