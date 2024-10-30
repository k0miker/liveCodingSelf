# Headers!

Here you will learn how to inspect and read http headers, using the browser's developer tools.

## Tasks

No coding required!

The code has already been written. Instead, perform the tasks below and add your answers directly here in the README.

For this exercise, we are assuming the use of Google Chrome or Chromium.

### Task 1

- Open [index.html](./index.html) with Live Server
- Open the browser **Developer Tools** and select the "Network" tab
- On the webpage, click "Button 1" and inspect the request / response on the "Network" tab

- Q: Looking at the request with type "fetch", what is the value of the "Authorization" request header?
- A: Potato

- Q: Looking at the request with type "fetch", what is the value of the "Accept" request header?
- A: text/plain

- Q: Looking at the request with type "fetch", what does the "Response" tab show you?
- A: Failed to load response data: No data found for resource with given identifier

### Task 2

- Clear all the log entries on the "Network" tab
- Click "Button 2" and inspect the request / response

- Q: Looking at the request with type "fetch", what is the value of the "Authorization" request header?
- A: Tomato

- Q: Looking at the request with type "fetch", what is the URL of the request?
- A: https://api.dictionaryapi.dev/api/v2/entries/en/phantasmagoria

- Q: Looking at the request with type "fetch", what is the request Method?
- A: GET

- Q: Looking at the response with type "fetch", what is the value of the "Server" response header?
- A: cloudflare

- Q: Looking at the response with type "fetch", what is the value of the "X-Powered-By" response header?
- A: Express

### Task 3

- Clear all the log entries on the "Network" tab
- Click "Button 3" and inspect the request/response

- Q: Looking at the request with type "fetch", what is the value of the "Authorization" request header?
- A: Aubergine

- Q: Looking at the response with type "fetch", what is the value of the "Server" response header?
- A: Cowboy

- Q: Looking at the response with type "fetch", what is the value of the "Access-Control-Allow-Origin" response header?
- A: \*

- Q: Looking at the response with type "fetch", what is the value of the "Content-Type" response header?
- A: text/html; charset=utf-8
