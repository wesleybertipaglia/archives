class User:
    def __init__(self, db):
        self.db = db
        self.__create_table()

    def __create_table(self):
        self.db.create_table('users', 'id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100), email VARCHAR(100), password VARCHAR(100)')
        self.db.create_table('followers', 'user_id INTEGER, followed_id INTEGER')

    def create_user(self, fields:tuple, many:bool=False):
        self.db.create_row('users', '(name, email, password)', fields, many)

    def update_user(self, user_id:int, name:str, email:str, password:str):
        self.db.update_row('users', user_id, (name, email, password))

    def delete_user(self, user_id:int):
        self.db.delete_row('users', user_id)

    def follow_user(self, user_id:int, followed_id:int):
        self.db.create_row('followers', '(user_id, followed_id)', (user_id, followed_id))