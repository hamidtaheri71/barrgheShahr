import SearchBar from "react-material-ui-searchbar";
import { useState } from "react";

export default function Search(props) {
  const [searchStr, setSearchStr] = useState("");
  const handleSearch = () => {
    if (searchStr)
      props.history.push(`/list/${searchStr.split(" ").join(":")}`);
    else props.history.push("/");
  };
  return (
    <SearchBar
      onChange={(newValue) => {
        setSearchStr(newValue);
      }}
      onRequestSearch={() => handleSearch()}
      value={searchStr}
    />
  );
}
