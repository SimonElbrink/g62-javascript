function runSynchronousExample() {
    console.log("Synchronous 1");
    console.log("Synchronous 2");
    console.log("Synchronous 3");
    // If there is a logic in this line that takes a long time, it will block the program, and we will not be able to do anything else.
    console.log("Synchronous 4");
    console.log("Synchronous 5");
}

//runSynchronousExample();



function runBlockingExample() {
    console.log("Start");

    // Simulate heavy work (blocking loop)
    for (let i = 0; i < 10000000000000; i++) {
    }

    console.log("End");
}

//runBlockingExample();


// Non-Blocking with setTimeout
function runNonBlockingExample() {
    console.log("Start");

    setTimeout(() => {

        console.log("This runs later");

    }, 2000);

    console.log("End");
}

/*
  APIs that CREATE asynchronous behavior:
- setTimeout: Executes a function after a specified delay.
- setInterval: Executes a function repeatedly with a fixed time delay between each call.
- Fetch API: Allows asynchronous network requests to fetch resources.
- Event Handlers: Respond to events asynchronously without blocking the main thread.
 */

//runNonBlockingExample();


// fetch() is a built-in function used to send an HTTP request to a server
// and receive data.

// fetch() is asynchronous
// JavaScript does NOT wait for the response
// - The program continues running while the data is being fetched


function callAPIExample() {
    console.log("Start");

    fetch("https://jsonplaceholder.typicode.com/todos/1")

        .then(response => {
            if (!response.ok){
                throw new Error("Request failed with status: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data: ", data)
        })
        .catch(error => {
            // This runs if any error happens (network or status error)
            console.error("Error:", error.message);
        });

    console.log("End");

}

// callAPIExample();

// Async/Await

async function fetchTodoExampleAsync() {
    console.log("Start");

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status} ${response.statusText}`);
        }

        // Convert response to JSON (also async)
        const data = await response.json();
        console.log("Data:", data);

    }
    catch(error){
        console.error("Error:", error.message);
    }

    console.log("End");

}

//fetchTodoExampleAsync();

const fetchTodoExampleAsync2 = async () => {
    console.log("Start");
    try {
        // Call API
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        // Check status
        if (!response.ok) {
            throw new Error(
                `Request failed: ${response.status} ${response.statusText}`
            );
        }
        // Convert to JSON
        const data = await response.json();
        console.log("Data:", data);

    } catch (error) {
        console.error("Error:", error.message);
    }

    console.log("End");
};


//------------------------------


// 1. Create (POST) - Sending new data to the server
const createTodoAsync = async () => {
    console.log("Creating new Todo...");

    const newTodo = {
        title: "Buy groceries",
        completed: false,
        userId: 1
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST", // Specify the method as POST
            headers: {
                "Content-Type": "application/json" // Tell the server we are sending JSON data
            },
            body: JSON.stringify(newTodo) // Convert our object to a JSON string
        });

        if (!response.ok) {
            throw new Error(`Failed to create Todo: ${response.status}`);
        }

        const data = await response.json();
        console.log("Todo created successfully! ✅", data);

    } catch (error) {
        console.error("Error creating Todo:", error.message);
    }
};

//createTodoAsync();


//Update (PUT) - Changing existing data on the server
const updateTodoAsync = async (id) => {
    console.log(`Updating Todo with ID: ${id}...`);

    const updatedData = {
        title: "Updated task name",
        completed: true
    };

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "PUT", // Specify the method as PUT
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        });

        if (!response.ok) {
            throw new Error(`Failed to update Todo: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Todo ${id} updated! ✅`, data);

    } catch (error) {
        console.error(`Error updating Todo ${id}:`, error.message);
    }
};

//updateTodoAsync(1);

//Delete (DELETE) - Removing data from the server
const deleteTodoAsync = async (id) => {
    console.log(`Deleting Todo with ID: ${id}...`);

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "DELETE" // Specify the method as DELETE
        });

        if (!response.ok) {
            throw new Error(`Failed to delete Todo: ${response.status}`);
        }

        // Often a successful delete returns no data, or a success message
        console.log(`Todo ${id} deleted successfully! ✅`);

    } catch (error) {
        console.error(`Error deleting Todo ${id}:`, error.message);
    }
};