function test(event){
    event.preventDefault();
    var exp=event.target.expense.value;
    var des=event.target.description.value;
    var about=event.target.about.value;

    const obj={
        exp,
        des,
        about
    }
localStorage.setItem(obj.exp,JSON.stringify(obj))
showuser(obj)
}
function showuser(obj)
{
    const parente = document.getElementById('list')
    const childe=document.createElement('li')
    childe.textContent=obj.exp+'-'+ obj.des+'-'+obj.about;
    parente.appendChild(childe)

    const deletebutton=document.createElement('input')
    deletebutton.type="button"
    deletebutton.value='Delete Expense'
    deletebutton.onclick=()=>{
        localStorage.removeItem(obj.exp)
        parente.removeChild(childe)
    }
    const editbutton=document.createElement('input')
    editbutton.type="button"
    editbutton.value='Edit Expense'
    editbutton.onclick=()=>{
        localStorage.removeItem(obj.exp)
        parente.removeChild(childe)
        document.getElementById('exp').value=obj.exp
        document.getElementById('description').value=obj.description
        document.getElementById('about').value=obj.about
    }
    childe.appendChild(deletebutton)
    childe.appendChild(editbutton)
    parente.appendChild(childe)
}