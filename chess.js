//pieces at row 1 and row 8
const pieces = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];
//get the chessboard id
const board = document.getElementById("chessboard");
//chessboard size
const row = col = 8;

function board_title(title_text) {
    const title_for_board = document.createElement("h1");
    title_for_board.innerText = title_text;
    board.appendChild(title_for_board);
}

function chess_init() {
    for(let c=0; c<=col; c++) {
        const row_label = document.createElement("ul");
        const div = document.createElement("div");
        div.className = "div";
        for(let r=0; r<=row; r++) {
            div.id = `row${9-c}`
            const cell = document.createElement("li");
            cell.className = (c == 0 && r == 0)? "gridcode empty":
                             (c == 0 || r == 0)? "gridcode":"box";
            if(c !== 0 && r !== 0)
                cell.id = `${String.fromCharCode(96+r)}${9-c}`;                 
            cell.innerText = (r == 0)? 9-c:
                             (c == 0)? String.fromCharCode(96+r):
                             (c == 1)? `b${pieces[r-1]}`:
                             (c == 2)? 'bp':
                             (c == 7)? 'wp':
                             (c == 8)? `w${pieces[r-1]}`:' ';

            div.appendChild(cell);
            console.log(cell+"are been established...");
        }
        row_label.appendChild(div);
        board.appendChild(row_label);
    }
}

function turn_title() {
    const turn = document.createElement("h2");
    turn.id = "tog";
    turn.className = "togw";
    turn.innerText = "White's Turn";
    board.appendChild(turn);
}

function create_reset(){
    const reset_btn = document.createElement("button");
    reset_btn.id = "reset-btn";
    reset_btn.innerText = "Reset";
    board.appendChild(reset_btn);
    reset_btn.addEventListener('click', function() {
        location.reload();
    })
}

//product pieces in HTML
function product_chess() {
    //chess title at top
    board_title("Chess with AI");
    //product chessboard and write the pieces in innerText
    chess_init();
    //chess turn at h2
    turn_title();
    //reset btn
    create_reset();
}
product_chess();

//inserting the images
function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            image.innerHTML = `${image.innerText} <img class='all-img' src="Image/piece/${image.innerText}.png" alt="">`;
            const arr = Array.from(image.innerText);
            image.style = `filter: drop-shadow(${(arr[0] == 'b')? '0px 0px 5px white':'0px 0px 0px rgb(50, 50, 50)'});`;
            image.style.cursor = 'pointer';
        }
    })
}
insertImage();

//Coloring the board
function coloring() {
    const color = document.querySelectorAll('.box');
    color.forEach(color => {
        getId = color.id;
        arr = Array.from(getId);
        NUM = arr.pop();
        ENG = arr.shift();
        t = NUM.charCodeAt(0)+ENG.charCodeAt(0);

        if (t%2 == 0) {
            color.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
        }
        else {
            color.style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
        }
    })
}
coloring();