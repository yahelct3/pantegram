package pantegram.tic_tac_toe_AI.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pantegram.tic_tac_toe_AI.Services.AIService;

@RestController
public class AIController {

    @Autowired
    private AIService aiService;

    @GetMapping("/nextMove")
    public char [] nextMove(){
        char [] board = {     'O', 'X', ' ',
                              'X', 'X', ' ',
                              'O', 'O', ' '};

        char [] bla = this.aiService.nextMove(board);

        for (int i = 0; i< bla.length; i++){
            System.out.print(bla[i]);
            if ((i+1)%3 == 0 )
                System.out.println();
        }

        return bla;

//        return this.aiService.determineWinner(board);
    }
}
