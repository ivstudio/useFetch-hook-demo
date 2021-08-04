import React from "react";
import useFetch from "./useFetch";
const url = "https://jsonplaceholder.typicode.com/albums";
const App = () => {
  const { error, loading, response } = useFetch(url);

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {response?.length > 0 ? (
            response.map((item) => <li key={item.id}>{item.title}</li>)
          ) : (
            <li>Empty state</li>
          )}
        </ul>
      )}
    </>
  );
};

export default App;
