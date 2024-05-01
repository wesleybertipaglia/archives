import sqlite3

class Database:
    def __init__(self, path):
        self.connection = sqlite3.connect(path)
        self.cursor = self.connection.cursor()

    def handle_transaction(self, transaction:str, many:bool=False):
        try:
            if many:
                self.cursor.executemany(transaction)
            else:
                self.cursor.execute(transaction)
            self.connection.commit()
            print(f'Success!')
        except Exception as exc:
            print(f'Ops! Something was wrong - {exc}.')
            self.connection.rollback()

    def select(self, query:str):
        self.cursor.execute(query)
        return self.cursor.fetchall()

    def create_table(self, table:str, fields:str):        
        transaction = f'CREATE TABLE {table} ({fields})'
        self.handle_transaction(transaction)

    def delete_table(self, table:str):
        transaction = f'DROP TABLE {table}'
        self.handle_transaction(transaction)

    def update_table(self, table:str, update:str):
        transaction = f'ALTER TABLE {table} {update}'
        self.handle_transaction(transaction)

    def create_row(self, table:str, field_names:str, fields:tuple, many:bool=False):
        fields = "(" + ', '.join(f"'{field}'" for field in fields) + ")"
        transaction = f'INSERT INTO {table} {field_names} VALUES {fields}'    
        self.handle_transaction(transaction, many)

    def delete_row(self, table:str, id:int):
        transaction = f'DELETE FROM {table} WHERE id = {id}'
        self.handle_transaction(transaction)

    def update_row(self, table:str, update:str, id:int):
        transaction = f'UPDATE {table} SET {update} WHERE id = {id}'
        self.handle_transaction(transaction)

    def execute_sql(self, sql:str):
        self.handle_transaction((sql))

    def execute_batch(self, queries:list):
        self.handle_transaction((';').join(queries), many=True)
