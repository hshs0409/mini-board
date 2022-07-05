/*
모델을 정의하기 위해서는
Class나 Interface를 이용하면 된다.

Class는 변수의 타입도 체크하고, 인스턴스 생성도 가능
Interface는 변수의 타입만을 체크!!
*/

// export class Board {
//   id: string;
//   title: string;
//   description: string;
//   status: BoardStatus;
// }

export enum EBoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export enum ImpossibleEnum {
  PUBLIC = 0,
  PRIVATE = 1,
}

export enum ImpossibleEnum2 {
  PUBLIC = 3,
  PRIVATE, //4
  prd, //5
}

let impossibleStatus: ImpossibleEnum = ImpossibleEnum.PRIVATE;
console.log(impossibleStatus); //1
impossibleStatus = 5; // 1

let impossibleStatus2: ImpossibleEnum2 = ImpossibleEnum2.PUBLIC;
let impossibleStatus2p: ImpossibleEnum2 = ImpossibleEnum2.PRIVATE;
console.log(impossibleStatus2); // 3
console.log(impossibleStatus2p); // 4
impossibleStatus2 = 5;
console.log(impossibleStatus2); // 5

// Union Types : OR
// 발생하는 모든 케이스 중 하나만 할당할 때

// Typescript Enum
// 따로 값을 지정하지 않으면 0부터 자동으로 count
// 시작 값을 지정하면 거기서부터 1씩 증가하기도 함
// string 지정도 가능
// TS에 Enum은 가능한 한 사용하지 않는다. => Union Type을 대신 활용
// Enum 내부의 값이 아니라 다른 값도 할당가능하다는 문제가 발생

// 안드로이드나 IOS는 사용자 데이터를 JSON으로 보내야 하는데
// 네이티브 프로그래밍 언어에서는 UnionType이 없기 때문에
// 이 경우에서는 Enum을 사용해야 한다.
