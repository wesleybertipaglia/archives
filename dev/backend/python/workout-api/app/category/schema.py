from app.contrib.schema import BaseSchema
from typing import Annotated
from pydantic import Field

class CategorySchema(BaseSchema):
    name: Annotated[str, Field(description='Category name', example='Scale', max_length=10)]   