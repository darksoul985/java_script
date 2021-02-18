'use strict';

const chessBoard = {
    config: {
        row: [8, 7, 6, 5, 4, 3, 2, 1],
        cols: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    },

    /**
     * функция запуска
     */
    run() {
        let board = this.generateBoard();
        document.querySelector('div').innerHTML = board;
        this.addChessPieces();
        this.addPawns();
        this.addCollName();
        this.addRowName();

    },

    /**
     * Заполняем доску фигурами
     */
    addChessPieces() {
        let pieces = ['Л', 'К', 'С', 'Ф', 'Кр', 'С', 'К', 'Л'];

        let rowBlack = document.querySelectorAll('tbody tr:first-child td');
        let rowWight = document.querySelectorAll('tbody tr:last-child td');
        for (let itm = 0; itm < pieces.length; itm++) {
            rowBlack[itm].textContent = pieces[itm];
            rowWight[itm].textContent = pieces[itm];
        }

    },

    /**
     * Заполняем доску пешками
     */
    addPawns() {
        let pawns = 'п';
        
        let row = document.querySelectorAll('tbody tr');
        let rowBlack = row[1].querySelectorAll('td');
        let rowWhite = row[6].querySelectorAll('td');
        
        for (let itm = 0; itm < rowBlack.length; itm++) {
            rowBlack[itm].textContent = pawns;
            rowWhite[itm].textContent = pawns;
        }
        
    },
    /**
     * функция генерирует доску
     * @returns {string} код доски в виде строки
     */
    generateBoard() {

        let collorCell = 'white';
        let newCol = '';

        for (let j in this.config.cols) {
            let newRow = '';

            for (let i in this.config.row) {
                newRow += `<td class=${collorCell}></td>`;
                collorCell = this.changeColor(collorCell)
            }

            collorCell = this.changeColor(collorCell)

            newCol += `<tr>${newRow}</tr>`
        }

        return `<table><tbody>${newCol}</table></tbody>`
    },

    /**
     * фунция проверяет текущий цвет ячейки
     * @param   {string} collor цвет текущей ячейки
     * @returns {string} 
     */
    changeColor(collor) {
        if (collor == 'white') {
            collor = 'black';
        } else {
            collor = 'white';
        }
        return collor
    },
    /**
     * функция именует столбцы
     */
    addCollName() {
        let colName = document.querySelector('tbody');
        let tr = document.createElement('tr');

        for (let i in this.config.cols) {
            let td = document.createElement('td');
            td.innerText = this.config.cols[i];
            tr.appendChild(td);
        }
        colName.appendChild(tr);
       
    },
    /**
     * функция именует строки
     */
    addRowName() {
        let trs = document.querySelectorAll('table tr');
        for (let tr = 0; tr < trs.length; tr++) {
            let td = document.createElement('td');
            td.innerText = this.config.row[tr];
            trs[tr].insertBefore(td, trs[tr].firstChild);
        }

        let firstCell = document.querySelector('table tr:last-child');
        firstCell.firstChild.textContent = '';
    }

}

chessBoard.run()
