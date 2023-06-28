import Facewash from "../assests/images/Facewash.jpeg";
import Phone from "../assests/images/Phone.jpeg";
import Sandels from "../assests/images/Sandels.jpeg";
import Shirt from "../assests/images/Shirt.jpeg";
import Shoes from "../assests/images/Shoes.jpeg";


export default function InitialProducts() {
    return [
        {
            key: 1,
            name:'Shoes',
            price:1500,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Shoes,
            category: 'FOOTWEAR',
            modifiedDate: new Date().toLocaleString(),
            quantity: 50,
            manufacturer: 'Nike'
        },
        {
            key: 2,
            name:'Shirt',
            price:500,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Shirt,
            category: 'APPAREL',
            modifiedDate: new Date().toLocaleString(),
            quantity: 100,
            manufacturer: 'Nike'
        },
        {
            key: 3,
            name:'Phone',
            price:75000,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Phone,
            category: 'ELECTRONICS',
            modifiedDate: new Date().toLocaleString(),
            quantity: 500,
            manufacturer: 'Apple'
        },
        {
            key: 4,
            name:'Face Wash',
            price:500,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Facewash,
            category: 'PERSONAL CARE',
            modifiedDate: new Date().toLocaleString(),
            quantity: 200,
            manufacturer: 'Japan'
        },
        {
            key: 5,
            name:'Sandels',
            price:700,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Sandels,
            category: 'FOOTWEAR',
            modifiedDate: new Date().toLocaleString(),
            quantity: 70,
            manufacturer: 'Japan'
        }
    ];
}