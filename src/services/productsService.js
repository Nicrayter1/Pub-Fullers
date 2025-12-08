c// productsService.js
import { supabase } from './supabaseClient.js';

export class ProductsService {
    static async getAll() {
        // Проверяем, авторизован ли пользователь
        const user = AuthService.getCurrentUser();
        if (!user) {
            throw new Error('Пользователь не авторизован');
        }
        
        const { data, error } = await supabase
            .from('products')
            .select('*');
        
        if (error) throw error;
        return data;
    }
    
    static async create(product) {
        const user = AuthService.getCurrentUser();
        if (!user) throw new Error('Не авторизован');
        
        // Добавляем ID пользователя в продукт
        const productWithUser = {
            ...product,
            user_id: user.id,
            created_at: new Date().toISOString()
        };
        
        const { data, error } = await supabase
            .from('products')
            .insert([productWithUser])
            .select();
        
        if (error) throw error;
        return data;
    }
}


