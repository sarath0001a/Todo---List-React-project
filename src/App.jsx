import { useState } from "react"
import From from "./components/Form"
import Table from "./components/Table"
export default function App() {

    const [fromData, setfromData] = useState(
        {
            Name: "",
            Email: "",
        }
    );

    const [tableData, settableData] = useState([])
    const [editbtn, seteditbtn] = useState(null)


    const handleFormDatachange = (key, value) => {
        setfromData({
            ...fromData, [key]: value
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault();

        if (editbtn === null) {
            settableData([...tableData, fromData])
            setfromData({ Name: "", Email: "" })

        }

        else {
            const updated = [...tableData]
            updated[editbtn] = fromData
            settableData(updated)
            setfromData({ Name: "", Email: "" })
            seteditbtn(null)
        }
    }


    const handleEdit = (indx) => {

        setfromData(tableData[indx])
        seteditbtn(indx)
    }

    const handleDelete = (index) => {
     tableData.splice(index, 1)

        settableData([...tableData])

    }



    return (<>
        <From handlechange={handleFormDatachange} handleSubmit={handleSubmit} fromData={fromData} editbtn={editbtn} />
        <Table tableData={tableData} handleEdit={handleEdit} handleDelete={handleDelete} />
    </>)
};