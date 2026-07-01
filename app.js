const tools = [
{
name:"ChatGPT",
category:"Writing",
rating:"4.9",
price:"Free + Pro"
},
{
name:"Claude",
category:"Writing",
rating:"4.8",
price:"Pro"
},
{
name:"Cursor",
category:"Coding",
rating:"4.9",
price:"Pro"
},
{
name:"Perplexity",
category:"Research",
rating:"4.8",
price:"Free"
},
{
name:"Midjourney",
category:"Image",
rating:"4.7",
price:"Paid"
},
{
name:"Runway",
category:"Video",
rating:"4.8",
price:"Pro"
}
];

const grid = document.getElementById("toolsGrid");

function render(data){

grid.innerHTML = "";

data.forEach(tool=>{

grid.innerHTML += `
<div class="tool-card">

<h3 class="text-xl font-bold">
${tool.name}
</h3>

<p class="text-gray-400 mt-2">
${tool.category}
</p>

<div class="flex justify-between mt-5">

<span>
⭐ ${tool.rating}
</span>

<span class="price">
${tool.price}
</span>

</div>

</div>
`;
});
}

render(tools);

document
.getElementById("search")
.addEventListener("input",(e)=>{

const filtered =
tools.filter(tool =>
tool.name
.toLowerCase()
.includes(e.target.value.toLowerCase())
);

render(filtered);
});
