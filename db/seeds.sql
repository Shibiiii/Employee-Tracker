INSERT INTO department
    (name)
    VALUES
    ('Engineering'),
    ('Sales'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
    VALUES
    ('Software engineer', 85000, 1),
    ('Salesperson', 75000, 2),
    ('Accountant', 125000, 3),
    ('Lawyer', 200000, 4);