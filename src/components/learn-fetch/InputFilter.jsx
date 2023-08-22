
export default function InputFilter({ filter, setFilter }) {
  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div className="m-2 mt-6 flex justify-center">
      <label className="mr-2 w-1/12 p-2" for="text-input">Digite: </label>
      <input id="text-input"
        className="w-10/12 p-2 h-10 rounded bg-gray-200" 
        value={filter}
        onChange={handleFilter}
      />
    </div>
  )
}

