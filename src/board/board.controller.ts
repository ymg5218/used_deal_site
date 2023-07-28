import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardDTO } from './dto/board.dto';

@Controller('board')
export class BoardController {
    constructor(
        private readonly boardService : BoardService,
    ){}

    @Get('findAll')
    async getAll() {
        return await this.boardService.findAll();
    }

    @Post('create')
    async createBoard(@Body() board: BoardDTO) {
        return await this.boardService.createBoard(board);
    }
    
}
