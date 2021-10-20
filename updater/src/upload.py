import os

def toPostgre(dataframe, table):
    from sqlalchemy import create_engine
    import io

    engine = create_engine(
        f"postgresql+psycopg2://{os.getenv('POSTGRESQL_USER')}:{os.getenv('POSTGRESQL_PASSWORD')}@{os.getenv('POSTGRESQL_HOST')}:{os.getenv('POSTGRESQL_PORT')}/{os.getenv('POSTGRESQL_DATABASENAME')}")
    dataframe.head(0).to_sql(table, engine, index=False, if_exists='replace')

    conn = engine.raw_connection()
    cur = conn.cursor()
    output = io.StringIO()
    dataframe.to_csv(output, sep='\t', header=False, index=False)
    output.seek(0)
    contents = output.getvalue()
    cur.copy_from(output, table, null="")  # null values become ''
    conn.commit()
