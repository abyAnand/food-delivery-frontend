import { FoodItem } from "src/app/Shared/Models/FoodItem";
import { Restaurant } from "src/app/Shared/Models/Restaurant";
export interface OrderDTO{

    foodItemsList?: FoodItem[];
    userId?: number;
    restaurant?: Restaurant;
}
