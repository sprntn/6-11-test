let data = [
    {
                "id": "1",
                "name": "google",
                "url": "www.google.com",
                "subData": [
                    {
                        "id": "2",
                        "name": "walla",
                        "url": "www.walla.co.il"
                    },
                    {
                        "id": "3",
                        "name": "ynet",
                        "url": "www.ynet.co.il",
                        "subData": [
                            {
                                "id": "4",
                                "name": "mako",
                                "url": "www.mako.co.il"
                            },
                            {
                                "id": "5",
                                "name": "google",
                                "url": "www.google.com"
                            },
                            {
                                "id": "6",
                                "name": "walla",
                                "url": "www.walla.co.il"
                            }
                        ]
                    },
                    {
                        "id": "7",
                        "name": "google",
                        "url": "www.google.com"
                    }
                ]
            },
            {
                "id": "8",
                "name": "ynet",
                "url": "www.ynet.co.il",
                "subData": [
                    {
                        "id": "9",
                        "name": "walla",
                        "url": "www.walla.co.il"
                    },
                    {
                        "id": "10",
                        "name": "google",
                        "url": "www.google.com",
                        "subData": [
                            {
                                "id": "11",
                                "name": "ynet",
                                "url": "www.ynet.co.il",
                                "subData": [
                                    {
                                        "id": "12",
                                        "name": "walla",
                                        "url": "www.walla.co.il"
                                    },
                                    {
                                        "id": "13",
                                        "name": "google",
                                        "url": "www.google.com"
                                    },
                                    {
                                        "id": "14",
                                        "name": "mako",
                                        "url": "www.mako.co.il"
                                    }
                                ]
                            },
                            {
                                "id": "15",
                                "name": "google",
                                "url": "www.google.com"
                            },
                            {
                                "id": "16",
                                "name": "mako",
                                "url": "www.mako.co.il"
                            }
                        ]
                    },
                    {
                        "id": "17",
                        "name": "walla",
                        "url": "www.walla.co.il",
                        "subData": [
                            {
                                "id": "18",
                                "name": "ynet",
                                "url": "www.ynet.co.il"
                            },
                            {
                                "id": "19",
                                "name": "google",
                                "url": "www.google.com"
                            },
                            {
                                "id": "20",
                                "name": "walla",
                                "url": "www.walla.co.il"
                            }
                        ]
                    },
                    {
                        "id": "21",
                        "name": "mako",
                        "url": "www.mako.co.il"
                    }
                ]
            }
            
];

//let colors = ['red', 'yellow', 'blue', 'orange'];
const colors = ['#83b4bd', '#09a5c0', '#787d7e', '#d38c21'];
//const mainDiv = document.querySelector("#div1");
//const mainDiv = document.getElementById("div1");

window.addEventListener('load', () => {
    const mainDiv = document.getElementById("div1");
    loopData(mainDiv, data, 0);

    //getData();
})

function getData(){
    //fetch("data.json").then( res => {
    fetch("https://github.com/sprntn/6-11-test/blob/main/data.json").then( res => {
        //console.log(res);
        const mainDiv = document.getElementById("div1");
        loopData(mainDiv, res, 0);
    })
}

function loopData(fatherElement , data, depth){
    //const newDiv = document.createElement("div");
    //newDiv.classList.add("dataContainer");
    for (const element of data){
        
        addData(fatherElement ,element, depth);
        /*
        if(element.subData){
            loopData(element.subData);
        }
        */
    }
    
}

function addData(fatherElement ,item, depth){
    console.log(`id ${item.id} in depth ${depth}`)
    //console.log(`id: ${item.id} name: ${item.name} url: ${item.url}`);
    const newItem = document.createElement("div");
    newItem.innerHTML = `<p>id: ${item.id}</p><p>Site name: ${item.name}</p><p><a href="https://${item.url}" target="_blank">Site Url:${item.name}</a></p>`;
    newItem.classList.add("childDiv","dataContainer");
    newItem.style.background = colors[depth%(colors.length)];
    //mainDiv.appendChild(newItem);
    fatherElement.appendChild(newItem);
    if(item.subData){
        loopData(newItem, item.subData, depth+1);
    }
}

