import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import ToggleButton from "./ToggleButton.jsx";
import Tittle from "./assets/tittle.svg"; 

const API = "https://substantive.pythonanywhere.com/";



const App = () => {
  const [interactions, setInteractions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchText, setSearchText] = useState('');

  const fetchInteractions = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.interactions && data.interactions.length > 0) {
        setInteractions(data.interactions);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchInteractions(API);
  }, []);

  const columns = [
    {
      name: "Date",
      selector: "date",
      sortable: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Sector",
      selector: "sector_id",
      sortable: true,
    },
  ];

  const toggleBackground = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredInteractions = interactions.filter((interaction) =>
    Object.values(interaction).some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const customStyles = {
    headRow: {
      style: {
        background: "#443C68",
      },
    },
    headCells: {
      style: {
        color: "#fff",
        fontSize: "1.8rem",
      },
    },
    rows: {
      style: {
        fontSize: "1.6rem",
        cursor: "pointer",
        background: isDarkMode ? "#D9D9D9" : "#2b2b2b",
      },
    },
    pagination: {
      style: {
        background: "#443C68",
        color: "#fff",
      },
    },
  };

  const containerStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "center",
    backgroundColor: isDarkMode ? "#D9D9D9" : "#2b2b2b",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: isDarkMode ? "#fff" : "#000", 
  };



  const tableStyle = {
    maxWidth: "200rem",
    width: "100%",
    fontSize: "1.8rem", 
  };


  const searchBarStyle = {
    marginBottom: "1rem",
    padding: "0.5rem",
    fontSize: "1rem",
  };

  const logoStyle = {
    height: "8em", 
    marginRight: "0.5rem", 
  };

  return (
    <div style={containerStyle}>

     <div style={titleStyle}>
        <img src={Tittle}  style={logoStyle} />
      </div>
  
      <ToggleButton isDarkMode={isDarkMode} onClick={toggleBackground} />
      
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearch}
        style={searchBarStyle}
      />
  
      <div style={tableStyle}>
        <DataTable
          columns={columns}
          data={filteredInteractions}
          pagination
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};


  
  export default App;

