import { Link } from "react-router-dom";

import { useEmployees } from "../context/EmployeeContext";

import MainLayout from "../layouts/MainLayout";

function Dashboard() {
  const { employees } = useEmployees();

  const totalEmployees =
    employees.length;

  const totalDepartments =
    new Set(
      employees.map(
        (employee) =>
          employee.department
      )
    ).size;

  const highestSalary =
    employees.length > 0
      ? Math.max(
          ...employees.map(
            (employee) =>
              Number(
                employee.salary
              )
          )
        )
      : 0;

  const recentEmployees =
    [...employees]
      .slice(-5)
      .reverse();

  return (
    <MainLayout>
      <div className="min-h-screen bg-slate-950 text-white p-8">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold mb-2">
            Dashboard
          </h1>

          <p className="text-gray-400 mb-10">
            Employee Management System
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">

            <div className="bg-slate-900 p-6 rounded-2xl">
              <h3 className="text-gray-400 mb-2">
                Total Employees
              </h3>

              <p className="text-4xl font-bold">
                {totalEmployees}
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl">
              <h3 className="text-gray-400 mb-2">
                Departments
              </h3>

              <p className="text-4xl font-bold">
                {totalDepartments}
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl">
              <h3 className="text-gray-400 mb-2">
                Highest Salary
              </h3>

              <p className="text-4xl font-bold">
                ₹{highestSalary}
              </p>
            </div>

          </div>

          <div className="bg-slate-900 p-6 rounded-2xl mb-10">

            <h2 className="text-2xl font-bold mb-4">
              Quick Actions
            </h2>

            <div className="flex flex-wrap gap-4">

              <Link
                to="/add-employee"
                className="bg-green-600 px-5 py-3 rounded-lg"
              >
                Add Employee
              </Link>

              <Link
                to="/employees"
                className="bg-blue-600 px-5 py-3 rounded-lg"
              >
                Manage Employees
              </Link>

            </div>

          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">

            <h2 className="text-2xl font-bold mb-4">
              Recent Employees
            </h2>

            {recentEmployees.length === 0 ? (
              <p className="text-gray-400">
                No employees added yet.
              </p>
            ) : (
              <div className="space-y-3">

                {recentEmployees.map(
                  (employee) => (
                    <div
                      key={employee.id}
                      className="bg-slate-800 p-4 rounded-lg"
                    >
                      <h3 className="font-bold">
                        {employee.name}
                      </h3>

                      <p className="text-gray-400">
                        {
                          employee.position
                        }{" "}
                        •{" "}
                        {
                          employee.department
                        }
                      </p>
                    </div>
                  )
                )}

              </div>
            )}

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default Dashboard;