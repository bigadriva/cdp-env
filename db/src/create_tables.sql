-- Cliente da driva
CREATE TABLE company (
    cnpj VARCHAR(14),
    name VARCHAR(100),
    PRIMARY KEY(cnpj)
);

CREATE TABLE product (
    internal_id VARCHAR(100),
    name VARCHAR(100),
    type VARCHAR(100),
    PRIMARY KEY(internal_id)
);

CREATE TABLE acting_region (
    city VARCHAR(100),
    address VARCHAR(100),
    neighborhood VARCHAR(100),
    PRIMARY KEY(city)
);

CREATE TABLE salesperson (
    internal_id VARCHAR(100),
    name VARCHAR(100),
    company_cnpj VARCHAR(14),
    PRIMARY KEY(internal_id, name),
    FOREIGN KEY(company_cnpj) REFERENCES company(cnpj)
);

-- Cliente da empresa que é cliente da driva.
CREATE TABLE client (
    cnpj VARCHAR(14),
    name VARCHAR(100),
    acting_region_city VARCHAR(100) NOT NULL,
    acting_region_neighborhood VARCHAR(100),
    acting_region_address VARCHAR(100) NOT NULL,
    PRIMARY KEY(cnpj),
    FOREIGN KEY(acting_region_city) REFERENCES acting_region(city)
);

CREATE TABLE buys_from (
    company_cnpj VARCHAR(14),
    client_cnpj VARCHAR(14),
    PRIMARY KEY(company_cnpj, client_cnpj),
    FOREIGN KEY(company_cnpj) REFERENCES company(cnpj),
    FOREIGN KEY(client_cnpj) REFERENCES client(cnpj)
);

CREATE TABLE sells_to (
    client_cnpj VARCHAR(14),
    salesperson_internal_id VARCHAR(100),
    salesperson_name VARCHAR(100),
    PRIMARY KEY(client_cnpj, salesperson_internal_id),
    FOREIGN KEY(client_cnpj) REFERENCES client(cnpj),
    FOREIGN KEY(salesperson_internal_id, salesperson_name) REFERENCES salesperson(internal_id, name)
);

CREATE TABLE sells (
    salesperson_internal_id VARCHAR(100),
    salesperson_name VARCHAR(100),
    product_internal_id VARCHAR(100),
    date DATE NOT NULL,
    value FLOAT NOT NULL,
    PRIMARY KEY(salesperson_internal_id, salesperson_name, product_internal_id),
    FOREIGN KEY(salesperson_internal_id, salesperson_name) REFERENCES salesperson(internal_id, name),
    FOREIGN KEY(product_internal_id) REFERENCES product(internal_id)
);

CREATE TABLE acts_in (
    salesperson_internal_id VARCHAR(100) NOT NULL,
    salesperson_name VARCHAR(100) NOT NULL,
    acting_region_city VARCHAR(100) NOT NULL,
    acting_region_neighborhood VARCHAR(100),
    acting_region_address VARCHAR(100) NOT NULL,
    PRIMARY KEY(salesperson_internal_id, salesperson_name, acting_region_city, acting_region_address),
    FOREIGN KEY(salesperson_internal_id, salesperson_name) REFERENCES salesperson(internal_id, name),
    FOREIGN KEY(acting_region_city) REFERENCES acting_region(city)
);

CREATE TABLE characteristics (
    name_array TEXT[] NOT NULL,
    value_array FLOAT[] NOT NULL,
    order_array INTEGER[] NOT NULL,
    company_cnpj VARCHAR(14) NOT NULL,
    client_cnpj VARCHAR(14) NOT NULL,
    PRIMARY KEY(name_array, value_array),
    FOREIGN KEY(company_cnpj) REFERENCES company(cnpj),
    FOREIGN KEY(client_cnpj) REFERENCES client(cnpj)
)
