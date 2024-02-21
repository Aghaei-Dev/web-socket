const socket = new WebSocket(
  'wss://javascript.info/article/websocket/demo/hello'
)

//client send the data
socket.onopen = (e) => {
  alert('[open] Connection established')
  alert('Sending to server')
  socket.send('My name is John')
}

// server send the data
socket.onmessage = (event) => {
  alert(`[message] Data received from server: ${event.data}`)
}

socket.onclose = (event) => {
  if (event.wasClean) {
    alert(
      `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
    )
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[close] Connection died')
  }
}

socket.onerror = (error) => {
  alert(`[error]`)
}

