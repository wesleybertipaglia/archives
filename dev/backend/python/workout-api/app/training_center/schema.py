from app.contrib.schema import BaseSchema
from typing import Annotated
from pydantic import Field

class TrainingCenterSchema(BaseSchema):
    name: Annotated[str, Field(description='Training center name', example='CT King', max_length=20)]
    address: Annotated[str, Field(description='Training center address', example='Street X, 000', max_length=60)]
    owner: Annotated[str, Field(description='Training center owner', example='Mark Silver', max_length=30)]