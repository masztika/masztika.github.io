/* <tr>
    <td>1.</td>
        <td>Kiss</td>
        <td>János</td>
        <td>55</td>
            <td>
                <div class="btn-group">
                <button class="btn btn-info">
                        <i class="fas fa-sync-alt"></i>
                        </button>
                        <button class="btn btn-danger">
                        <i class="fas fa-trash-alt"></i>
                        </button>
                </div>
            </td>
</tr> */

let users = [
    { surname: "Éva", firstname: "Nagy", age: 33 },
    { surname: "Pál", firstname: "Kis", age: 21 },
    { surname: "Anna", firstname: "Kovács", age: 30 },
    { surname: "Péter", firstname: "Horváth", age: 18 },
    { surname: "Kati", firstname: "Németh", age: 28 },
    { surname: "Lotti", firstname: "Bíró", age: 27 },
    { surname: "Irén", firstname: "Hideg", age: 36 }
];
let tableBody = document.querySelector("#userTable tbody");

let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

let createButtonGroup = parent => {
    // <div class="btn-group">
    //             <button class="btn btn-info">
    //                     <i class="fas fa-sync-alt"></i>
    //                     </button>
    //                     <button class="btn btn-danger">
    //                     <i class="fas fa-trash-alt"></i>
    //                     </button>
    //             </div>
    let group = document.createElement("div");
    group.className = "btn-group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn btn-info";
    btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn btn-danger";
    btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}
for(let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for(let value of Object.values(users[k]))
     {
        createTD(value, tr);
    }

    createButtonGroup(tr);
    tableBody.appendChild(tr);
}