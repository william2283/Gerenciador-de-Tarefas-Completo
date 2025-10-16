const API = "http://localhost:8080/tarefas";

const form = document.getElementById("task-form");
const tituloInput = document.getElementById("titulo");
const descricaoInput = document.getElementById("descricao");
const tasksList = document.getElementById("tasks-list");
const countEl = document.getElementById("count");

async function fetchTasks(){
  try {
    const res = await fetch(API);
    if(!res.ok) throw new Error("Erro ao buscar tarefas");
    const tasks = await res.json();
    renderTasks(tasks);
  } catch(err){ console.error(err); tasksList.innerHTML='<li class="task-item">Erro ao carregar tarefas</li>'; }
}

function renderTasks(tasks){
  tasksList.innerHTML="";
  countEl.textContent=tasks.length;
  tasks.forEach(t=>{
    const li=document.createElement("li");
    li.className="task-item";

    const left=document.createElement("div");
    left.className="task-left";
    const title=document.createElement("div");
    title.innerHTML=`<div class="task-title ${t.concluida?'concluded':''}">${t.titulo}</div><div class="task-desc">${t.descricao||''}</div>`;
    left.appendChild(title);

    const actions=document.createElement("div");
    actions.className="task-actions";

    const toggleBtn=document.createElement("button");
    toggleBtn.className="small btn ghost";
    toggleBtn.textContent=t.concluida?"Desmarcar":"Concluir";
    toggleBtn.onclick=()=>toggleComplete(t);

    const deleteBtn=document.createElement("button");
    deleteBtn.className="small btn";
    deleteBtn.style.background="#ef4444";
    deleteBtn.style.color="#fff";
    deleteBtn.textContent="Excluir";
    deleteBtn.onclick=()=>deleteTask(t.id);

    actions.appendChild(toggleBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(left);
    li.appendChild(actions);
    tasksList.appendChild(li);
  });
}

form.addEventListener("submit",async e=>{
  e.preventDefault();
  const newTask={titulo:tituloInput.value.trim(),descricao:descricaoInput.value.trim(),concluida:false};
  if(!newTask.titulo) return alert("Preencha o título");
  try{
    const res=await fetch(API,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(newTask)});
    if(!res.ok) throw new Error("Erro ao criar tarefa");
    tituloInput.value=""; descricaoInput.value="";
    fetchTasks();
  }catch(err){console.error(err);alert("Erro ao criar tarefa")}
});

async function toggleComplete(task){
  try{
    const updated={...task,concluida:!task.concluida};
    const res=await fetch(`${API}/${task.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(updated)});
    if(!res.ok) throw new Error("Erro ao atualizar tarefa");
    fetchTasks();
  }catch(err){console.error(err);alert("Erro ao atualizar tarefa")}
}

async function deleteTask(id){
  if(!confirm("Deseja realmente excluir?")) return;
  try{
    const res=await fetch(`${API}/${id}`,{method:"DELETE"});
    if(!res.ok) throw new Error("Erro ao excluir");
    fetchTasks();
  }catch(err){console.error(err);alert("Erro ao excluir tarefa")}
}

fetchTasks();
