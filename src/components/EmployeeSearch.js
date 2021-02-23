export default function EmployeeSearch({ handleInput }) {
    return (
      <form className="py-1">
        <input className="form-control" type="search" placeholder="Search" onInput={handleInput} />
      </form>
    );
  }