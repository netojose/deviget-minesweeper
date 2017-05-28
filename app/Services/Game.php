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
    
}
