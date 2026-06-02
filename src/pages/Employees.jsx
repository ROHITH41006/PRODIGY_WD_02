import { Link } from "react-router-dom";

import { useEmployees } from "../context/EmployeeContext";

import MainLayout from "../layouts/MainLayout";

function Employees() {
  const {
    employees,
    deleteEmployee,
  } = useEmployees();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (confirmDelete) {
      deleteEmployee(id);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-slate-950 text-white p-8">

        <div className="max-w-7xl mx-auto">

          <Link
            to="/dashboard"
            className="inline-block mb-6 bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700"
          >
            ← Back to Dashboard
          </Link>

          <div className="flex justify-between items-center mb-8">

            <h1 className="text-4xl font-bold">
              Employee Management
            </h1>

            <Link
              to="/add-employee"
              className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg"
            >
              Add Employee
            </Link>

          </div>

          {employees.length === 0 ? (
            <div className="bg-slate-900 p-8 rounded-xl text-center">
              <p className="text-gray-400">
                No employees found.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto bg-slate-900 rounded-xl">

              <table className="w-full">

                <thead className="bg-slate-800">

                  <tr>

                    <th className="p-4 text-left">
                      Name
                    </th>

                    <th className="p-4 text-left">
                      Email
                    </th>

                    <th className="p-4 text-left">
                      Department
                    </th>

                    <th className="p-4 text-left">
                      Position
                    </th>

                    <th className="p-4 text-left">
                      Salary
                    </th>

                    <th className="p-4 text-left">
                      Actions
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {employees.map(
                    (employee) => (
                      <tr
                        key={employee.id}
                        className="border-t border-slate-700"
                      >

                        <td className="p-4">
                          {employee.name}
                        </td>

                        <td className="p-4">
                          {employee.email}
                        </td>

                        <td className="p-4">
                          {employee.department}
                        </td>

                        <td className="p-4">
                          {employee.position}
                        </td>

                        <td className="p-4">
                          ₹{employee.salary}
                        </td>

                        <td className="p-4">

                          <div className="flex gap-2">

                            <Link
                              to={`/edit-employee/${employee.id}`}
                              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                            >
                              Edit
                            </Link>

                            <button
                              onClick={() =>
                                handleDelete(
                                  employee.id
                                )
                              }
                              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                            >
                              Delete
                            </button>

                          </div>

                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

            </div>
          )}

        </div>

      </div>
    </MainLayout>
  );
}

export default Employees;