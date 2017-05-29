<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddGame;
use Illuminate\Http\Request;
use App\Models\Game as GameModel;
use App\Models\User as UserModel;
use App\Services\Game as GameService;

class Game extends Controller
{
    /**
     * Game Model
     * @var Illuminate\Database\Eloquent\Model
     */
    private $gameModel;
    
    /**
     * User Model
     * @var Illuminate\Database\Eloquent\Model
     */
    private $userModel;
    
    /**
     * Game Service
     * @var App\Services\Game
     */
    private $gameService;
    
    public function __construct(GameModel $gameModel, UserModel $userModel, GameService $gameService) {
        $this->gameModel = $gameModel;
        $this->userModel = $userModel;
        $this->gameService = $gameService;
    }
    
    public function postAdd(AddGame $request)
    {        
        $data = $request->only("user_id", "rows", "columns", "mines");
        $data["duration"] = "00:00:00";
        $elements = $this->gameService->createBoard($data["rows"], $data["columns"], $data["mines"]);
        $data["elements"] = json_encode($elements);
        $data["finished"] = "n";
        $game = $this->gameModel->create($data);
        return $game;
    }
    
    public function getGames(Request $request)
    {
        $user = $this->userModel->where('username', $request->route('username'))->first();
        
        if(!$user)
        {
            return response()->json(['error' => 'User not found'], 422);
        }
        
        return $user->games;
    }
    
    public function getGame(Request $request)
    {
        $user = $this->userModel->where('username', $request->route('username'))->first();
        
        if(!$user)
        {
            return response()->json(['error' => 'User not found'], 422);
        }
        
        return $this->gameModel->where('id', $request->route('game_id'))->where('user_id', $user->id)->first();
    }
    
    public function patchUpdate(Request $request)
    {
        $game = $this->gameModel->find($request->input('game_id'));
        
        if(!$game)
        {
            return response()->json(['error' => 'game not found'], 422);
        }
        
        $updatedGame = $this->gameService->updateGame($game, $request->input('elements'), $request->input('duration'));
        
        return $updatedGame;
    }
}
