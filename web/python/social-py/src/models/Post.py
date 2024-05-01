class Post:
    def __init__(self, db):
        self.db = db
        self.__create_table()

    def __create_table(self):
        self.db.create_table('posts', 'id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, content TEXT')
        self.db.create_table('likes', 'user_id INTEGER, post_id INTEGER')
        self.db.create_table('shares', 'user_id INTEGER, post_id INTEGER')
        self.db.create_table('saves', 'user_id INTEGER, post_id INTEGER')

    def create_post(self, user_id, content):
        self.db.create_row('posts', '(user_id, content)', (user_id, content))

    def delete_post(self, post_id):
        self.db.delete_row('posts', post_id)

    def like_post(self, user_id, post_id):
        self.db.create_row('likes', '(user_id, post_id)', (user_id, post_id))

    def unlike_post(self, user_id, post_id):
        self.db.delete_row('likes', (user_id, post_id))

    def save_post(self, user_id, post_id):
        self.db.create_row('saves', '(user_id, post_id)', (user_id, post_id))

    def unsave_post(self, user_id, post_id):
        self.db.delete_row('saves', (user_id, post_id))    

    def share_post(self, user_id, post_id):
        self.db.create_row('shares', '(user_id, post_id)', (user_id, post_id))