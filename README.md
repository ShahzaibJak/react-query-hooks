# jak-query-2

**jak-query-2** is a query library that simplifies data fetching in React applications by providing custom hooks for making HTTP requests. This library helps you manage API requests and responses efficiently. It includes hooks for GET, POST, PUT, PATCH, and DELETE requests.

## Installation

You can install **jak-query-2** using npm or yarn:

```bash
npm install jak-query-2
# or
yarn add jak-query-2

```
## Usage
### useGet
The useGet hook is used for making GET requests to fetch data from an API. It returns an object with properties to manage the request status and data retrieval.

```bash
import { useGet } from 'jak-query-2';

const MyComponent = () => {
    const { isLoading, isError, error, data, status, refetchData } = useGet('https://api.example.com/data');

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {/* Display data */}
            <pre>{JSON.stringify(data, null, 2)}</pre>

            {/* Trigger a manual data refresh */}
            <button onClick={refetchData}>Refresh Data</button>
        </div>
    );
};
```

### usePost, usePut, useDelete, usePatch
These hooks are used for making POST, PUT, DELETE, and PATCH requests, respectively. They follow a similar usage pattern to useGet. Here's an example using usePost:

```bash
import { usePost } from 'jak-query-2';

const MyComponent = () => {
    const { isLoading, isError, error, data, status, sendPostData } = usePost();

    const postData = {
        // Your request payload
    };

    const apiUrl = 'https://api.example.com/create';

    const handlePost = () => {
        sendPostData(apiUrl, postData);
    };

    if (isLoading) {
        return <div>Posting data...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    if (data) {
        return <div>Data posted successfully!</div>;
    }

    return (
        <div>
            <button onClick={handlePost}>Post Data</button>
        </div>
    );
};
```
## License
This package is ISC licensed.

## Author
Created by ShahzaibJak.
