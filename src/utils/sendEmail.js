const SendEmail = async (data) => {
  try {
    const config = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = await fetch("https://formsubmit.co/ajax/itsTonyDev@gmail.com", config);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}


export default SendEmail;
