from datetime import datetime
from app.contrib.model import BaseModel
from sqlalchemy import DateTime, Integer, String, Float, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

class Athlete(BaseModel):
    __tablename__ = 'athletes'

    pk_id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(50), nullable=False)
    cpf: Mapped[str] = mapped_column(String(14), nullable=False)
    age: Mapped[int] = mapped_column(Integer, nullable=False)
    height: Mapped[float] = mapped_column(Float, nullable=False)
    weight: Mapped[float] = mapped_column(Float, nullable=False)
    gender: Mapped[str] = mapped_column(String(1), nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, nullable=False)
    category: Mapped['Category'] = relationship(back_populates='athlete')
    category_id: Mapped[int] = mapped_column(ForeignKey('categories.pk_id'))
    training_center: Mapped['TrainingCenter'] = relationship(back_populates='athlete')
    training_center_id: Mapped[int] = mapped_column(ForeignKey('trainingcenters.pk_id'))
