import fs from 'fs/promises';
import path from 'path';

const dbPath = path.resolve('models/products.json');

export const getProducts = async (req, res) => {
  try {
    
    const data = await fs.readFile(dbPath, 'utf8');
    const products = JSON.parse(data);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load products.' });
  }
};
