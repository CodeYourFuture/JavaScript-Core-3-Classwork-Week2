# Exercise

## Question 1

Complete the following sentence:

Fetch is a web API that allows you to \_\_**\_ from \_\_\_**.

## Question 2

Complete the rest of this code to connect to the following API: <https://dog.ceo/api/breeds/image/random>

    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json)
      .then(data => console.log(data))
      .catch((error) => console.error(error));

1. Post your code on Slack
2. Post the image you retrieved on Slack


.then((response) => response.json())
      
      .then((json) => console.log(json.message))
      
      .catch ((error) => console.error(error))
