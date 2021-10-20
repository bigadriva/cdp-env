CREATE TABLE company (
    id SERIAL,
    cnpj VARCHAR(14) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE salesperson (
    id SERIAL,
    internal_id INTEGER,
    salesperson_name VARCHAR(50),
    PRIMARY KEY(id)
);

CREATE TABLE client (
    id SERIAL,
    cnpj VARCHAR(14) NOT NULL,
    client_name VARCHAR(50) NOT NULL,
    id_owner_salesperson INTEGER,
    PRIMARY KEY(id),
    FOREIGN KEY(id_owner_salesperson) REFERENCES salesperson(id)
);

CREATE TABLE sale (
    id SERIAL,
    data DATE,
    PRIMARY KEY(id)
);

CREATE TABLE product (
    id SERIAL,
    product_id VARCHAR(50),
    product_name VARCHAR(50),
    PRIMARY KEY(id)
);

CREATE TABLE acting_region (
    id SERIAL,
    region_id VARCHAR(50),
    region_name VARCHAR(50)
);

CREATE TABLE catarinense_data (
    id SERIAL,
    cnpj VARCHAR(50) NOT NULL,
    area_client VARCHAR(50) NOT NULL,
    nome_ved_cli VARCHAR(50) NOT NULL,
    consultor VARCHAR(50) NOT NULL,
    razao_social VARCHAR(50) NOT NULL,
    _data DATE NOT NULL,
    qtd_s_refat INTEGER,
    qtd_ol INTEGER,
    valor_fat FLOAT,
    valor_ol FLOAT,
    produto VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE close_up (
    id SERIAL,
    cnpj_pdv VARCHAR(50) NOT NULL,
    desc_pdv VARCHAR(50),
    endereco_pdv VARCHAR(50),
    bairro_pdv VARCHAR(50),
    cidade_pdv VARCHAR(50),
    uf_pdv VARCHAR(50),
    desc_subcanal VARCHAR(50),
    cat_xarope VARCHAR(50),
    cat_diges_flaconetes VARCHAR(50),
    cat_diges_liquidos VARCHAR(50),
    cat_polivitaminicos VARCHAR(50),
    cat_fitovital VARCHAR(50),
    consultor VARCHAR(50),
    quantidade_ol INTEGER,
    quantidade_refat INTEGER,
    data DATE,
    PRIMARY KEY(id)
);
