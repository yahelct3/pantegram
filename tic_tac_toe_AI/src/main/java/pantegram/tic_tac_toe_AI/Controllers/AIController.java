package pantegram.tic_tac_toe_AI.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pantegram.tic_tac_toe_AI.Services.AIService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AIController {

    @Autowired
    private AIService aiService;

    @GetMapping("/nextMove/{board2}")
    public char [] nextMove(@PathVariable String board2){
//        char [] board1 = {     'O', '-', '-',
//                              '-', '-', '-',
//                              '-', '-', '-'};

        char [] board = board2.toCharArray();
        char [] bla = this.aiService.nextMove(board);

//        for (int i = 0; i< bla.length; i++){
//            System.out.print(bla[i]);
//            if ((i+1)%3 == 0 )
//                System.out.println();
//        }

        return bla;

//        return this.aiService.determineWinner(board);
    }

    @GetMapping("/winner/{board2}")
    public String determineWinner(@PathVariable String board2){
        char [] board = board2.toCharArray();
        return this.aiService.determineWinner(board);
    }
}
