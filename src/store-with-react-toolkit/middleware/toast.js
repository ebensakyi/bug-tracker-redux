const toast = store=>next=>action=>{
    if(action.type==="error")return //console.log("Toastify: An error occured")
}

export default toast