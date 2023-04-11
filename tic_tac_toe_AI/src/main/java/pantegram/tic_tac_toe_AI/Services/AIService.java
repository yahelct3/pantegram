package pantegram.tic_tac_toe_AI.Services;

import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class AIService {

    public String determineWinner(char[] board) {
        // check rows
        for (int i = 0; i < 9; i += 3) {
            if (board[i] == board[i+1] && board[i+1] == board[i+2] && board[i] != '-') {
                return Character.toString(board[i]);
            }
        }
        // check columns
        for (int j = 0; j < 3; j++) {
            if (board[j] == board[j+3] && board[j+3] == board[j+6] && board[j] != '-') {
                return Character.toString(board[j]);
            }
        }
        // check diagonals
        if (board[0] == board[4] && board[4] == board[8] && board[0] != '-') {
            return Character.toString(board[0]);
        }
        if (board[2] == board[4] && board[4] == board[6] && board[2] != '-') {
            return Character.toString(board[2]);
        }
        // check for tie
        boolean isTie = true;
        for (int i = 0; i < 9; i++) {
            if (board[i] == '-') {
                isTie = false;
                break;
            }
        }
        if (isTie) {
            return "Tie";
        }
        // no winner yet
        return null;
    }

    private int getScore(String winner){
        if (winner.equals("X"))
            return 1;
        else if (winner.equals("O"))
            return -1;

        return 0;
    }

    private final char EMPTY_CELL = '-';
    private final char AI_CELL = 'X';
    private final char PLAYER_CELL = 'O';

    public char[] nextMove(char[] board){

        char[] bestBoard = new char[board.length];
        System.arraycopy(board, 0, bestBoard, 0, board.length);
        int bestScore = -1000;

        for (int cell = 0; cell < board.length; cell++){
            if (board[cell] == EMPTY_CELL){
                board[cell] = AI_CELL;

                int score = playerTurn(board);
                if (score > bestScore){
                    System.arraycopy(board, 0, bestBoard, 0, board.length);
                    bestScore = score;
                }

                board[cell] = EMPTY_CELL;
            }
        }

        return bestBoard;
    }

    private int aiTurn(char[] originBoard){
        char[] board = new char[originBoard.length];
        System.arraycopy(originBoard, 0, board, 0, originBoard.length);
        String winner = this.determineWinner(board);

        if (winner != null)
            return getScore(winner);

        int bestScore = -1000;

        for (int cell = 0; cell < board.length; cell++){
            if (board[cell] == EMPTY_CELL){
                board[cell] = AI_CELL;
                int score = playerTurn(board);

                if (score > bestScore)
                    bestScore = score;

                board[cell] = EMPTY_CELL;
            }
        }

        return bestScore;
    }

    private int playerTurn(char[] originBoard){
        char[] board = new char[originBoard.length];
        System.arraycopy(originBoard, 0, board, 0, originBoard.length);
        String winner = this.determineWinner(board);

        if (winner != null)
            return getScore(winner);

        int bestScore = 1000;

        for (int cell = 0; cell < board.length; cell++){
            if (board[cell] == EMPTY_CELL){
                board[cell] = PLAYER_CELL;
                int score = aiTurn(board);

                if (score < bestScore)
                    bestScore = score;

                board[cell] = EMPTY_CELL;
            }
        }

        return bestScore;
    }
}
