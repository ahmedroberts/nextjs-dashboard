-- INSERT INTO table_name (column1, column2, column3, ...)
-- VALUES (value1, value2, value3, ...);

--  id: '3958dc9e-742f-4377-85e9-fec4b6a6449a',
--     name: 'Ahmed Roberts',
--     email: 'ahmed@roberts.com',
--     image_url: '/customers/ahmed-roberts.png',

INSERT INTO customers (id, name, email, image_url)
        VALUES ('3958dc9e-742f-4377-85e9-fec4b6a6449a',
        'Ahmed Roberts', 
        'ahmed@roberts.com', 
        '/customers/ahmed-roberts.png');
        
-- INSERT INTO customers (id, name, email, image_url)
--         VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
--         ON CONFLICT (id) DO NOTHING;

INSERT INTO invoices (customer_id, amount, status, date)
    VALUES 
    ('3958dc9e-742f-4377-85e9-fec4b6a6449a', 18095, 'pending', '2022-10-17'),
    ('3958dc9e-742f-4377-85e9-fec4b6a6449a', 23659, 'pending', '2023-7-21'),
    ('3958dc9e-742f-4377-85e9-fec4b6a6449a', 8657, 'pending', '2024-3-11');

UPDATE invoices
SET status = 'paid'
WHERE date = '2023-7-21'

UPDATE customers
SET email = 'raikage@ahmed.co'
WHERE email = 'ahmed@roberts.com'

-- INSERT INTO invoices (customer_id, amount, status, date)
--         VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
--         ON CONFLICT (id) DO NOTHING;