// const firstNameChange = (e)=>{
//     console.log(e.target.value);
//     const val = e.target.value;
//     if(val.length>1){
//         console.log('correct')
//     }
// }

// function submitForm(e){
//     e.preventDefault();

//     console.log(e);
// }

// function submitForm(e){
//     e.preventDefault();
//     const t = e.target;
//     for(let i =0; i<t.length; i++){
//         console.log(t[i].value);
//         console.log(t[i].type);
//         console.log(t[i]);
//     }


    
// }

function submitForm(e) {
    e.preventDefault();
    const t = e.target;
    const res = {
        hobbies: [],
    };
    for (let i = 0; i < t.length; i++) {
        const ty = t[i].type;
        if (ty !== 'submit') {
            const vl = t[i].value;
            const nm = t[i].name;

            if (ty === 'checkbox' && t[i].checked) {
                res.hobbies.push(vl);
            }
            if (ty !== 'checkbox') { // Changed from 'Checkbox' to 'checkbox'
                res[nm] = vl;
            }
        }
    }
    console.log(res);


}



