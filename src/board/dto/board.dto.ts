import { ObjectId } from "mongodb";

export class BoardDTO {
    title : string;
    content: string;
    writer : ObjectId; // 게시글 작성자 고유 키(오브젝트id)
    comments : ObjectId[]; // 댓글들 고유 키(오브젝트id)
    recommends : number;
    price : number;
}