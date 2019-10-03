import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

//Query for books and assign it to a variable to be used
const BOOK_LIST = gql`
  {
    getBooks {
      title
      author
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(BOOK_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.getBooks.map(({ title, author }) => (
    <div>
      <p>
        {title} {author}
      </p>
    </div>
  ));
}

export default Books;
