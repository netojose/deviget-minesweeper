<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddGame;
use App\Models\Game as GameModel;
use App\Services\Game as GameService;

class Game extends Controller
{
    /**
     * Game Model
     * @var Illuminate\Database\Eloquent\Model
     */
    private $gameModel;
    
    /**
     * Game Service
     * @var App\Services\Game
     */
    private $gameService;
    
    public function __construct(GameModel $gameModel, GameService $gameService) {
        $this->gameModel = $gameModel;
        $this->gameService = $gameService;
    }
    
    public function postAdd(AddGame $request)
    {        
        $data = $request->only("user_id", "rows", "columns", "mines");
        $data["duration"] = "00:00:00";
        $elements = $this->gameService->createBoard($data["rows"], $data["columns"], $data["mines"]);
        $data["elements"] = json_encode($elements);
        $game = $this->gameModel->create($data);
        return $game;
    }
    
    public function getGames()
    {
        
    }
    
    public function getGame()
    {
        
    }
    
    public function patchUpdate()
    {
        
    }
}
