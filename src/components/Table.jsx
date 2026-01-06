export default function Table({ tableData, handleEdit,  handleDelete}) {
    return (
        <div>
            <table className="w-full mx-auto max-w-2xl  border ">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Actions</th>
                    </tr>

                </thead>

                <tbody>
                    {
                        tableData.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td className="border-gray-300 px-4 py-2">{data.Name}</td>
                                    <td className="border-gray-300 px-4 py-2">{data.Email}</td>
                                    <td className="border-gray-300 px-4 py-2">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded"
                                            onClick={() => {
                                                  handleEdit(index)
                                            }}>Edit</button>
                                        <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded" onClick={()=>{
                                             handleDelete(index)
                                        }}>Deleed</button>
                                    </td>
                                </tr>
                            )

                        })
                    }

                </tbody>

            </table>

        </div>)
}