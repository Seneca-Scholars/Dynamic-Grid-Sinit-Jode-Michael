const gameDiv = document.querySelector("div.gameboard");

const tableHeaders = ["Enter Topic", "Enter Topic", "Enter Topic", "Enter Topic", "Enter Topic"];

const gameBoardData = [
    {
        [tableHeaders[0]]: "100",
        [tableHeaders[1]]: "100",
        [tableHeaders[2]]: "100",
        [tableHeaders[3]]: "100",
        [tableHeaders[4]]: "100"
    }, 
    {
        [tableHeaders[0]]: "200",
        [tableHeaders[1]]: "200",
        [tableHeaders[2]]: "200",
        [tableHeaders[3]]: "200",
        [tableHeaders[4]]: "200"
    }, 
    {
        [tableHeaders[0]]: "300",
        [tableHeaders[1]]: "300",
        [tableHeaders[2]]: "300",
        [tableHeaders[3]]: "300",
        [tableHeaders[4]]: "300"
    }, 
    {
        [tableHeaders[0]]: "400",
        [tableHeaders[1]]: "400",
        [tableHeaders[2]]: "400",
        [tableHeaders[3]]: "400",
        [tableHeaders[4]]: "400"
    }, 
    {
        [tableHeaders[0]]: "500",
        [tableHeaders[1]]: "500",
        [tableHeaders[2]]: "500",
        [tableHeaders[3]]: "500",
        [tableHeaders[4]]: "500"
    }];

const createGameboardTable = () => {
    while (gameDiv.firstChild) gameDiv.removeChild(gameDiv.firstChild);

    const gameboardTable = document.createElement('table');
    gameboardTable.className = 'gameboardTable';

    const gameboardTableHead = document.createElement('thead');
    gameboardTableHead.className = 'gameboardTableHead';

    const gameboardTableHeaderRow = document.createElement('tr');
    gameboardTableHeaderRow.className = 'gameboardTableHeaderRow';

    tableHeaders.forEach(header => {
        const gameHeader = document.createElement("th");
        gameHeader.textContent = header;
        gameboardTableHeaderRow.append(gameHeader);
    });

    gameboardTableHead.append(gameboardTableHeaderRow);
    gameboardTable.append(gameboardTableHead);

    const gameboardTableBody = document.createElement('tbody');
    gameboardTableBody.className = 'gameBoardTableBody';
    gameboardTable.append(gameboardTableBody);

    gameBoardData.forEach(data => {
        const gameboardTableBodyRow = document.createElement('tr');
        gameboardTableBodyRow.className = 'gameBoardTableBodyRow';

        tableHeaders.forEach(header => {
        const gameboardCell = document.createElement("td");
        gameboardCell.textContent = data[header];
        gameboardTableBodyRow.append(gameboardCell);
    });
        
        gameboardTableBody.append(gameboardTableBodyRow);
    })

    gameDiv.append(gameboardTable);
}

createGameboardTable();