class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров
        //        this.allProducts=[];//массив объектов
        this._fetchProducts();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            //            this.allProducts.push(productObject);
            //            block.innerHTML += productObject.render();
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }

    /*Ex 2:
    Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.*/
    priceOfAllItems(){
        let result = 0;
        this.goods.forEach(function(item) {
            result += item.price;
        });
        return result;
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductsList();
list.render();
console.log(list.priceOfAllItems());

/*Ex 1:
Добавьте пустые классы для корзины товаров и элемента корзины товаров.
Продумайте, какие методы понадобятся для работы с этими сущностями.*/

class Cart {
    constructor() { }
    addItem() { }
    deleteItem() { }
    render() { }
}

class CartItem {
    constructor() { }
    render() { }
}





