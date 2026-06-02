import { useState } from "react";
import { Link } from "react-router-dom";

import { useEmployees } from "../context/EmployeeContext";
import MainLayout from "../layouts/MainLayout";

function AddEmployee() {
  const { addEmployee } = useEmployees();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !department.trim() ||
      !position.trim() ||
      !salary.trim()
    ) {
      setError("All fields are required");
      return;
    }

    if (isNaN(salary)) {
      setError("Salary must be a number");
      return;
    }

    setError("");

    addEmployee({
      name,
      email,
      department,
      position,
      salary,
    });

    setName("");
    setEmail("");
    setDepartment("");
    setPosition("");
    setSalary("");

    alert("Employee added successfully");
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-slate-950 text-white p-8">

        <div className="max-w-lg mx-auto">

          <Link
            to="/dashboard"
            className="inline-block mb-6 bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700"
          >
            ← Back to Dashboard
          </Link>

          <div className="bg-slate-900 p-8 rounded-2xl">

            <h1 className="text-3xl font-bold mb-6">
              Add Employee
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
                  setDepartment(e.target.value)
                }
                className="w-full p-3 rounded-lg bg-slate-800"
              />

              <input
                type="text"
                placeholder="Position"
                value={position}
                onChange={(e) =>
                  setPosition(e.target.value)
                }
                className="w-full p-3 rounded-lg bg-slate-800"
              />

              <input
                type="text"
                placeholder="Salary"
                value={salary}
                onChange={(e) =>
                  setSalary(e.target.value)
                }
                className="w-full p-3 rounded-lg bg-slate-800"
              />

              {error && (
                <p className="text-red-500">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-green-600 py-3 rounded-lg"
              >
                Add Employee
              </button>

            </form>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default AddEmployee;