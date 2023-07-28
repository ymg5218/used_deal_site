import { Injectable } from '@nestjs/common';
import { Board, BoardSchema } from './schema/board.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BoardDTO } from './dto/board.dto';

@Injectable()
export class BoardService {
    constructor(
        @InjectModel(Board.name) private boardModel: Model<BoardSchema>
    ){}

    async findAll() {
        return this.boardModel.find();
    }

    async createBoard(board : BoardDTO) {
        //const {comments, content, datetime, writer, recommends, price} = board;
        // const _board = await this.boardModel.create(board);
        return await this.boardModel.create(board);;
        // return _board.save();
    }
}
