export default function From({ handlechange, handleSubmit,fromData,editbtn }) {


    return (<div className="p-6 mx-auto max-w-2xl ">
        <h2 className="text-2xl font-semibold mb-4">From and Table Example</h2>

        <form className="border rounded-lg p-4 " onSubmit={handleSubmit}>
            <input
                placeholder="Name"
                type="text"
                className="
                w-full 
                p-2 border 
                rounded 
                mb-2"
                value={fromData.Name}
                onChange={(e) => {
                    const { value } = e.target
                    handlechange("Name", value)
                }} required


            ></input> <br />

            <input
                placeholder="Email"
                type="email"
                className="
                w-full
                p-2
                border
                rounded 
                mb-2"
                value={fromData.Email}
                onChange={(e) => {
                    const { value } = e.target
                    handlechange("Email", value)
                }} required

            ></input> <br />

            <button
                type="submit"
                className="
                bg-blue-500
                text-white
                px-4
                py-2
                rounded"
            >{editbtn === null?"Add":"Edit"}</button>
        </form>
    </div>)
} 