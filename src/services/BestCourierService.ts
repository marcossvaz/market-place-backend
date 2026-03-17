// that is my main courier service, my model pattern

import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export class BestCourierService {

    async calculate(cep: string, dataCart: any) {
        
        let ProductCartRepository = [];

        if(dataCart) {
            ProductCartRepository.push(...dataCart);
        }

        if(dataCart) {
            ProductCartRepository.push(...dataCart);
        }





        const dataPayloadCalculateShipping = () => {
            const data: any =[];

            ProductCartRepository.map((product: any) => {
                data.push({
                    id: product.id,
                    width: product.size.width,
                    height: product.size.height,
                    lenght: product.size.lenght,
                    weight: product.size.weight,
                    quantity: product.size.quantity,
                    insurance_value: product.size.insurance_value
                })
            })

            return data;
        };

        const result = await axios.post('https://melhorenvio.com.br/api/v2/me/shipment/calculate', {

            "from": {
                "postal_code": process.env.CEP_ORIGEM
            },
            "to": {
                "postal_code": "01018020"
            },
            "products": [
                {
                    "id": "Produto A",
                    "width": 11, //cm
                    "height": 17, //cm
                    "length": 11, //cm
                    "weight": 1, //kg
                    "insurance_value": 10.1, //BRL
                    "quantity": 1 //unidade de produto
                },
                {
                    "id": "Produto B",
                    "width": 10,
                    "height": 10,
                    "length": 12,
                    "weight": 0.2,
                    "insurance_value": 10.1,
                    "quantity": 5
                }
            ],
            "options": {
                "receipt": false,
                "own_hand": false
            },
            "services": "1,2,18"

        }, {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN_MELHOR_ENVIO}`,
                "User-Agent": "Aplicação (Marcos.si.vaz@gmail.com)"
            }
        });

        const returns = {pac :{price: 0, term: 0}, sedex: {price: 0, term: 0}}

        const pac = result.data.find((item: any) => item.name === 'PAC');


        if(pac) {
            returns.pac = {
                price: parseFloat(pac.price),
                term: pac.delivery_time
            }
        }

        return result.data;
    }
}