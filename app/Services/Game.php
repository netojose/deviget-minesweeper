<?php

namespace App\Services;

class Game {
    
    /**
     * Create a new board game
     * @param int $rows
     * @param int $columns
     * @param int $mines
     * @return array
     */
    public function createBoard(int $rows, int $columns, int $mines) : array
    {
        $cells = $this->createCells($rows, $columns, $mines);
        
        $pos = 0;
        $elements = [];
        
        for($i = 1; $i <= $rows; $i++)
        {
            for($j = 1; $j <= $columns; $j++)
            {
                $elements['r_'.$i]['c_'.$j] = $cells[$pos++];
            }
        }
        
        return $elements;
    }
    
    /**
     * Create cells
     * 
     * @param int $rows
     * @param int $columns
     * @param int $mines
     * @return array
     */
    private function createCells(int $rows, int $columns, int $mines) : array
    {
        $qtdElements = $rows * $columns;
        $cells = [];
        
        for($i = 1; $i <= $qtdElements; $i++)
        {
            $content = ["status" => "closed", "mine" => false];
            if($mines > 0)
            {
                $mines--;
                $content["mine"] = true;
            }
            $cells[] = $content;
        }
        
        shuffle($cells);
        
        return $cells;
    }
    
    /**
     * Update game
     * @param App\Models\Game $game
     * @param array $elements
     * @param string|null $duration
     * @return App\Models\Game A updated game
     */
    public function updateGame($game, $elements, $duration = null)
    {
        if($duration){
            $game->duration = $duration;
        }
        
        $gameElements = json_decode($game->elements, true);
        foreach($gameElements as $keyRow => $rows){
            $cols = array_keys($rows);
            foreach($cols as $keyCol){
                if(isset($elements[$keyRow][$keyCol]))
                {
                    $gameElements[$keyRow][$keyCol]["status"] = $elements[$keyRow][$keyCol];
                }
            }
        }
        
        $game->elements = $gameElements;
        
        $game->save();
        
        return $game;
    }
    
}
