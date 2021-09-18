import { symbols } from "./config.mjs"

const app = new Vue({
    el: '#app',
    data: {
        message:"heyhey!!!!",
        board: [ // <= setBoard nを受け取って　セットする
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],

        ],
        // board2:[
        //     ["fas-times", "fas-rectangle-landscape"],
        // ],
        // "fas-times" : true,
        // "fas-rectangle-landscape" : false,
    },
    method: {

        setBoard: function(n){

        },
        /**
         * @param row Number
         * @param col Number
         */
        postSymbol: function(row, col){ //boardの中身をpostする// on:click//詰みあげる感じなので下の段を確認する処理がちょっと必要になる。

        },


    }
})
