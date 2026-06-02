import { createContext, useContext, useState } from "react";

const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");

    return saved ? JSON.parse(saved) : [];
  });

  const saveEmployees = (updated) => {
    setEmployees(updated);

    localStorage.setItem(
      "employees",
      JSON.stringify(updated)
    );
  };

  const addEmployee = (employee) => {
    const updated = [
      ...employees,
      {
        ...employee,
        id: Date.now(),
      },
    ];

    saveEmployees(updated);
  };

  const deleteEmployee = (id) => {
    const updated = employees.filter(
      (employee) => employee.id !== id
    );

    saveEmployees(updated);
  };

  const updateEmployee = (
    id,
    updatedEmployee
  ) => {
    const updated = employees.map(
      (employee) =>
        employee.id === id
          ? {
              ...employee,
              ...updatedEmployee,
            }
          : employee
    );

    saveEmployees(updated);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        deleteEmployee,
        updateEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployees() {
  return useContext(EmployeeContext);
}