from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List
from datetime import datetime
import uuid

class User(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    name: str
    password_hash: str
    account_type: str = "buyer"  # buyer or seller
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
class UserCreate(BaseModel):
    email: EmailStr
    name: str
    password: str
    account_type: str = "buyer"

class UserLogin(BaseModel):
    email: EmailStr
    password: str
    
class UserResponse(BaseModel):
    id: str
    email: str
    name: str
    account_type: str
    created_at: datetime

class Token(BaseModel):
    access_token: str
    token_type: str
    user: UserResponse

class CartItem(BaseModel):
    product_id: str  # Changed from int to str for UUID compatibility
    quantity: int
    is_pool_purchase: bool = False

class Cart(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    items: List[CartItem] = []
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class Order(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    items: List[CartItem]  # Changed to store CartItem objects
    total_amount: float
    payment_status: str = "pending"  # pending, completed, failed
    order_status: str = "processing"  # processing, shipped, delivered, cancelled
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
class OrderCreate(BaseModel):
    items: List[CartItem]
    total_amount: float

class SellerProduct(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    seller_id: str
    name: str
    nameRw: str
    description: str
    descriptionRw: str
    category: str
    image: str
    images: List[str] = []
    
    regularPrice: float
    perItemPrice: float
    poolPrice: float
    
    poolSize: int
    poolCurrent: int
    rating: float

    status: str = "pending"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
class SellerProductCreate(BaseModel):
    name: str
    nameRw: str
    description: str
    descriptionRw: str
    category: str
    image: str
    images: List[str] = []
    
    regularPrice: float
    perItemPrice: float
    poolPrice: float
    
    poolSize: int
    poolCurrent: int
    rating: float