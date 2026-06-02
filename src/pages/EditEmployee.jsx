import { useState } from "react";
import {
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";

import { useEmployees } from "../context/EmployeeContext";

import MainLayout from "../layouts/MainLayout";

function EditEmployee() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    employees,
    updateEmployee,
  } = useEmployees();

  const employee = employees.find(
    (emp) =>
      emp.id === Number(id)
  );

  const [name, setName] = useState(
    employee?.name || ""
  );

  const [email, setEmail] = useState(
    employee?.email || ""
  );

  const [department, setDepartment] =
    useState(
      employee?.department || ""
    );

  const [position, setPosition] =
    useState(
      employee?.position || ""
    );

  const [salary, setSalary] = useState(
    employee?.salary || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !department.trim() ||
      !position.trim() ||
      !salary.trim()
    ) {
      alert("All fields are required");
      return;
    }

    if (isNaN(salary)) {
      alert("Salary must be a number");
      return;
    }

    updateEmployee(Number(id), {
      name,
      email,
      department,
      position,
      salary,
    });

    navigate("/employees");
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-slate-950 text-white p-8">

        <div className="max-w-lg mx-auto">

          <Link
            to="/employees"
            className="inline-block mb-6 bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700"
          >
            ← Back to Employees
          </Link>

          <div className="bg-slate-900 p-8 rounded-2xl">

            <h1 className="text-3xl font-bold mb-6">
              Edit Employee
            </h1>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full p-3 rounded-lg bg-slate-800"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full p-3 rounded-lg bg-slate-800"
              />

              <input
                type="text"
                placeholder="Department"
                value={department}
                onChange={(e) =>
                  setDepartment(
                    e.target.value
                  )
                }
                className="w-full p-3 rounded-lg bg-slate-800"
              />

              <input
                type="text"
                placeholder="Position"
                value={position}
                onChange={(e) =>
                  setPosition(
                    e.target.value
                  )
                }
                className="w-full p-3 rounded-lg bg-slate-800"
              />

              <input
                type="text"
                placeholder="Salary"
                value={salary}
                onChange={(e) =>
                  setSalary(
                    e.target.value
                  )
                }
                className="w-full p-3 rounded-lg bg-slate-800"
              />

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg"
              >
                Update Employee
              </button>

            </form>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default EditEmployee;