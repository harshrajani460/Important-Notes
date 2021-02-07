var cor_ans=0;
var khot=0;
function chek(id,ans,lid)
{
    var ele=document.getElementById(id);
    var L=document.getElementById(lid);
    var E=ele.value;
    var n = E.localeCompare(ans);
    if(n!=0) 
    {
        khot++;
        L.innerHTML="Khoto";
        ele.style.border="2px solid red";
    }
    else
    {
        cor_ans++;
         L.innerHTML="Sacho vala"
         ele.style.border="1px solid black";
    }
    L.style.visibility="visible";

}
function result()
{
    var co=document.getElementById("corr");
    var co1=document.getElementById("cor");
    co.innerHTML+=khot;
    

    
    
    co1.innerHTML+=cor_ans;
    co1.style.visibility="visible";
    co.style.visibility="visible";
    

}