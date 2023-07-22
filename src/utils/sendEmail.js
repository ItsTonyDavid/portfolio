const SendEmail = (data) => {
    let status = null;
    const config = {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    }
    
    fetch("https://formsubmit.co/ajax/a2096d4b63dc8d07db29de8413c093817979031a11ad2740de046eed1a84144b", config)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        status = true;
    }).catch(error => {
        console.log(error)
        status = false;
    });

    return status;
}

export default SendEmail;