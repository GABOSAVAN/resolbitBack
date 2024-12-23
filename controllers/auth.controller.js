import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const login = async (req, res) => {
  const filePath = path.join(__dirname, "../models", "user.json");

  console.log("Ruta del archivo:", filePath);

  try {
    const { body } = req;
    console.log("body...", body.email);
    const data = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(data);

    const user = users.find(
      (u) => u.email === body.email && u.password === body.password
    );

    if (user) {
      const userF = {
        name: user.name,
        email: user.email,
        role: user.role,
      };

      return res.status(200).json({
        status: 200,
        User: userF,
      });
    } else {
      console.log("Usuario no encontrado o credenciales incorrectas.");
      return res.status(200).json({
        status: 404,
        message: "usuario no existe",
      });
    }
  } catch (error) {
    console.log("An error occurred:", error);
    return res.status(500).send({
      message: error.message,
    });
  }
};
