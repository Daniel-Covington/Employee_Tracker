-- inserting departments
INSERT INTO department (name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

-- inserting roles
INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 120000, 1),
       ('Salesperson', 80000, 1),
       ('Lead Engineer', 150000, 2),
       ('Software Engineer', 120000, 2),
       ('Accountant', 100000, 3),
       ('Legal Team Lead', 250000, 4),
       ('Lawyer', 190000, 4);

-- inserting employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL),
       ('Sarah', 'Smith', 2, 1),
       ('William', 'Johnson', 3, NULL),
       ('Jennifer', 'Williams', 4, 3),
       ('Michael', 'Brown', 5, NULL),
       ('Jessica', 'Jones', 6, 5);