//rowとcolumnの二次元配列orオブジェクト
//rowとcolumnの並びを二次元配列で表現（現状：columnによる判定しかできない ?）
//勝敗判定には（row, column, color）が必要 → columnの中のオブジェクトとして

const app = new Vue({
    el: "#app",
    data(){
        return {
            buttons : [0,0,0,0,0,0,0],
            circles : [
                [{color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                ],
                [{color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                ],
                [{color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                ],
                [{color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                ],
                [{color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                ],
                [{color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                ],
                [{color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                {color : "bg-azure"},
                ]
            ],
            points :[
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ],
            circleObject : {
                width : "6rem",
                height : "6rem",
                borderRadius : "100px",
                margin : "10px"
            },
            turnControl : 0,
            whoseTurn : "PLAYER TURN",
        }
    },
    methods:{
        // 1 2 3    
        // ○ ○ ○    points[[0,0,0,0,0],
        // ○ ○ ○           [0,0,0,0,0],
        // ○ ○ ○           [0,0,0,0,0]
        // ○ ○ ○          ]
        // ○ ○ ○    列で管理している

        colorChange : function(col) {

            col = parseInt(col);
            
            let currValIndex = 0; // 
            let currVal = 0;
            
            for(let i = this.points[col].length-1; i >= 0; i--){

                currVal = this.points[col][i];
                currValIndex = i;

                //currValに値が入ってるか確認、入ってなかったら数字を入れる（次に入れれないようにするため）
                if(currVal == 0){
                    this.points[col][currValIndex] = (this.turnControl % 2 == 0) ? 2 : 1;
                    break;
                }

            }
            //色変更
            this.circles[col][currValIndex].color = (this.turnControl % 2 == 0)? "bg-yellow" : "bg-green";

            this.turnControl += 1;
        },

        whoseTurnNow : function(){
            this.whoseTurn = (this.turnControl % 2 == 0)? "PLAYER TURN" : "CPU TURN"; 
        }
    }
})


//     const app = new Vue({
//     el: "#app",
//     data(){
//         return {
//             circles : [
//                 [1,2,3,4,5,6],
//                 [1,2,3,4,5,6],
//                 [1,2,3,4,5,6],
//                 [1,2,3,4,5,6],
//                 [1,2,3,4,5,6],
//                 [1,2,3,4,5,6],
//                 [1,2,3,4,5,6],
//             ],
//             circleObject : {
//                 backgroundColor : "azure", //色だけ別で管理
//                 width : "6rem",
//                 height : "6rem",
//                 borderRadius : "100px",
//                 margin : "10px"
//             }   
//         }
//     },
//     methods:{
//         colorChange : function() {
//             this.circleObject.backgroundColor = "yellow";
//         }
//     }
// })



