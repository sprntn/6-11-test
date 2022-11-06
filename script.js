window.addEventListener('load', () => {
    fetch("./data.json").then( res => res.json()).then(data => {
        const mainDiv = document.getElementById("div1");
        loopDataRec(mainDiv, data, 0);
    })
});

function loopDataRec(fatherElement, data, depth){
    for (const item of data){
        const newItem = document.createElement("div");
        fatherElement.appendChild(newItem);
        newItem.innerHTML = `<p>id: ${item.id}</p><p>Site Name: ${item.name}</p><p><a href="https://${item.url}" target="_blank">Site Url:${item.name}</a></p>`;
        const className = depth == 0? "outerDiv":"innerDiv";
        newItem.classList.add(className);
        newItem.style.background = colors[depth % (colors.length)];
        if(item.subData){
            loopDataRec(newItem, item.subData, depth+1);
        }
    }
}

const colors = ['#83b4bd', '#09a5c0', '#787d7e', '#d38c21'];
