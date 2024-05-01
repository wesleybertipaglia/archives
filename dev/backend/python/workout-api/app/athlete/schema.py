from app.contrib.schema import BaseSchema
from typing import Annotated
from pydantic import Field, PositiveInt, PositiveFloat

class AthleteSchema(BaseSchema):
    name: Annotated[str, Field(description='Atlhete name', example='Wesley', max_length=50)]
    cpf: Annotated[str, Field(description='CPF of the Atlhete', example='000.000.000-00', max_length=14)]
    age: Annotated[PositiveInt, Field(description='Age of the Atlhete', example=21)]
    gender: Annotated[str, Field(description='Gender of the Atlhete', example='M', max_length=1)]
    height: Annotated[PositiveFloat, Field(description='Height of the Atlhete', example=1.7)]
    weight: Annotated[PositiveFloat, Field(description='Weight of the Atlhete', example=70)]