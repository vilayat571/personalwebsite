import { useEffect } from "react";

export default function Watchlist() {
  useEffect(() => {
    const details = localStorage.getItem("userDetails");

    fetch(
      `https://api.vilayatsafarov.com/api/v1/account/wish-list/${
        details && JSON.parse(details).id
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  

  return <div></div>;
}
