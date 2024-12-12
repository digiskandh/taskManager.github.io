import {React, useState}from 'react'

const Form = (props) => {

const [formData, setFormData] = useState({
    id: "",
    name: '',
    importance: ''
})

const formHandler = (e) =>  {
    e.preventDefault()
    if(formData.importance === "0"){
        window.alert("select priority level")
        return
    }
    setFormData({...formData, id: Date.now()})
    props.dataHandler(formData)
    // console.log(formData)
}

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, 
    });
    
  };




  return (
    <form onSubmit={formHandler} className="bg-white p-4 shadow-md rounded-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Add a Task</h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            name='name'
            onChange={handleChange}
            placeholder="Task Name"
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />  
          <select name="importance" onChange={handleChange} className="p-2 border border-gray-300 rounded-md">
            <option value="0">--Select--</option>
            <option value="less important">Less Important</option>
            <option value="very important">Very Important</option>
            <option value="moderate">Moderate</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Task</button>
        </div>
      </form>
  )
}

export default Form